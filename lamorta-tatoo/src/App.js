import "./App.css";
import Galeria from "./galeria";

function App() {
  return (
    <div className="App">
      {/* Hero */}
      <div className="hero">
        <img src="/Logo.jpg" alt="Logo" />
        <h1>Lamort Tattoo Studio</h1>
        <p>Especialista em blackwork</p>
      </div>

      {/* Galeria */}
      <Galeria />
    </div>
  );
}

export default App;
