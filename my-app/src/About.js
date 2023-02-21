
function About() {
    return (
      <div className={`about`} id="about">
          <div className="container reveal">
            <h2 className="section-heading">About</h2>
            <img className="about-img" src={require("./images/profile-img.png")} alt="me"/>
            <p className="about-text">Hi, I'm Ben, a self-taught Front End Developer from the UK.</p>
            <p className="about-text">I seek a role within a commercial organisation to continue my development and a career path suited to my skills and interests. I am a keen learner and always look for ways to improve my skills.</p>
            <p className="about-text">I began to code in 2021 through the Scrimba Front End Developer Course which guided me to create various websites using HTML, CSS, Javascript, and React.</p>
            <p className="about-text">Feel free to head to the <span className="accent-text"><a href="#projects">projects</a></span> section to see the sites I have made so far!</p>
            <h3 className="accent-text about-sub-heading">Hobbies</h3>
            <p className="about-text">Whilst I believe that coding is a hobby of mine, I like to spend time doing other hobbies such as playing/watching sports such as Football, Basketball, and F1.</p>
            <p className="about-text">I believe that my sporting background has always pushed me to improve myself in other areas.</p>
            <p className="about-text">If you would like to get in touch with me, the best way is by sending an email to <a href="mailto: benallington1995@gmail.com"><span className="accent-text">benallington1995@gmail.com</span></a>.</p>
          </div>
      </div>
    );
  }

    
  export default About;