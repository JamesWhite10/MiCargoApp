import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import style from "./ContactUs.module.css";

const ContactUs: React.FC = () => {
  return (
    <div className={`${style.contactUsBlock} pb-4 pb-lg-4 pt-4 pt-lg-4`}>
      <Container>
        <Row className={"text-align-center"}>
          <Col>
            <h2 className={"text-color-name-profile"}>Contact Us</h2>
            <div className={"pb-4 pb-lg-4 pt-4 pt-lg-4"}>
              <h5>Telephone: 800-123-4567</h5>
            </div>
            <div className={"pb-4 pb-lg-4 pt-4 pt-lg-4"}>
              <h5>
                Email: <a href={"mailto:support@gomikargo.com"}>support@gomikargo.com</a>
              </h5>
            </div>
            <div className={"pb-4 pb-lg-4 pt-4 pt-lg-4"}>
              <h5>Office hours: 9:00 AM - 6:00 PM</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
