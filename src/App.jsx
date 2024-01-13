import React, { useState, useEffect } from "react";
import "./App.css";
import portfolioImage from "../src/images/portfolio_pic.jpg";
import { Projects } from "./data";
import Certificates from "./certificate";


const Portfolio = () =>{

  const [loading, setloading] = useState(true);
  const [showCertificates, setShowCertificates] = React.useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setloading(false);
    },1000);
  }, []);
  
  const handleclick = () => {
    setloading(true);
    
    setTimeout(()=>{
      setloading(false);
      setShowCertificates(true);
    }, 1000);
  };

  return (
    <div className="container">
      {loading ? (
        <div className="loader"></div>
      ) : (
      <div>
      {showCertificates ? (
        <Certificates />
      ) : (
        <>

        

      <div className="hearder--one">
        <div className="name">
          <h3>Lubabalo Mbulawa</h3>
        </div>
        <div className="links">
          <a href="https://www.linkedin.com/in/lubabalo-mbulawa-683237184/" target="_blank">LinkedIn</a>
          <a href="https://github.com/lubabalo006/lubabalo006.git" target="_blank">Github</a>
          <a onClick={handleclick}> Certificates</a>
        </div>
      </div>

      <div className="hearder--two">
        <div>
          <h2>Hi 👋, nice to meet you!</h2>
          <h2>I'm Lubabalo Mbulawa.</h2>
          <p>Based in Cape Town, I'm a Junior Front-end developer<br/>
           passionate about building accessible web apps that users love. <br/>I am a firm believer in the power of teamwork to deliver outstanding results.</p>
        </div>
        
        <div className="profile__pic">
         <img src={portfolioImage} alt="" className="profile__pic"/>
        </div>
        <div></div>
      </div>
      
      <hr />

      <div className="skills">
        <div>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
        </div>
        
        <div>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
        </div>
        
        <div>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
        </div>
        <div>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
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
            <div className="project--image">
              <img src={project.image} alt={project.name} className="project--image"></img>
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
        <div className="form-container">
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
      </>
    )}
    </div>
    )}
    </div>
  )
}

export default Portfolio