import { Container } from "react-bootstrap";
import "./Home.css";

import Github from "../../assets/github.png";
import LinkedIn from "../../assets/linkedin.png";
import Twitter from "../../assets/twitter.png";
import BannerImage from "../../assets/bg2.png";
import UICard from "../../assets/uicard.jpg";
import WebCard from "../../assets/webcard.jpg";

const Home = () => {
  return (
    <Container fluid className="main-wrapper">
      <div className="row">
        <div className="col-md-6 col-lg-5">
          <div className="h-wrapper">
            <div className="h-left">
              <div className="h-name">
                <span>Hello! I Am</span>
                <br />
                <span>Oppong Ansah Joseph</span>
                <br />
                <span className="description">
                  A seasoned UI/UX and front-end developer known for
                  consistently delivering top-tier web design work characterized
                  by excellence and quality.
                </span>
              </div>
              <br />
              <button type="button">Hire Me</button>

              <div className="icons">
                <img src={Github} alt="Github" />
                <img src={LinkedIn} alt="LinkedIn" />
                <img src={Twitter} alt="Twitter" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-7">
          <div className="h-wrapper">
            <div className="h-right">
              <div className="h-banner">
                <img src={BannerImage} alt="bannerImage" className="img-fluid" />
              </div>
              <div className="h-card">
                <img src={UICard} alt="Card1" className="card1 img-fluid" />
                <img src={WebCard} alt="Card2" className="card2 img-fluid" />
              </div>
              <div className="blurImgBg"></div>
              <div className="blurImgBg"></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Home;
