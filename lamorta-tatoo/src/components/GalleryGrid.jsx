function GalleryGrid({ imagens, abrirModal }) {
  return (
    <div className="galeria-grid">
      {imagens.map((img, index) => (
        <article
          key={img.id}
          className={`galeria-card ${index % 5 === 0 ? "tall" : ""}`}
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
  );
}

export default GalleryGrid;