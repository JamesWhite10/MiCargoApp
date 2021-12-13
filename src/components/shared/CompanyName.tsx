import React from "react";
import { Container, Col } from "react-bootstrap";

const CompanyName: React.FC = (userObj: any) => {
  return (
    <div>
      <Container>
        <Col xl={6}>
          <div>{userObj.userCompany}</div>
          <div>{userObj.userAddress}</div>
        </Col>
      </Container>
    </div>
  );
};

export default CompanyName;
