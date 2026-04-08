import TattooCarousel from "./TattooCarousel";
import { siteContent } from "../data/siteContent";

function ContentPanel({
  secao,
  fecharPainel,
  loading,
  imagens,
  abrirModal,
}) {
  if (!secao) return null;

  const isTextSection =
    secao === "historia" || secao === "tatuador" || secao === "studio";

  const currentContent = isTextSection ? siteContent[secao] : null;

  return (
    <section className="content-panel">
      <button className="panel-close" onClick={fecharPainel}>
        ×
      </button>

      {secao === "galeria" && (
        <div className="panel-inner">
          <div className="section-top">
            <span className="small-tag">PORTFÓLIO</span>
            <h2>Galeria</h2>
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
            <TattooCarousel imagens={imagens} abrirModal={abrirModal} />
          )}
        </div>
      )}

      {isTextSection && currentContent && (
        <div className="panel-inner">
          <div className="section-top">
            <span className="small-tag">{currentContent.tag}</span>
            <h2>{currentContent.title}</h2>
          </div>

          <div className="text-card">
            {currentContent.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default ContentPanel;