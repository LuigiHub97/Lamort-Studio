import { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import ImageModal from "./components/ImageModal";
import ContentPanel from "./components/ContentPanel";
import { useGallery } from "./hooks/useGallery";

function App() {
  const [secao, setSecao] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [imagemAtual, setImagemAtual] = useState(0);
  const { imagens, loading, carregarGaleria } = useGallery();

  useEffect(() => {
    function handleKeyDown(e) {
      if (!modalAberto) return;

      if (e.key === "Escape") {
        fecharModal();
      }

      if (e.key === "ArrowRight") {
        proximaImagem();
      }

      if (e.key === "ArrowLeft") {
        imagemAnterior();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalAberto, imagens.length]);


  async function abrirSecao(nome) {
    setSecao(nome);

    if (nome === "galeria" && imagens.length === 0) {
      await carregarGaleria();
    }
  }

  function fecharPainel() {
    setSecao(null);
  }

  function abrirModal(index) {
    setImagemAtual(index);
    setModalAberto(true);
  }

  function fecharModal() {
    setModalAberto(false);
  }

  function proximaImagem() {
    if (imagens.length === 0) return;
    setImagemAtual((prev) => (prev + 1) % imagens.length);
  }

  function imagemAnterior() {
    if (imagens.length === 0) return;
    setImagemAtual((prev) => (prev - 1 + imagens.length) % imagens.length);
  }

  const secaoAtiva = (nome) => (secao === nome ? "active" : "");

  return (
    <div className="App">
      <div className="background-image"></div>
      <div className="background-overlay"></div>

      <Sidebar abrirSecao={abrirSecao} secaoAtiva={secaoAtiva} />

      <main className="stage">
        {!secao && (
          <section className="home-hero">
            <span className="small-tag">LAMORT EXPERIENCE</span>
            <h2>
              ARTE ESCURA,
              <br />
              PRESENÇA
              <br />
              E IDENTIDADE.
            </h2>
            <p>
              Um estúdio construído para transformar estética em assinatura
              visual. Menos ruído, mais impacto.
            </p>

            <div className="hero-actions">
              <button
                className="hero-primary"
                onClick={() => abrirSecao("galeria")}
              >
                VER GALERIA
              </button>

              <button
                className="hero-secondary"
                onClick={() => abrirSecao("historia")}
              >
                CONHECER O ESTÚDIO
              </button>
            </div>
          </section>
        )}

        <ContentPanel
          secao={secao}
          fecharPainel={fecharPainel}
          loading={loading}
          imagens={imagens}
          abrirModal={abrirModal}
        />
      </main>

      {modalAberto && imagens.length > 0 && (
        <ImageModal
          imagens={imagens}
          imagemAtual={imagemAtual}
          fecharModal={fecharModal}
          proximaImagem={proximaImagem}
          imagemAnterior={imagemAnterior}
        />
      )}
    </div>
  );
}

export default App;