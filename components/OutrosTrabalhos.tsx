import { OUTROS_TRABALHOS } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

/**
 * Reaproveita as classes de `.projeto-card` — mesma linguagem visual das
 * outras seções, sem introduzir CSS novo.
 */
export default function OutrosTrabalhos() {
  return (
    <section id="outros-trabalhos" className="section">
      <SectionTitle icone="/assets/suitcase.png">Outros Trabalhos</SectionTitle>

      <div className="projetos-grid">
        {OUTROS_TRABALHOS.map((t, i) => (
          <Reveal key={t.titulo} className="projeto-card" delay={0.06 * i}>
            <h3 className="projeto-titulo">{t.titulo}</h3>
            <p className="projeto-descricao">{t.descricao}</p>
            <div className="tech-container">
              {t.tags.map((tag) => (
                <span key={tag} className="tech-pill">
                  {tag}
                </span>
              ))}
            </div>
            {t.status && (
              <div className="projeto-impacto">
                <strong>Status:</strong> {t.status}
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}