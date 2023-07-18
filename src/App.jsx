import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Main/Home";
import Medias from "./components/Main/Medias";
import Soquetes from "./components/Main/Soquetes";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/medias" element={<Medias />} />
          <Route path="/soquetes" element={<Soquetes />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
