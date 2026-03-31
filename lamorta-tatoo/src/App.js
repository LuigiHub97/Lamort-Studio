import { useEffect, useState } from "react";
import "./App.css";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";
import { SiThreads } from "react-icons/si";

function App() {
  const [secao, setSecao] = useState("home");
  const [imagens, setImagens] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    carregarGaleria();
  }, []);

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

  async function abrirGaleria() {
    setSecao("galeria");

    if (imagens.length === 0) {
      await carregarGaleria();
    }
  }

  function abrirHome() {
    setSecao("home");
  }

  function abrirHistoria() {
    setSecao("historia");
  }

  function abrirTatuador() {
    setSecao("tatuador");
  }

  function abrirStudio() {
    setSecao("studio");
  }

  const imagemDestaque = "/images/Logo.jpg";

  return (
    <div className="App">
      <aside className="sidebar">
        <div className="sidebar-content">
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
              className={secao === "home" ? "active" : ""}
              onClick={abrirHome}
            >
              Home
            </button>

            <button
              className={secao === "galeria" ? "active" : ""}
              onClick={abrirGaleria}
            >
              Galeria
            </button>

            <button
              className={secao === "historia" ? "active" : ""}
              onClick={abrirHistoria}
            >
              História
            </button>

            <button
              className={secao === "tatuador" ? "active" : ""}
              onClick={abrirTatuador}
            >
              Tatuador
            </button>

            <button
              className={secao === "studio" ? "active" : ""}
              onClick={abrirStudio}
            >
              Studio
            </button>
          </nav>

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

      <main className="content-area">
        {secao === "home" && (
          <section className="home-layout">
            <div
              className="hero-panel hero-panel-image"
              style={{
                backgroundImage: `
                  linear-gradient(
                    90deg,
                    rgba(10, 0, 18, 0.96) 0%,
                    rgba(18, 0, 30, 0.88) 35%,
                    rgba(25, 0, 40, 0.72) 60%,
                    rgba(8, 0, 14, 0.92) 100%
                  ),
                  linear-gradient(
                    180deg,
                    rgba(120, 0, 255, 0.10),
                    rgba(0, 0, 0, 0.25)
                  ),
                  url(${imagemDestaque})
                `,
              }}
            >
              <span className="small-tag">LAMORT EXPERIENCE</span>

              <h2>
                TATUAGEM COM
                <br />
                PRESENÇA,
                <br />
                IDENTIDADE E
                <br />
                PESO.
              </h2>

              <p className="hero-text">
                Um estúdio construído para transformar estética sombria em
                assinatura visual. Cada trabalho é pensado para marcar mais do
                que a pele: marcar presença.
              </p>

              <div className="hero-actions">
                <button className="primary-action" onClick={abrirGaleria}>
                  <span>VER GALERIA</span>
                  <FaArrowRight />
                </button>

                <a
                  href="https://wa.me/5511913490538"
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-action"
                >
                  FALAR NO WHATSAPP
                </a>
              </div>
            </div>

            <div className="home-side-grid">
              <div className="info-card highlight-card">
                <span className="card-label">ESTILO</span>
                <h3>Dark, impactante e autoral.</h3>
                <p>
                  Linhas fortes, atmosfera sombria e composição pensada para
                  destacar o corpo como obra.
                </p>
              </div>

              <div className="stats-row">
                <div className="mini-card">
                  <strong>Arte</strong>
                  <span>conceito visual forte</span>
                </div>

                <div className="mini-card">
                  <strong>Atendimento</strong>
                  <span>experiência premium</span>
                </div>
              </div>

              <div className="featured-preview">
                <div className="featured-header">
                  <span>DESTAQUES</span>
                  <button onClick={abrirGaleria}>abrir galeria</button>
                </div>

                {loading && (
                  <div className="preview-loading">Carregando prévia...</div>
                )}

                {!loading && imagens.length > 0 && (
                  <div className="preview-grid">
                    {imagens.slice(0, 3).map((img) => (
                      <div key={img.id} className="preview-item">
                        <img
                          src={`http://localhost:3000${img.nome}`}
                          alt={img.titulo || "Tattoo"}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {!loading && imagens.length === 0 && (
                  <div className="preview-loading">Sem imagens no momento.</div>
                )}
              </div>
            </div>
          </section>
        )}

        {secao === "galeria" && (
          <section className="galeria-page">
            <div className="section-top">
              <span className="small-tag">PORTFÓLIO</span>
              <h2>Galeria</h2>
              <p>
                Trabalhos selecionados do Lamort Tattoo Studio. Visual forte,
                acabamento pesado e assinatura própria.
              </p>
            </div>

            {loading && (
              <div className="section-message">Carregando galeria...</div>
            )}

            {!loading && imagens.length === 0 && (
              <div className="section-message">Nenhuma imagem encontrada.</div>
            )}

            {!loading && imagens.length > 0 && (
              <div className="galeria-grid">
                {imagens.map((img, index) => (
                  <article
                    key={img.id}
                    className={`galeria-card ${
                      index % 5 === 0 ? "tall" : ""
                    }`}
                  >
                    <img
                      src={`http://localhost:3000${img.nome}`}
                      alt={img.titulo || "Tattoo"}
                    />

                    <div className="galeria-overlay">
                      <span>{img.titulo || "Lamort Tattoo"}</span>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        )}

        {secao === "historia" && (
          <section className="text-page">
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
                Aqui você pode contar a origem do estúdio, a visão artística, a
                inspiração do nome Lamort e o tipo de experiência que o cliente
                vive ao entrar no espaço.
              </p>
            </div>
          </section>
        )}

        {secao === "tatuador" && (
          <section className="text-page">
            <div className="section-top">
              <span className="small-tag">ARTISTA</span>
              <h2>Tatuador</h2>
            </div>

            <div className="text-card">
              <p>
                Esse espaço é para sua apresentação profissional. Aqui entra sua
                visão, seus estilos preferidos, especialidades e a forma como
                você constrói cada projeto.
              </p>

              <p>
                Em vez de escrever igual todo mundo, o ideal é falar com
                personalidade. Mostrar processo, atenção aos detalhes e o tipo
                de arte que você entrega.
              </p>

              <p>
                Se quiser depois eu monto esse texto de forma pesada, elegante e
                com cara real de marca premium.
              </p>
            </div>
          </section>
        )}

        {secao === "studio" && (
          <section className="text-page">
            <div className="section-top">
              <span className="small-tag">ESPAÇO</span>
              <h2>Studio</h2>
            </div>

            <div className="text-card">
              <p>
                Aqui entra o ambiente, a estrutura, os cuidados com higiene, o
                conforto e o diferencial da experiência.
              </p>

              <p>
                Em site de estúdio, essa parte é importante para gerar
                confiança. Cliente quer sentir que está entrando em um lugar com
                padrão alto, organização e identidade.
              </p>

              <p>
                Quando quiser, eu também posso transformar essa seção em algo
                muito mais pesado visualmente, com cards, imagens e blocos de
                destaque.
              </p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;