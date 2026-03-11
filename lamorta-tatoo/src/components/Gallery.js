import TattooCard from "./TattooCard";

function Gallery() {
  return (
    <section>
      <h2>Trabalhos</h2>

      <TattooCard
        image="https://picsum.photos/400"
        title="Blackwork"
        description="Estilo pesado com contraste forte."
      />

      <TattooCard
        image="https://picsum.photos/401"
        title="Old School"
        description="Traço clássico e cores vibrantes."
      />

      <TattooCard
        image="https://picsum.photos/402"
        title="Realismo"
        description="Detalhes realistas e profundidade."
      />
    </section>
  );
}

export default Gallery;
