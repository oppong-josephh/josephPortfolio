// import { Container } from "react-bootstrap";
import FooterBg from '../../assets/contact_bg.png'
import './Footer.css'

import Github from "../../assets/wgithub.png";
import LinkedIn from "../../assets/wlinkedin.png";
import Twitter from "../../assets/wtwitter.png";

const Footer = () => {
  return (
    // <Container fluid>
      <div className="footer">
        <img
          src={FooterBg}
          alt="Footer-bg"
          style={{ width: "100%", margin: 0, padding: 0 }}
        />

        <div className="footer-content">
            <span><a href="mailto:josephoppong253@gmail.com">josephoppong253@gmail.com</a></span>
            <div className="footer-icons icon">
                <img src={Github} alt="Github" />
                <img src={LinkedIn} alt="LinkedIn" />
                <img src={Twitter} alt="Twitter" />
            </div>
            <span>Developed by Oppong Ansah Joseph | &copy; 2023 All rights reserved.</span>
        </div>
      </div>
    // </Container>
  );
}

export default Footer;
