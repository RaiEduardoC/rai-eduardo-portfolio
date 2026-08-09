import Certificados from "@/components/Certificados";
import Competencias from "@/components/Competencias";
import Contato from "@/components/Contato";
import Experiencia from "@/components/Experiencia";
import Footer from "@/components/Footer";
import Formacao from "@/components/Formacao";
import Header from "@/components/Header";
import OutrosTrabalhos from "@/components/OutrosTrabalhos";
import Projetos from "@/components/Projetos";
import Sidebar from "@/components/Sidebar";
import Sobre from "@/components/Sobre";

/**
 * Página única com navegação por âncoras.
 *
 * No Streamlit cada item do menu recarregava o app inteiro; aqui todas as
 * seções são renderizadas estaticamente no build e a sidebar apenas faz
 * scroll suave — carregamento instantâneo e conteúdo indexável pelo Google.
 */
export default function Home() {
  return (
    <div className="layout">
      <Sidebar />

      <main className="main">
        <div className="main-inner">
          <Header />
          <hr className="divider" />

          <Sobre />
          <Experiencia />
          <Formacao />
          <Certificados />
          <Competencias />
          <Projetos />
          <OutrosTrabalhos />
          <Contato />

          <Footer />
        </div>
      </main>
    </div>
  );
}