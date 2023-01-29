import React, { useState } from 'react';


function About(props) {

    return (
      <div className={`about ${props.theme}`} id="about">
          <div className="container">
            <h2 className="sub-heading">about</h2>
            <img className="about-img" src={require("./images/profile-img.png")} />
            <p className="about-text">Hi, i'm Ben, a Front End Web Developer based in the UK.</p>
            <p className="about-text">I began to code in 2021 and started by learning HTML, CSS, Javascript, React and Git/Github. Since learning to code, I have always enjoyed the process of problem solving and the feeling of achievement when you manage to solve the outcome you were working towards.</p>
            <p className="about-text">Looking back to when I started to code, I believe having the experience of creating formulas within Microsoft Excel and coding VBA Macros gave myself a better understanding of what is required to learn Javascript etc.</p>
            <p className="about-text">Feel free to head over to the <span className="yellow-text"><a href="#projects">projects</a></span> section to see the sites I have made so far!</p>
            <p className="about-text">When I am not coding, I enjoy playing/watching sports such as Football, Basketball and Formula 1 <span className="italic">(unfortunatly not able to drive that quickly!)</span>. I believe that having a sporting background has always given me a sense of trying to always improve.</p>
          </div>
      </div>
    );
  }

    
  export default About;