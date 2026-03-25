import { useEffect, useState } from "react";

function Galeria() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    fetch(
      "https://jubilant-space-memory-r7wwpw5x6prhw5pj-3000.app.github.dev/api/galeria",
    )
      .then((res) => res.json())
      .then((data) => setItens(data.tattoos))
      .catch((err) => console.error("Erro ao buscar galeria:", err));
  }, []);

  return (
    <div className="gallery">
      {itens.map((item) => (
        <div key={item.id} className="galeria-item">
          <h3>{item.Name}</h3>
          <img src={item.image_url} alt={item.Name} />
        </div>
      ))}
    </div>
  );
}

export default Galeria;
