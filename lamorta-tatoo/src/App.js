import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [tattoos, setTattoos] = useState([]);

  useEffect(() => {
    fetch(
      "https://jubilant-space-memory-r7wwpw5x6prhw5pj-3000.app.github.dev/api/tattoos",
    )
      .then((res) => res.json())
      .then((data) => setTattoos(data));
  }, []);

  return (
    <div className="App">
      {/* Hero */}
      <div className="hero">
        <h1>Lamort Tattoo Studio</h1>
        <p>Especialista em blackwork</p>
      </div>

      {/* Galeria */}
      <div className="gallery">
        {tattoos.map((t) => (
          <img key={t.id} src={t.image_url} alt="tattoo" />
        ))}
      </div>
    </div>
  );
}

export default App;
