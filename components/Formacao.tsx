import { CURSOS, FORMACOES, type Status } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

function statusClass(status: Status): string {
  if (status === "Cursando") return "status-cursando";
  if (status === "Trancado") return "status-trancado";
  return "status-concluido";
}

export default function Formacao() {
  return (
    <section id="formacao" className="section">
      <SectionTitle icone="/assets/graduation.png">
        Formação Acadêmica
      </SectionTitle>

      {FORMACOES.map((f) => (
        <Reveal key={f.curso} className="form-card">
          <div className="form-header">
            <h3 className="form-curso">{f.curso}</h3>
            <span className={`status-badge ${statusClass(f.status)}`}>
              {f.status}
            </span>
          </div>
          <p className="form-instituicao">
            {f.instituicao} · {f.periodo}
          </p>
          <p className="form-descricao">{f.descricao}</p>
        </Reveal>
      ))}

      <h3 className="subsection-title">Cursos &amp; Especializações</h3>

      <div className="cursos-grid">
        {CURSOS.map((c, i) => (
          <Reveal key={c.nome} className="curso-card" delay={0.04 * i}>
            <div className="curso-info">
              <h4>{c.nome}</h4>
              <p>
                {c.escola} · {c.ano}
              </p>
              <span className={`status-badge ${statusClass(c.status)}`}>
                {c.status}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}