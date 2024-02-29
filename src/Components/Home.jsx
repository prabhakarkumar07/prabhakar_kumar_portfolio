import React from "react";
import Pdf from "../Pdf/Prabhakar_Kumar_Resume.pdf";
import hero from "./Data/hero.json";
const Home = () => {
  return (
    <div className="container home" id="home">
      <div className="left ">
        <div class="hero_content">
          <h1>
            <spna class="hi_text">Hi</spna>, I am
            <span class="name_text"> Prabhakar Kumar</span>
          </h1>
          <h2>FrontEnd Developer || C++ Programmer .</h2>
        </div>
        <a
          href={Pdf}
          download="Prabhakar_Kumar_Resume.pdf"
          className="btn btn-outline-warning "
        >
          Download Resume
        </a>
      </div>
      <div className="right">
        <div className="img text-center">
          <img src={`/assets/${hero.imgSrc}`} alt="Profile"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
