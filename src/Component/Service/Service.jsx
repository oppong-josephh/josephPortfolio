import { Container } from "react-bootstrap";
import "./Service.css";

import HeartEmoji from "../../assets/heartemoji.png";
import GlassEmoji from "../../assets/glasses.png";
import HumbleEmoji from "../../assets/humble.png";
import Card from '../Card/Card'

const Service = () => {
  return (
    <Container fluid className="main-wrapper">
      <div className="row">
        <div className="col-md-6">
          <div className="fantastic">
            <span>My Fantastic</span>
            <br />
            <span>Services</span>
            <br />
            <span>
              I&apos;m responsible for designing and developing websites, 
              using <br />a variety of web technologies.
            </span>
            <br /> <br />
            {/* <a href={CV}></a> */}
            <button type="button">Download CV</button>
          </div>
        </div>

        <div className="col-md-6">
          <div className="row">
            {/* love emoji */}
            <div
              className="cards col-md-6 text-center"
              style={{ top: "0", left: "10rem" }}
            >
              <Card
                emoji={HeartEmoji}
                heading={"UI/UX"}
                details={"Figma, Photoshop."}
              />
            </div>
            
            {/* glasses emoji */}
            <div
              className="col-md-6 text-center cards"
              style={{ top: "15rem", left: "-45rem" }}
            >
              <Card
                emoji={GlassEmoji}
                heading={"Developer"}
                details={"Html, Css, Javascript, React, Wordpress."}
              />
            </div>
          </div>

          {/* smiling emoji */}
          <div className="row">
            <div
              className="col-md-12 text-center cards"
              style={{ top: "25rem", left: "5rem" }}
            >
              <Card
                emoji={HumbleEmoji}
                heading={"Designer"}
                details={"Photoshop, Canva."}
              />
            </div>
          </div>
          <div
            className="s-blurImgBg"
            style={{ background: "rgb(238 210 255)" }}
          ></div>
          <div
            className="blurImgBg"
            style={{ background: "#C1F5FF", top: "60rem", left: "60rem" }}
          ></div>
        </div>
      </div>
    </Container>
  )
}

export default Service