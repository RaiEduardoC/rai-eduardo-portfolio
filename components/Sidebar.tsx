"use client";

import { useCallback, useEffect, useState } from "react";

import { PERFIL, SECOES } from "@/data/portfolio";

/**
 * Substitui o `st.radio` da sidebar do Streamlit.
 * Em vez de re-renderizar a página inteira a cada clique, faz scroll suave
 * para a âncora e destaca a seção visível (scroll-spy via IntersectionObserver).
 */
export default function Sidebar() {
  const [ativo, setAtivo] = useState<string>(SECOES[0].id);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const alvos = SECOES.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (alvos.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // A seção "ativa" é a que está mais próxima do topo entre as visíveis.
        const visiveis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visiveis.length > 0) setAtivo(visiveis[0].target.id);
      },
      // A faixa estreita no topo evita que duas seções disputem o destaque.
      { rootMargin: "-10% 0px -75% 0px", threshold: 0 },
    );

    alvos.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Trava o scroll do body enquanto o menu mobile está aberto.
  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAberto(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const irPara = useCallback((e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    // Atualiza a URL sem recarregar, para o link ser compartilhável.
    history.replaceState(null, "", `#${id}`);
    setAtivo(id);
    setAberto(false);
  }, []);

  return (
    <>
      <button
        type="button"
        className="nav-toggle"
        aria-label={aberto ? "Fechar menu" : "Abrir menu"}
        aria-expanded={aberto}
        aria-controls="sidebar-nav"
        onClick={() => setAberto((v) => !v)}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          {aberto ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      <div
        className={`nav-overlay${aberto ? " show" : ""}`}
        onClick={() => setAberto(false)}
        aria-hidden="true"
      />

      <aside
        id="sidebar-nav"
        className={`sidebar${aberto ? " open" : ""}`}
        aria-label="Navegação principal"
      >
        <div className="sidebar-profile">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/foto-perfil.jpg"
            className="sidebar-avatar"
            alt={PERFIL.nome}
            width={92}
            height={92}
          />
          <h3>{PERFIL.nomeCurto}</h3>
          <p>{PERFIL.cargoCurto}</p>
        </div>

        <nav className="sidebar-nav">
          {SECOES.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`nav-item${ativo === s.id ? " active" : ""}`}
              aria-current={ativo === s.id ? "true" : undefined}
              onClick={(e) => irPara(e, s.id)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.icone} alt="" width={20} height={20} aria-hidden="true" />
              {s.label}
            </a>
          ))}
        </nav>

        <hr className="sidebar-divider" />

        <div className="sidebar-links">
          <a href={PERFIL.linkedin} target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/linkedin.png" className="icon" alt="" width={18} height={18} />
            LinkedIn
          </a>
          <a href={PERFIL.github} target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/github.png" className="icon" alt="" width={18} height={18} />
            GitHub
          </a>
        </div>
      </aside>
    </>
  );
}