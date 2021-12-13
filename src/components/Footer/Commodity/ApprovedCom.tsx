import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import style from "./Commodity.module.css";
import Container from "react-bootstrap/esm/Container";

const ApprovedCom: React.FC = () => {
  return (
    <div className={`${style.commodityBlock} pb-4 pb-lg-4 pt-4 pt-lg-4`}>
      <Container>
        <Row className={"pt-4 pt-lg-4"}>
          <Col>
            <h3>MiKargo – Commodities Schedule</h3>
          </Col>
        </Row>
        <Row>
          <Col className={"pb-4 pb-lg-4 pt-4 pt-lg-4"}>
            <h5>Approved Commodities:</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>
                <span className={"text-color-red"}>All-Terrain Vehicles – New and Packaged</span>
              </li>
              <li>Alcohol – Beer, Wine & Spirits</li>
              <li>Athletic & Sporting Equipment</li>
              <li>Automobile Parts</li>
              <li>Baby & Infant Products</li>
              <li>Books & Periodicals</li>
              <li>Building Materials</li>
              <li>Canned Food</li>
              <li>Consumer Electronics – excluding mobile phones, tablets & laptops</li>
              <li>Contractors Equipment</li>
              <li>Copper</li>
              <li>General Freight</li>
              <li>Generators</li>
              <li>Golf Carts</li>
              <li>Heavy Machinery</li>
              <li>
                <span className={"text-color-red"}>Hemp & CBD Products</span>
              </li>
              <li>Household Products – retail sales</li>
              <li>
                <span className={"text-color-red"}>Motorcycles – New and Crated</span>
              </li>
              <li>New Furniture</li>
              <li>Other Dried Food</li>
              <li>Paper or Wood Products</li>
              <li>Plastic Goods</li>
              <li>Plumbing Supplies & Fixtures</li>
              <li>Refrigerated Food Products – Chilled and/or Frozen</li>
              <li>Seafood – Chilled and/or Frozen</li>
              <li>Steel</li>
              <li>Tires</li>
              <li>Transformers</li>
              <li>Turbines</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ApprovedCom;
