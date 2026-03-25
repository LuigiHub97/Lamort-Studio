import { useEffect, useState } from "react";

function Galeria() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    fetch(
      "https://jubilant-space-memory-r7wwpw5x6prhw5pj-5000.app.github.dev/api/galeria",
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItens(data);
      })
      .catch((err) => console.error("Erro ao buscar galeria:", err));
  }, []);

  return (
    <div className="gallery">
      {itens.map((item) => (
        <div key={item.id} className="galeria-item">
          <h3>{item.nome}</h3>
          <img src={item.imagem} alt={item.nome} />
        </div>
      ))}
    </div>
  );
}

export default Galeria;
