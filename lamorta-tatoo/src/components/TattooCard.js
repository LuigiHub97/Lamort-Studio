function TattooCard({ image, title, description }) {
  return (
    <div className="tattoo-card">
      <img src={image} alt={title} width="200" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default TattooCard;
