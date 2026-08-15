import { CERTIFICADOS } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Certificados() {
  return (
    <section id="certificados" className="section">
      <SectionTitle icone="/assets/graduation.png">Certificados</SectionTitle>

      <p className="cert-intro">
        Galeria com meus certificados de conclusão. Todos estão disponíveis para{" "}
        <strong>download em PDF</strong> — são{" "}
        <strong>{CERTIFICADOS.length}</strong> certificados no total.
      </p>

      <div className="cert-grid">
        {CERTIFICADOS.map((c, i) => (
          <Reveal key={c.arquivo} className="cert-item" delay={0.05 * i}>
            <div className="cert-card">
              <span className="cert-badge">PDF</span>
              <div className="cert-icone">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.icone} alt="" width={40} height={40} aria-hidden="true" />
              </div>
              <h3 className="cert-titulo">{c.titulo}</h3>
              <p className="cert-escola">
                {[c.escola, c.ano].filter(Boolean).join(" · ")}
              </p>
            </div>
            <a
              href={c.arquivo}
              className="cert-download"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3v12" />
                <path d="M7 10l5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
              Baixar PDF
              <span className="sr-only"> — {c.titulo}</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}