import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function ImageModal({
  imagens,
  imagemAtual,
  fecharModal,
  proximaImagem,
  imagemAnterior,
}) {
  return (
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
  );
}

export default ImageModal;