import { PERFIL } from "@/data/portfolio";

export default function Header() {
  return (
    <header className="header-container">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/foto-perfil.jpg"
        className="header-avatar"
        alt={PERFIL.nome}
        width={128}
        height={128}
        fetchPriority="high"
      />
      <div className="header-text">
        <span className="badge-disponivel">
          <span className="badge-dot" aria-hidden="true" />
          Disponível para novas oportunidades
        </span>
        <h1 className="header-name">{PERFIL.nome}</h1>
        <p className="header-role">{PERFIL.cargo}</p>
        <p className="header-location">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/localizacao.png" className="icon" alt="" width={18} height={18} />
          {PERFIL.localizacao}
        </p>
      </div>
    </header>
  );
}