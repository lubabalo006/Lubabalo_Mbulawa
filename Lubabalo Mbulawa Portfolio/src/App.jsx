import React from "react";
import "./App.css"
import portfolioImage from "../src/images/portfolio_pic.jpg"

const Portfolio = () =>{
  return (
    <div className="container">

      <div className="hearder--one">
        <div className="name">
          Lubabalo Mbulawa
        </div>
        <div className="links">
          <li>LinkedIn</li>
          <li>Github</li>
        </div>
      </div>

      <div className="hearder--two">
        <div>
          <h2>Hi, nice to meet you!</h2>
          <h2>I'm Lubabalo Mbulawa.</h2>
          <p>Based in Cape Town, I'm a Junior Front-end developer<br/> passionate about building accessible web apps that users love.</p>
        </div>
        <div className="profile__pic">
         <img src={portfolioImage} alt=""/>
        </div>
        <div></div>
      </div>
      <div className="contact">contact me</div>
      
      <div className="skills">
        <div>
          <h3>HTML</h3>
        </div>
        <div>
          <h3>CSS</h3>
        </div>
        <div>
          <h3>Javascript</h3>
        </div>
        <div>
          <h3>React</h3>
        </div>
      </div>

      <div>
        <h2>Projects</h2>
        <div className="projects">

        </div>
      </div>

      <div className="footer">

      </div>

    </div>
  )
}

export default Portfolio