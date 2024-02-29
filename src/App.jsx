import "./App.css";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";

import Header from "./Components/Header";
import Home from "./Components/Home";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Home />
        <Experience />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
