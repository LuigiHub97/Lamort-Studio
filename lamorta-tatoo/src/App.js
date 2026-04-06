import { useEffect, useState } from "react";
import "./App.css";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { SiThreads } from "react-icons/si";

function App() {
  const [secao, setSecao] = useState(null);
  const [imagens, setImagens] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);
  const [imagemAtual, setImagemAtual] = useState(0);

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
  }, [modalAberto, imagens.length]);

  async function carregarGaleria() {
    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/galeria");

      if (!res.ok) {
        throw new Error("Erro ao buscar galeria");
      }

      const data = await res.json();
      setImagens(data);
    } catch (err) {
      console.log("Erro galeria:", err);
      setImagens([]);
    } finally {
      setLoading(false);
    }
  }

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

      <aside className="sidebar">
        <div className="sidebar-content">
          <div className="sidebar-top">
            <div className="brand-block">
              <h1>LAMORT</h1>
              <p>TATTOO STUDIO</p>
            </div>

            <a
              href="https://wa.me/5511913490538"
              target="_blank"
              rel="noreferrer"
              className="agendar-btn"
            >
              <FaWhatsapp />
              <span>AGENDAR SESSÃO</span>
            </a>

            <nav className="nav-menu">
              <button
                className={secaoAtiva("galeria")}
                onClick={() => abrirSecao("galeria")}
              >
                Galeria
              </button>

              <button
                className={secaoAtiva("historia")}
                onClick={() => abrirSecao("historia")}
              >
                História
              </button>

              <button
                className={secaoAtiva("tatuador")}
                onClick={() => abrirSecao("tatuador")}
              >
                Tatuador
              </button>

              <button
                className={secaoAtiva("studio")}
                onClick={() => abrirSecao("studio")}
              >
                Studio
              </button>
            </nav>
          </div>

          <div className="sidebar-footer">
            <div className="social-icons">
              <a
                href="https://instagram.com/lamort.ink"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.threads.net/@lamort.ink"
                target="_blank"
                rel="noreferrer"
                aria-label="Threads"
              >
                <SiThreads />
              </a>

              <a
                href="https://facebook.com/lamort.studio"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </div>

            <span className="sidebar-signature">
              DARK ART • PRECISION • IDENTITY
            </span>
          </div>
        </div>
      </aside>

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

        {secao && (
          <section className="content-panel">
            <button className="panel-close" onClick={fecharPainel}>
              <FaTimes />
            </button>

            {secao === "galeria" && (
              <div className="panel-inner">
                <div className="section-top">
                  <span className="small-tag">PORTFÓLIO</span>
                  <h2>Galeria</h2>
                  <p>
                    Trabalhos selecionados do Lamort Tattoo Studio. A ideia aqui
                    é deixar o fundo respirar e abrir o portfólio só quando a
                    pessoa quiser ver.
                  </p>
                </div>

                {loading && (
                  <div className="section-message">Carregando galeria...</div>
                )}

                {!loading && imagens.length === 0 && (
                  <div className="section-message">
                    Nenhuma imagem encontrada.
                  </div>
                )}

                {!loading && imagens.length > 0 && (
                  <div className="galeria-grid">
                    {imagens.map((img, index) => (
                      <article
                        key={img.id}
                        className={`galeria-card ${
                          index % 5 === 0 ? "tall" : ""
                        }`}
                        onClick={() => abrirModal(index)}
                      >
                        <img
                          src={`http://localhost:3000${img.nome}`}
                          alt={img.titulo || "Lamort Tattoo"}
                        />

                        <div className="galeria-overlay">
                          <span>{img.titulo || "Lamort Tattoo"}</span>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            )}

            {secao === "historia" && (
              <div className="panel-inner">
                <div className="section-top">
                  <span className="small-tag">IDENTIDADE</span>
                  <h2>História</h2>
                </div>

                <div className="text-card">
                  <p>
                    O Lamort Tattoo Studio nasce de uma proposta simples: criar
                    trabalhos com peso visual, atmosfera própria e identidade
                    marcante.
                  </p>

                  <p>
                    Não é sobre fazer tatuagem genérica. É sobre construir peças
                    que conversem com presença, estética e personalidade.
                  </p>

                  <p>
                    A ideia do site agora é seguir essa mesma lógica: menos
                    excesso na tela, mais impacto visual e conteúdo aparecendo só
                    quando a pessoa clicar.
                  </p>
                </div>
              </div>
            )}

            {secao === "tatuador" && (
              <div className="panel-inner">
                <div className="section-top">
                  <span className="small-tag">ARTISTA</span>
                  <h2>Tatuador</h2>
                </div>

                <div className="text-card">
                  <p>
                    Esse espaço é para apresentar a visão artística, os estilos
                    preferidos, a forma de construir cada peça e o cuidado com o
                    processo.
                  </p>

                  <p>
                    Em vez de encher a tela de texto, o ideal aqui é manter uma
                    apresentação forte, curta e com personalidade.
                  </p>

                  <p>
                    Depois a gente pode lapidar esse texto com mais cara de marca
                    premium e menos cara de texto genérico de portfólio.
                  </p>
                </div>
              </div>
            )}

            {secao === "studio" && (
              <div className="panel-inner">
                <div className="section-top">
                  <span className="small-tag">ESPAÇO</span>
                  <h2>Studio</h2>
                </div>

                <div className="text-card">
                  <p>
                    Aqui entra o ambiente, a estrutura, os cuidados com higiene e
                    a experiência do cliente dentro do estúdio.
                  </p>

                  <p>
                    Essa seção serve para gerar confiança sem competir com o
                    impacto visual do site.
                  </p>

                  <p>
                    O mais importante agora é: o fundo continua aparecendo, o
                    layout continua limpo e a funcionalidade continua existindo.
                  </p>
                </div>
              </div>
            )}
          </section>
        )}
      </main>

      {modalAberto && imagens.length > 0 && (
        <div className="modal-overlay" onClick={fecharModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={fecharModal}>
              <FaTimes />
            </button>

            <button className="modal-nav modal-prev" onClick={imagemAnterior}>
              <FaChevronLeft />
            </button>

            <div className="modal-image-box">
              <img
                src={`http://localhost:3000${imagens[imagemAtual].nome}`}
                alt={imagens[imagemAtual].titulo || "Tattoo"}
                className="modal-image"
              />

              <div className="modal-caption">
                <h3>{imagens[imagemAtual].titulo || "Lamort Tattoo"}</h3>
                <p>
                  {imagemAtual + 1} / {imagens.length}
                </p>
              </div>
            </div>

            <button className="modal-nav modal-next" onClick={proximaImagem}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;