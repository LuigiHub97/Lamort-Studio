 import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
 import { SiThreads } from "react-icons/si";
 
 function Sidebar({ abrirSecao, secaoAtiva }) {
    return( 
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
    );
}

export default Sidebar;