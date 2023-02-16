
function About() {
    return (
      <div className={`about`} id="about">
          <div className="container reveal">
            <h2 className="section-heading">About</h2>
            <img className="about-img" src={require("./images/profile-img.png")} />
            <p className="about-text">Hi, i'm Ben, a self taught Front End Developer from in the UK.</p>
            <p className="about-text">I began to code in 2021 and have always enjoyed the process of problem solving and feeling a sense of achievement when you manage to solve the outcome you were working towards.</p>
            <p className="about-text">Looking back to when I started to code, I believe having the experience of creating formulas within Excel and scripting VBA Macros gave myself a better understanding of what is required to learn Javascript etc.</p>
            <p className="about-text">Feel free to head over to the <span className="accent-text"><a href="#projects">projects</a></span> section to see the sites I have made so far!</p>
            <p className="about-text">When I am not coding, I enjoy playing/watching sports such as Football, Basketball and Formula 1 <span className="italic">(unfortunatly not able to drive that quickly!)</span>. I believe that having a sporting background has always given me a sense of trying to always improve. (This is incomplete)</p>
            <p className="about-text">If you would like to get in touch with myself, the best way is by sending an email to <a href="mailto: benallington1995@gmail.com"><span className="accent-text">benallington1995@gmail.com</span></a>.</p>
          </div>
      </div>
    );
  }

    
  export default About;