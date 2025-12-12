
import Topheader from "./components/topheader/Topheader";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero.jsx";
import About from "./components/about/About.jsx";
import Services from "./components/services/Services.jsx";
import "./index.css"; 

const App = () => {
  return (
    <>
    <div>
      <Topheader />
      <Navbar />
      <Hero />
      <About />
      <Services />
    </div>
    </>
  );
}

export default App;
