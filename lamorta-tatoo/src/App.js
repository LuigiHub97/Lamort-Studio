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

      const res = await fetch("http://localhost:5000/api/galeria");

      if (!res.ok) {
        throw new Error("Erro ao buscar galeria");
      }

      const data = await res.json();

      // DEBUG (pode remover depois)
      console.log("GALERIA API:", data);

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

      {/* HERO */}
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

          {/* SOCIAL */}
          <div className="social-icons">
            <a href="https://instagram.com/lamort.ink" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>

            <a href="https://www.threads.net/@lamort.ink" target="_blank" rel="noreferrer">
              <SiThreads />
            </a>

            <a href="https://facebook.com/lamort.studio" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
          </div>

        </div>
      </div>

      {/* CONTEÚDO CENTRAL */}
      <div className="main-center">

        {secao === "home" && (
          <p style={{ color: "white" }}>
            Bem-vindo ao Lamort Tattoo Studio
          </p>
        )}

        {secao === "historia" && (
          <p style={{ color: "white" }}>Quem somos...</p>
        )}

        {secao === "studio" && (
          <p style={{ color: "white" }}>Studio info...</p>
        )}

        {secao === "tatuador" && (
          <p style={{ color: "white" }}>Tatuador info...</p>
        )}

        {secao === "galeria" && (
          <div className="galeria-wrapper">

            {loading && (
              <p style={{ color: "white" }}>Carregando galeria...</p>
            )}

            <div className="galeria-container">

              {imagens.length === 0 && !loading && (
                <p style={{ color: "white" }}>
                  Nenhuma imagem encontrada
                </p>
              )}

              {imagens.map((img) => (
                <div key={img.id} className="galeria-item">

                  <img
                    src={`http://localhost:3000${img.nome}`}
                    alt={img.titulo}
                  />

                  <p style={{ color: "white" }}>
                    {img.titulo}
                  </p>

                </div>
              ))}

            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;