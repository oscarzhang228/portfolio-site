import { SocialIcon } from "react-social-icons";
import Card from "react-bootstrap/Card";
import contactPic from "../images/contactPic.png";
export const Contact = () => {
  return (
    <div className="contact full-size">
      <div className="mt-5 gap-5 d-flex flex-column align-items-center">
        <h1 className="heading-text contact-header mt-5">Let's Talk</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2 col-md-3 col-lg-4"></div>
            <Card className="col-sm-8 col-md-6 col-lg-4 ">
              <Card.Body>
                <Card.Img className="rounded" src={contactPic}></Card.Img>
                <Card.Title className="mt-2">Oscar Zhang</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Software Engineer Intern at Fyve By
                </Card.Subtitle>
                <Card.Text>
                  Contact me at my email or socials linked below for any
                  inquiries or opportunies. Looking forward to talking with you.
                </Card.Text>
                <div className="d-flex gap-3 mt-4 justify-content-center">
                  <SocialIcon
                    className="social-icon"
                    url="mailto:oscarzhang228@gmail.com"
                    target="_blank"
                  />
                  <SocialIcon
                    className="social-icon"
                    url="https://www.linkedin.com/in/oscarzhang228"
                    target="_blank"
                  />
                </div>
              </Card.Body>
            </Card>
            <div style={{ height: "20vh" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
