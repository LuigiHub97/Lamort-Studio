import "./App.css";
import Galeria from "./galeria";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { SiThreads } from "react-icons/si";

function App() {
  return (
    <div className="App">
      {/* HERO */}
      <div className="hero">
        <div className="hero-content">
          <h1>LAMORT</h1>
          <p>TATTOO STUDIO</p>

          <button>
            <span>AGENDAR SESSÃO</span>
          </button>

          {/* 👇 ADICIONA ISSO */}
          <div className="hero-social">
            <a
              href="https://www.instagram.com/lamort.ink/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.threads.com/@lamort.ink"
              target="_blank"
              rel="noreferrer"
            >
              Threads
            </a>
            <a
              href="https://facebook.com/lamort.studio"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
          <button>História</button>
          <button>Tatuador</button>
          <button>Studio</button>
          {/* 👆 SÓ ISSO */}
        </div>
      </div>

      {/* GALERIA */}
      <Galeria />
    </div>
  );
}

export default App;
