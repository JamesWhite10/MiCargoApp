import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import style from "./Commodity.module.css";

const ExcludedCom: React.FC = () => {
  return (
    <div className={`${style.commodityBlock} pb-4 pb-lg-4 pt-4 pt-lg-4`}>
      <Container>
        <Row className={"pt-4 pt-lg-4"}>
          <Col>
            <h3>MiKargo – Excluded Commodities</h3>
          </Col>
        </Row>
        <Row>
          <Col className={"pb-4 pb-lg-4 pt-4 pt-lg-4"}>
            <h5>Excluded Commodities:</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>All Tobacco Products</li>
              <li>Bulk Goods in Pneumatic Trailers</li>
              <li>Cash</li>
              <li>Computer Memory Cards and Modules</li>
              <li>Cotton</li>
              <li>Fine Art in excess value of $10,000 per piece</li>
              <li>Flowers – fresh or cut</li>
              <li>Fresh foods not chilled or frozen</li>
              <li>Jewelry</li>
              <li>Laptop and Tablet Computers</li>
              <li>Live Animals</li>
              <li>Mobile/Smart Phones and Watches</li>
              <li>Negotiable Papers</li>
              <li>Perishable Commodities not transported under temperature control</li>
              <li>Pharmaceutical Drugs</li>
              <li>Plants – live or cut</li>
              <li>Precious Stones and Metals</li>
              <li>Securities</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ExcludedCom;
