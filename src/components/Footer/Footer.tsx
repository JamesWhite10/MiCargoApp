import React from "react";
import style from "./Footer.module.css";
import { Col, Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import miLogo from "./../../assets/image/MIKARGO_Flat Color Logo_PNG.png";
import underLogo from "./../../assets/image/underwriter_logo.png";
import { PATH } from "../../app/App";

const Footer: React.FC = () => {
  return (
    <div className={style.footerBlock}>
      <Container>
        <Row className={"justify-content-between"}>
          <Col lg={2} xs={12} className={"text-center"}>
            <img className={"image-footer-logo"} src={miLogo} alt={"MiKargo Logo"} />
          </Col>
          <Col lg={2} xs={12} className={"text-center"}>
            <img className={"image-footer-logo"} src={underLogo} alt={"Underwriter Logo"} />
          </Col>
        </Row>
        <Row className={"pt-2 pt-lg-3 pb-3 pb-lg-3"}>
          <Col sm={12} xs={12} className={"text-align-center text-white fw-light font-size-footer"}>
            MiKargo is a product of MiKa Solutions LLC
          </Col>
          <Col sm={12} xs={12} className={"text-align-center text-white fw-light font-size-footer"}>
            Copyright {new Date().getFullYear()} MiKargo – All Rights Reserved
          </Col>
          <Col
            sm={12}
            xs={12}
            className={"text-align-center text-white fw-light font-size-footer pt-4 pt-lg-4"}
          >
            Support: <a href={"mailto:support@gomikargo.com"}>support@gomikargo.com</a> or
            800-123-4567
          </Col>
          <Col
            sm={12}
            xs={12}
            className={"text-align-center text-white fs-6 font-size-footer pt-4 pt-lg-4"}
          >
            <Navbar variant={"dark"} expand="lg">
              <Nav className={style.contactsBlock}>
                <Nav.Link href={PATH.COMMODITY_SCHEDULE}>Commodity Schedule</Nav.Link>
                <Nav.Link href={"https://www.wwfi.com/terms-conditions/"} target={"_blank"}>
                  Terms & Conditions
                </Nav.Link>
                <Nav.Link href={PATH.CONTACT_US}>Contact Us</Nav.Link>
              </Nav>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
