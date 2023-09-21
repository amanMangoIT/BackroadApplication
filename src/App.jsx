import "./App.css";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Tours from "./components/Tours";
import Footer from "./components/Footer";
import Service from "./components/Service";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Service />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
