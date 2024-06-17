import "./HeroVid.css";
const HeroVideo = require("../../assets/video/hero.mp4");

const HeroVid = () => {
  return (
    <section className="hero">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src={HeroVideo} type="video/mp4" />
      </video>
      <div className="hero-overlay">
        <div className="hero-content">
          <span>PUNE DISTRICT EDUCATION ASSOCIATION'S</span>
          <h1>COLLEGE OF ENGINEERING</h1>
          <p>
            Manjari (BK), Pune - 412307 (Maharashtra) India<br />
            NAAC Accredited<br />
            Approved by AICTE, New Delhi No. 740-89-316 E/ET/98 (Year of Establishment - 1998)<br />
            Affiliated to Savitribai Phule Pune University, Pune | DTE Code: 6206 | Pune Uni. Code: 4026(Engg.) 1223(MBA)
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroVid