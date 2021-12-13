import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Form } from "react-bootstrap";

const CarrierDetail: React.FC = () => {
  return (
    <div>
      <Container>
        <Form.Group as={Row}>
          <h2 className={"text-color-name-profile"}>Carrier Detail</h2>
          <Col xl={6} className="mb-3 pt-4 pt-lg-2">
            1
          </Col>
          <Col xl={6} className="mb-3 pt-4 pt-lg-2">
            2
          </Col>
        </Form.Group>
      </Container>
    </div>
  );
};

export default CarrierDetail;
