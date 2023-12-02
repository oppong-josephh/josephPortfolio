import { Container } from "react-bootstrap";
import "./Experience.css";

const Experience = () => {
  return (
    <Container className="experience text-center">
      <div className="row">
        <div className="col-md-4">
          <div className="achievement">
            <div className="circle ">2</div>
            <span>Years</span> <br />
            <span>Experience</span>
          </div>
        </div>

        <div className="col-md-4">
          <div className="achievement">
            <div className="circle">2</div>
            <span>Completed</span> <br />
            <span>Projects</span>
          </div>
        </div>

        <div className="col-md-4">
          <div className="achievement">
            <div className="circle">2</div>
            <span>Companies</span> <br />
            <span>Work</span>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Experience