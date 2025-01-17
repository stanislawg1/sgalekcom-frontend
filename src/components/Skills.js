import Azure from "../assets/img/Azure.png";
import tf from "../assets/img/Terraform.png";
import docker from "../assets/img/Docker.png";
import Kubernetes from "../assets/img/logo_with_border.png";
import Bash from "../assets/img/Bash.png";
import Git from "../assets/img/Git.png";
import Github from "../assets/img/nav-icon3.svg";
import ghac from "../assets/img/GitHub Actions.png";
import Jenkins from "../assets/img/Jenkins.png";
import linux from "../assets/img/Linux.png";
import mysql from "../assets/img/MySQL.png";
import nginx from "../assets/img/NGINX.png";
import python from "../assets/img/Python-logo-notext.svg.png";
import teamwork from "../assets/img/partners.png";
import comunication from "../assets/img/agreement.png";
import cybersec from "../assets/img/cyber-security.png";
import network from "../assets/img/computer.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Here are the skills and technologies I am proficient in, <br></br>reflecting my expertise and experience in various areas of software development.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={Azure} alt="" />
                                <h5>Azure</h5>
                            </div>
                            <div className="item">
                                <img src={Kubernetes} alt="" />
                                <h5>Kubernetes</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={tf} alt="" />
                                <h5>Terraform</h5>
                            </div>
                            <div className="item">
                                <img src={docker} alt="" />
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                                <img src={Jenkins} alt="" />
                                <h5>Jenkins</h5>
                            </div>
                            <div className="item">
                                <img src={Github} alt="" />
                                <h5>GitHub</h5>
                            </div>
                            <div className="item">
                                <img src={ghac} alt="" />
                                <h5>GitHub Actions</h5>
                            </div>
                            <div className="item">
                                <img src={Git} alt="" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={nginx} alt="" />
                                <h5>NGINX</h5>
                            </div>
                            <div className="item">
                                <img src={mysql} alt="" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={linux} alt="" />
                                <h5>Linux</h5>
                            </div>
                            <div className="item">
                                <img src={Bash} alt="" />
                                <h5>Bash</h5>
                            </div>
                            <div className="item">
                                <img src={network} alt="" />
                                <h5>Networking skills</h5>
                            </div>
                            <div className="item">
                                <img src={cybersec} alt="" />
                                <h5>Cybersecurity Awareness</h5>
                            </div>
                            <div className="item">
                                <img src={comunication} alt="" />
                                <h5>Effective Communication</h5>
                            </div>
                            <div className="item">
                                <img src={teamwork} alt="" />
                                <h5>Teamwork</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
    
  )
}
