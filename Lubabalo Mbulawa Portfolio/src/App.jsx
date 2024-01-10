import React from "react";
import "./App.css"
import portfolioImage from "../src/images/portfolio_pic.jpg"
import { Projects } from "./data";

const Portfolio = () =>{
  return (
    <div className="container">

      <div className="hearder--one">
        <div className="name">
          Lubabalo Mbulawa
        </div>
        <div className="links">
          <a href="https://www.linkedin.com/in/lubabalo-mbulawa-683237184/" target="_blank">LinkedIn</a>
          <a href="https://github.com/lubabalo006/lubabalo006.git" target="_blank">Github</a>
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
      
      <hr />

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

      <hr />

      <div className="projects">
        <h2>Projects</h2>
        <div className="project--list">
        {Projects.map((project) =>(
          <div className="each--project">
            {project.name}
            <div className="projects--links">
              <a href={project.github} target="_blank">Github</a>
            </div>
          </div>
        ))}
        </div>
        <div className="projects--links">

        </div>
      </div>

      <hr />

      <div className="footer">
        <div>
          <h2>Contact</h2>
          <p>I would love to hear your feedback about my projects and how I can improve. Please feel free to fill in the form.</p>
        </div>
        <div className="form">
          <form action="https://formsubmit.co/lmbulawa4@gmail.com" method="post">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" required></input>
            <br></br>
            <label for="email">Email</label>
            <input type="email" name="email" id="" placeholder="" required></input>  
            <br></br>
            <textarea name="Message" id="text" cols="30" rows="10" placeholder="Enter message here (optional)."></textarea>
            <br></br>
            <input class="submit" type="submit" value="send"></input>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Portfolio