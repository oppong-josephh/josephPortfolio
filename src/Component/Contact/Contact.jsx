import { Container } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <Container  className="contact-wrapper">
      <div className="row">
        <div className="col-md-6">
          <div className="portfolio mb-5">
            <span>Get in touch</span>
            <br />
            <span>Contact me</span>
          </div>
        </div>

        <div className="col-md-6">
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control mt-3 "
                  id="inputFirstName"
                  placeholder="Name"
                />
              </div>

              <div className="form-group col-md-6">
                <input
                  type="email"
                  className="form-control mt-3"
                  id="inputLastName"
                  placeholder="Email"
                />
              </div>

              <div className="form-group col-md-6">
                <textarea
                  className="mt-3 form-control"
                  name="Message"
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Message"
                ></textarea>
              </div>

              <button className="mt-3 contact-btn" type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
