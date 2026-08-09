import { COMPETENCIAS, nivelLabel } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Competencias() {
  return (
    <section id="competencias" className="section">
      <SectionTitle icone="/assets/flash.png">
        Competências Técnicas
      </SectionTitle>

      {COMPETENCIAS.map((bloco) => (
        <div key={bloco.categoria}>
          <h3 className="skill-category">{bloco.categoria}</h3>
          {bloco.skills.map((s, i) => (
            <Reveal key={s.nome} className="skill-item" delay={0.05 * i}>
              <div className="skill-header">
                <span className="skill-name">{s.nome}</span>
                <span className="skill-level">{nivelLabel(s.nivel)}</span>
              </div>
              <div
                className="skill-bar"
                role="meter"
                aria-valuenow={s.nivel}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${s.nome}: ${nivelLabel(s.nivel)}`}
              >
                <div className="skill-fill" style={{ width: `${s.nivel}%` }} />
              </div>
            </Reveal>
          ))}
        </div>
      ))}
    </section>
  );
}