import { PERFIL } from "@/data/portfolio";

export default function Footer() {
  // Renderizado no servidor a cada build — sem descompasso de hidratação.
  const ano = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {ano} {PERFIL.nome} — Desenvolvido com Next.js, React &amp; TypeScript
      </p>
      <p>
        Deploy contínuo na Vercel · Versão web do portfólio originalmente feito
        em Python
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/python.png"
          className="icon-footer"
          alt="Python"
          width={16}
          height={16}
        />
      </p>
    </footer>
  );
}