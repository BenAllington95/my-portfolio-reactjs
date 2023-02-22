
function About() {
    return (
      <div className={`about`} id="about">
          <div className="container reveal">
            <h2 className="section-heading">About</h2>
            <img className="about-img" src={require("./images/profile-img.png")} alt="me"/>
            <p className="about-text">Hi, I'm Ben, a self-taught Front End Developer from the UK.</p>
            <p className="about-text">I seek a role within a commercial organisation to continue my development and a career path suited to my skills and interests. I am a keen learner and always look for ways to improve my skills.</p>
            <p className="about-text">By completing various courses on my coding journey so far, I’ve been able to learn HTML, CSS, Javascript and React. I’ve put these skills into practice by building an array of projects.</p>
            <p className="about-text">Feel free to head to the <span className="sub-colour"><a href="#projects">projects</a></span> section to see the sites I have made so far!</p>
            <h3 className="sub-colour about-sub-heading">Hobbies</h3>
            <p className="about-text">I’m an active person who enjoys playing and watching sports in my free time, my favourites being football, basketball and F1.</p>
            <p className="about-text">I believe that my sporting background has always pushed me to improve myself in other areas.</p>
            <p className="about-text">If you would like to get in touch with me, the best way is by sending an email to <a href="mailto: benallington1995@gmail.com"><span className="sub-colour">benallington1995@gmail.com</span></a>.</p>
          </div>
      </div>
    );
  }

    
  export default About;