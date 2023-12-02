import { Container } from "react-bootstrap"
import './Team.css'

import Andrews from '../../assets/Andrews.png'
import Tahiru from '../../assets/Tahiru.png'
import Oppong from '../../assets/oppong.png'

const Team = () => {
  return (
    <Container  className="team-wrapper">
      <div className="portfolio text-center mb-5">
      <span>Teams</span>
        <br />
        <span>Who with me</span>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="card text-center">
            <img src={Andrews} alt="Adrews img" />
            <div className="card-body">
              <span>Andrews Osei Agyemang</span>
               <br />
              <span>Full Stack Engineer</span>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card text-center">
            <img src={Tahiru} alt="Adrews img" />
            <div className="card-body">
              <span>Mustapha Tahiru</span>
               <br />
              <span>Front-End Engineer</span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center">
            <img src={Oppong} alt="Adrews img" />
            <div className="card-body">
              <span>Oppong Ansah Joseph</span>
               <br />
              <span>Front-End Engineer <br /> Product Designer </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Team




{/* <Container fluid className="main-wrapper t">
      <div className="portfolio mb-5">
      <span>Teams</span>
        <br />
        <span>Who with me</span>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="card text-center">
            <img src={Andrews} alt="Adrews img" />
            <div className="card-body">
              <span>Andrews Osei Agyemang</span>
               <br />
              <span>Full Stack Engineer</span>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card text-center">
            <img src={Tahiru} alt="Adrews img" />
            <div className="card-body">
              <span>Mustapha Tahiru</span>
               <br />
              <span>Front-End Engineer</span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center">
            <img src={Oppong} alt="Adrews img" />
            <div className="card-body">
              <span>Oppong Ansah Joseph</span>
               <br />
              <span>Front-End Engineer <br /> Product Designer </span>
            </div>
          </div>
        </div>
      </div>
    </Container> */}