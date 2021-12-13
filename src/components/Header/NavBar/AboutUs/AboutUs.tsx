import React from "react";
import style from "./AboutUs.module.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import ShippingInformation from "../../../ShippingInformation/ShippingInformation";

const AboutUs: React.FC = () => {
  return (
    <div className={`${style.aboutUsBlock} pb-4 pb-lg-4 pt-4 pt-lg-4`}>
      <ShippingInformation />
      <Container>
        <Row>
          <Col>
            <h2 className={"text-color-name-profile"}>MiKargo – About Us</h2>
          </Col>
        </Row>
        <Row>
          <Col className={"pb-4 pb-lg-4 pt-4 pt-lg-4"}>
            Motor Carriers, Brokers and Shippers use MiKargo because its shipment specific,
            transactional and incredibly easy. When something is easy is can become incredibly fast.
            Obtain a quote in 10 seconds and complete a purchase in less than 2 minutes delivering
            proof of coverage certificate to everyone who needs it.
          </Col>
        </Row>
        <Row>
          <Col className={"pb-4 pb-lg-4 pt-4 pt-lg-4"}>
            We solved the wait time from underwriters asking questions slowing a process that can’t
            slow down for anyone, freight doesn’t wait and neither should you.
          </Col>
        </Row>
        <Row>
          <Col className={"pb-4 pb-lg-4 pt-4 pt-lg-4"}>
            With that, we developed a product that is{" "}
            <span className={"fw-bold text-decoration-underline"}>self sufficient</span>, easy to
            use and available when you need it. From commodities of all kinds and coverage spanning
            the Continental US, Canada and Alaska we selected an All-Risks coverage form from one of
            the largest insurance companies in the world, Munich Re.
          </Col>
        </Row>
        <Row>
          <Col className={"pb-4 pb-lg-4 pt-4 pt-lg-4"}>
            Everything is supported by a great service team who understand transportation, insurance
            and prompt claim service with a goal of taking care of you from your first need on the
            platform to closing a claim in 30{" "}
            <span className={"fw-bold text-decoration-underline"}>day’s</span> or less.
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
