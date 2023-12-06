import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ emoji, heading, details }) => {
  return (
    <Container>
      <div className="card">
        <img src={emoji} alt="emoji" />
        <span>{heading}</span>
        <span>{details}</span>
        <button type="button" className="c-btn mb-4">
          Explore More
        </button>
      </div>
    </Container>
  );
};

Card.propTypes = {
  emoji: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};
export default Card;
