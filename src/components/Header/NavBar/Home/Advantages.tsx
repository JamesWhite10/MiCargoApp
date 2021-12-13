import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import rightImage from "./../../../../assets/image/Illustration_one.png";
import leftImage from "./../../../../assets/image/Illustration_two.png";

const Advantages: React.FC = () => {
  return (
    <div className={"pt-4 pt-lg-5 pb-4 pb-lg-4 background-color-advantages"}>
      <Container>
        <Row>
          <Col className={"text-center"}>
            <h2>
              With MiKargo, your capacity issues are resolved by delivering a higher cargo limit to
              $1,000,000 when you need it.
            </h2>
          </Col>
        </Row>
        <Row className={"pt-4 pt-lg-5"}>
          <Col lg={6}>
            <h4 style={{ color: "darkblue", marginLeft: "15px" }}>With MiKargo…</h4>
            <ul style={{ fontSize: "14px", lineHeight: "2.5" }}>
              <li>
                Simple access for a direct quote when you{" "}
                <span className={"fw-bold text-decoration-underline"}>need</span> it $1,000,000 in
                cargo limit for a specific customer load
              </li>
              <li>Coverage is tied to the BOL and starts when you pick-up and ends on delivery</li>
              <li>
                You can pay by credit card starting at $50 and cancel coverage up to the XXXX of
                pickup
              </li>
              <li>Have access to higher paying freight putting more money in your pocket</li>
            </ul>
          </Col>
          <Col lg={6}>
            <img className={"image-size"} src={rightImage} alt={"image"} />
          </Col>
        </Row>
        <Row className={"pt-4 pt-lg-5"}>
          <Col lg={6}>
            <img className={"image-size"} src={leftImage} alt={"image"} />
          </Col>
          <Col lg={6}>
            <h4 style={{ color: "darkblue", marginLeft: "15px" }}>Coverage Highlights…</h4>
            <ul style={{ fontSize: "14px", lineHeight: "2.5" }}>
              <li>
                This is first dollar coverage up to $1,000,000 limit available depending on
                commodity
              </li>
              <li>
                The smallest list of unapproved commodities located <a href={""}>here</a>
              </li>
              <li>
                Coverage for Acts of God, losses in/out of the driver’s control, driver error and
                many others. Coverage overview{" "}
                <span className={"fw-bold text-decoration-underline"}>located</span>{" "}
                <a href={""}>here</a>
              </li>
              <li>
                This is not Spike or Excess coverage which can create uncovered exposures for you
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Advantages;
