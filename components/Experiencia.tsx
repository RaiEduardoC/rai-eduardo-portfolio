import { EXPERIENCIAS } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Experiencia() {
  return (
    <section id="experiencia" className="section">
      <SectionTitle icone="/assets/suitcase.png">
        Experiência Profissional
      </SectionTitle>

      <div className="timeline">
        {EXPERIENCIAS.map((exp) => (
          <div key={`${exp.cargo}-${exp.periodo}`} className="timeline-item">
            <Reveal className="exp-card">
              <div className="exp-header">
                <div>
                  <h3 className="exp-cargo">{exp.cargo}</h3>
                  <p className="exp-empresa">
                    {exp.empresa} · {exp.local}
                  </p>
                </div>
                <span className="exp-periodo">{exp.periodo}</span>
              </div>
              <p className="exp-descricao">{exp.descricao}</p>
              <div className="tags-container">
                {exp.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}