import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DeclarationsList from "./DeclarationsList";

const DeclarationHistory: React.FC = () => {
  return (
    <div>
      <Container>
        <h3>Purchase History</h3>
        <Row>
          <Col style={{ fontWeight: "bolder" }}>Date</Col>
          <Col style={{ fontWeight: "bolder" }}>Declaration</Col>
          <Col style={{ fontWeight: "bolder" }}>Amount</Col>
        </Row>
        <DeclarationsList />
      </Container>
    </div>
  );
};

export default DeclarationHistory;
