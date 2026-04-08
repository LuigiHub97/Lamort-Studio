import { useState } from "react";

function Galeria() {
  const [galeria, setGaleria] = useState([]);
  const [aberta, setAberta] = useState(false);
  const [loading, setLoading] = useState(false);

  async function abrirGaleria() {
    try {
      setAberta(true);
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/galeria");

      if (!res.ok) {
        throw new Error(`Erro HTTP: ${res.status}`);
      }

      const data = await res.json();
      console.log("Dados da galeria:", data);
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
      <button onClick={abrirGaleria}>Galeria</button>

      {aberta && (
        <div className="galeria-overlay">
          <button className="close-btn" onClick={fecharGaleria}>
            Fechar
          </button>

          {loading && <p>Carregando galeria...</p>}

          {!loading && galeria.length === 0 && (
            <p>Nenhuma imagem encontrada.</p>
          )}

          <div className="galeria-container">
            {galeria.map((item) => (
              <img
                key={item.id}
                src={item.url}
                alt={item.nome || "tattoo"}
                onError={(e) => {
                  console.log("Erro ao carregar imagem:", item.url);
                  e.target.style.display = "none";
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Galeria;