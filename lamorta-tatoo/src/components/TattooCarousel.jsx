import { useState } from "react";

function TattooCarousel({ imagens, abrirModal }) {
  const [indexAtual, setIndexAtual] = useState(0);

  if (!imagens || imagens.length === 0) {
    return <div className="section-message">Nenhuma imagem encontrada.</div>;
  }

  const total = imagens.length;

  const voltar = () => {
    setIndexAtual((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const avancar = () => {
    setIndexAtual((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const indexAnterior = indexAtual === 0 ? total - 1 : indexAtual - 1;
  const indexProximo = indexAtual === total - 1 ? 0 : indexAtual + 1;

  const imagemAnterior = imagens[indexAnterior];
  const imagemAtual = imagens[indexAtual];
  const imagemProxima = imagens[indexProximo];

  return (
    <div className="tattoo-carousel">
      <button className="carousel-arrow left" onClick={voltar} type="button">
        ‹
      </button>

      <div className="carousel-content">
        <article className="carousel-side-card" onClick={voltar}>
          <img
            src={`http://localhost:3000${imagemAnterior.nome}`}
            alt={imagemAnterior.titulo || "Lamort Tattoo"}
          />
        </article>

        <article
          className="carousel-main-card"
          onClick={() => abrirModal(indexAtual)}
        >
          <img
            src={`http://localhost:3000${imagemAtual.nome}`}
            alt={imagemAtual.titulo || "Lamort Tattoo"}
          />

          <div className="carousel-overlay">
            <span className="carousel-tag">PORTFÓLIO</span>
            <h3>{imagemAtual.titulo || `Tattoo ${indexAtual + 1}`}</h3>
            <p>Clique para ampliar e ver melhor os detalhes da peça.</p>
          </div>
        </article>

        <article className="carousel-side-card" onClick={avancar}>
          <img
            src={`http://localhost:3000${imagemProxima.nome}`}
            alt={imagemProxima.titulo || "Lamort Tattoo"}
          />
        </article>
      </div>

      <button className="carousel-arrow right" onClick={avancar} type="button">
        ›
      </button>

      <div className="carousel-dots">
        {imagens.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`carousel-dot ${index === indexAtual ? "active" : ""}`}
            onClick={() => setIndexAtual(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default TattooCarousel;