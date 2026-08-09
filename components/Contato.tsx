import { PERFIL } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const CANAIS = [
  {
    href: `mailto:${PERFIL.email}`,
    icone: "/assets/gmail.png",
    label: "E-mail",
    valor: PERFIL.email,
    externo: false,
  },
  {
    href: PERFIL.linkedin,
    icone: "/assets/linkedin.png",
    label: "LinkedIn",
    valor: PERFIL.linkedinHandle,
    externo: true,
  },
  {
    href: PERFIL.github,
    icone: "/assets/github.png",
    label: "GitHub",
    valor: PERFIL.githubHandle,
    externo: true,
  },
  {
    href: `https://wa.me/${PERFIL.whatsapp}`,
    icone: "/assets/whatsapp.png",
    label: "WhatsApp",
    valor: PERFIL.telefone,
    externo: true,
  },
];

export default function Contato() {
  return (
    <section id="contato" className="section">
      <SectionTitle icone="/assets/gmail.png">Vamos Conversar?</SectionTitle>

      <div className="contato-container">
        <p className="contato-intro">
          Estou aberto a oportunidades, colaborações e novos desafios na área de{" "}
          <strong>Dados, BI e Automação</strong>.
        </p>

        <div className="contato-grid">
          {CANAIS.map((c, i) => (
            <Reveal key={c.label} delay={0.06 * i}>
              <a
                href={c.href}
                className="contato-card"
                {...(c.externo
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <div className="contato-icone">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.icone}
                    className="icon-contact"
                    alt=""
                    width={34}
                    height={34}
                    aria-hidden="true"
                  />
                </div>
                <div className="contato-label">{c.label}</div>
                <div className="contato-valor">{c.valor}</div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}