import "./App.css";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* Hero compacto */}
      <div className="hero">
        <h1>Lamort Tattoo Studio</h1>
        <p>Especialista em blackwork</p>
      </div>

      {/* Galeria de tatuagens */}
      <div className="gallery">
        <img
          src="https://scontent.fcgh68-1.fna.fbcdn.net/v/t39.30808-6/472258404_590764897021226_1801589140380282733_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_ohc=b_nHLlw6uE0Q7kNvwHeVv2p&_nc_oc=Adk3odPlSARHXpY6z8wZdwmAGw6fFp8wNJJjWpflitKc4AqfDMoy_5ybFs7wZeYI6v_WOz6Ak21M95dAOr8siIGV&_nc_zt=23&_nc_ht=scontent.fcgh68-1.fna&_nc_gid=s8H9e2gbD_nvD_FdlGk9YA&_nc_ss=8&oh=00_AfyxoI-q1Orw4Pjgm2XAkkhtZLR32fuqyptyvuTLWh0JXw&oe=69B79B54"
          alt="Tattoo 1"
        />
        <img
          src="https://scontent.fcgh68-1.fna.fbcdn.net/v/t39.30808-6/480770623_612586918187883_926815061032501350_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=2a1932&_nc_ohc=9apCwpVm2oYQ7kNvwHMrkcg&_nc_oc=Adn2rKImzod81glopf9qb4ODCzqaIGdems3R98XAODQWqNe8_Tr7hXy_ETxk-4aLLjE3A951KDTmPLhxKcYGYoPd&_nc_zt=23&_nc_ht=scontent.fcgh68-1.fna&_nc_gid=b1HBI-SFhH2NJbrS860-Jg&_nc_ss=8&oh=00_AfwRJGhm9da0c14sWP2pPSaZJnY3W2uI0d54hmRDbBH9Hg&oe=69B791D5"
          alt="Logo"
        />
        <img
          src="https://scontent.fcgh68-1.fna.fbcdn.net/v/t39.30808-6/298219816_130306519733735_4508569913326493135_n.png?stp=dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=EwdIkzC_TooQ7kNvwH5Emmx&_nc_oc=Adls9vBZYk8Bpj5wgNLBao5o7_5SyH_7MraeONNDqsj3m-YUkBAdmrGRmMrR-OFEmNEkA_0Spfii3xPL9oUeYImO&_nc_zt=23&_nc_ht=scontent.fcgh68-1.fna&_nc_gid=uShPknzKkdvTUyhRsP4ikQ&_nc_ss=8&oh=00_Afx9W-fv8_b3MZdqCPSKHXqi69Z_C_9m20KAbVmqyoa4rA&oe=69B77CDD"
          alt="Tattoo 2"
        />
      </div>

      <footer className="footer">
        <a
          href="https://www.facebook.com"
          target="_blank"
          className="footer-icon"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          className="footer-icon"
        >
          Instagram
        </a>
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          className="footer-icon"
        >
          WhatsApp
        </a>
      </footer>
    </div>
  );
}

export default App;
