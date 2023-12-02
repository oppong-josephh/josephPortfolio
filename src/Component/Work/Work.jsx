import { Container } from "react-bootstrap";
import "./Work.css";
import Veebeckz from "../../assets/veebekz.png";

const Work = () => {
  return (
    <Container fluid className="main-wrapper">
      <div className="row">
        <div className="col-md-6">
          <div className="fantastic">
            <span>Work for All these</span>
            <br />
            <span>Brands & Clients</span>
            <br />
            <span>
              There are numerous brands among my clients. There are big ones,
              little ones, and some you haven&apos;t heard of yet. I like to
              keep my work as diverse as I can by not sticking to one field. It
              keeps me sharp and encourages me to try new things, which will
              enable you and your team to see the forest for the trees.
              That&apos;s undoubtedly the reason why my clients come back to me
              year after year.
            </span>
            <br /><br />
            <button type="button">Hire Me</button>
          </div>
        </div>

        <div className="col-md-6">
          <div className="w-right">
            <div className="w-mainCircle">
              <div className="w-2circle">
                <img src={Veebeckz} alt="VeebeckzLogo" />
              </div>

              <div className="w-2circle">
                <img src={Veebeckz} alt="VeebeckzLogo" />
              </div>

              <div className="w-2circle">
                <img src={Veebeckz} alt="VeebeckzLogo" />
              </div>

              <div className="w-2circle">
                <img src={Veebeckz} alt="VeebeckzLogo" />
              </div>

              <div className="w-2circle">
                <img src={Veebeckz} alt="VeebeckzLogo" />
              </div>
              <div className="w-bgCircle blueCircle"></div>
              <div className="w-bgCircle voiletCircle"></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Work