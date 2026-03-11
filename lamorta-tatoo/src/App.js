import "./App.css";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <header>
        <h1>LaMort Tattoo Studio</h1>
        <p>Arte eterna na pele</p>
      </header>

      <Gallery />

      <Footer />
    </div>
  );
}

export default App;
