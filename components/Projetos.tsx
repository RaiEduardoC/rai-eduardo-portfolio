import { PROJETOS } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Projetos() {
  return (
    <section id="projetos" className="section">
      <SectionTitle icone="/assets/start-up.png">
        Projetos &amp; Realizações
      </SectionTitle>

      <div className="projetos-grid">
        {PROJETOS.map((p, i) => (
          <Reveal key={p.titulo} className="projeto-card" delay={0.05 * i}>
            <h3 className="projeto-titulo">{p.titulo}</h3>
            <p className="projeto-descricao">{p.descricao}</p>
            <div className="tech-container">
              {p.tecnologias.map((t) => (
                <span key={t} className="tech-pill">
                  {t}
                </span>
              ))}
            </div>
            <div className="projeto-impacto">
              <strong>💡 Impacto:</strong> {p.impacto}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}