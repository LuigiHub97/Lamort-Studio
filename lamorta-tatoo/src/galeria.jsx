import { useState } from "react";

function Galeria() {
  const [galeria, setGaleria] = useState([]);
  const [aberta, setAberta] = useState(false);
  const [loading, setLoading] = useState(false);

  async function abrirGaleria() {
    try {
      setAberta(true);
      setLoading(true);

      const res = await fetch(
        "https://animated-space-zebra-pjvxv97p5rqqf7ppg-5000.app.github.dev/api/galeria",
      );

      const data = await res.json();
      setGaleria(data);
    } catch (err) {
      console.log("Erro ao carregar galeria:", err);
    } finally {
      setLoading(false);
    }
  }

  function fecharGaleria() {
    setAberta(false);
  }

  return (
    <div>
      {/* BOTÃO ABRIR */}
      <button onClick={abrirGaleria}>Galeria</button>

      {/* MODAL / TELA DA GALERIA */}
      {aberta && (
        <div className="galeria-overlay">
          <button className="close-btn" onClick={fecharGaleria}>
            Fechar
          </button>

          {loading && <p>Carregando galeria...</p>}

          <div className="galeria-container">
            {galeria.map((item) => (
              <img key={item.id} src={item.url} alt="tattoo" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Galeria;
