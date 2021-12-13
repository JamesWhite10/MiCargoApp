import React from "react";
import Container from "react-bootstrap/esm/Container";
import ApprovedCom from "./ApprovedCom";
import ExcludedCom from "./ExcludedCom";

const Commodity: React.FC = () => {
  return (
    <>
      <Container>
        <ApprovedCom />
        <ExcludedCom />
      </Container>
    </>
  );
};

export default Commodity;
