import { METRICAS, PERFIL } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Sobre() {
  return (
    <section id="inicio" className="section">
      <SectionTitle icone="/assets/user.png">Sobre Mim</SectionTitle>

      <Reveal className="about-card">
        <p>{PERFIL.resumo}</p>
      </Reveal>

      <Reveal className="cta-row" delay={0.08}>
        <a href="#projetos" className="btn btn-primary">
          Ver Projetos
        </a>
        <a href="#contato" className="btn btn-secondary">
          Fale Comigo
        </a>
      </Reveal>

      <div className="metrics-grid">
        {METRICAS.map((m, i) => (
          <Reveal key={m.label} className="metric-card" delay={0.06 * i}>
            <div className="metric-value">{m.valor}</div>
            <div className="metric-label">{m.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}