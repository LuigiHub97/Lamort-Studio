import { useState } from "react";
import "./App.css";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { SiThreads } from "react-icons/si";

function App() {
  const [secao, setSecao] = useState("home");
  const [imagens, setImagens] = useState([]);
  const [loading, setLoading] = useState(false);

  async function abrirGaleria() {
    try {
      setSecao("galeria");
      setLoading(true);

      const res = await fetch(
        "https://animated-space-zebra-pjvxv97p5rqqf7ppg-5000.app.github.dev/api/galeria",
      );

      const data = await res.json();
      setImagens(data);
    } catch (err) {
      console.log("Erro galeria:", err);
    } finally {
      setLoading(false);
    }
  }

  function voltarHome() {
    setSecao("home");
  }

  return (
    <div className="App">
      {/* HERO FIXO */}
      <div className="hero">
        <div className="hero-content">
          <h1>LAMORT</h1>
          <p>TATTOO STUDIO</p>

          <a
            href="https://wa.me/5511913490538"
            target="_blank"
            rel="noreferrer"
            className="agendar-btn"
          >
            <FaWhatsapp style={{ marginRight: "8px" }} />
            AGENDAR SESSÃO
          </a>

          {/* MENU */}
          <div className="hero-links">
            <button onClick={voltarHome}>Home</button>
            <button onClick={abrirGaleria}>Galeria</button>
            <button onClick={() => setSecao("historia")}>História</button>
            <button onClick={() => setSecao("tatuador")}>Tatuador</button>
            <button onClick={() => setSecao("studio")}>Studio</button>
          </div>

          {/* SOCIAL (NÃO SUME MAIS) */}
          <div className="social-icons">
            <a
              href="https://instagram.com/lamort.ink"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.threads.net/@lamort.ink"
              target="_blank"
              rel="noreferrer"
            >
              <SiThreads />
            </a>

            <a
              href="https://facebook.com/lamort.studio"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* ÁREA CENTRAL FIXA */}
      <div className="main-center">
        {secao === "historia" && (
          <p style={{ color: "white" }}>História do estúdio aqui...</p>
        )}

        {secao === "tatuador" && (
          <p style={{ color: "white" }}>Informações do tatuador aqui...</p>
        )}

        {secao === "studio" && (
          <p style={{ color: "white" }}>Informações do studio aqui...</p>
        )}

        {secao === "galeria" && (
          <div className="galeria-wrapper">
            {loading && <p style={{ color: "white" }}>Carregando...</p>}

            <div className="galeria-container">
              {imagens.map((img, i) => (
                <img
                  key={img.id || i}
                  src={img.url || img.image || img.src || img.path}
                  alt="tattoo"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
