import { useEffect, useState } from "react";

function Galeria() {
  const [items, setItens] = useState([]);

  useEffect(() => {
    fetch(
      "https://animated-space-zebra-pjvxv97p5rqqf7ppg-5000.app.github.dev/api/galeria",
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
      {items.map((items) => (
        <div key={items.id} className="galeria-items">
          <h3>{items.nome}</h3>
          <img src={items.imagem} alt={items.nome} />
        </div>
      ))}
    </div>
  );
}

export default Galeria;
