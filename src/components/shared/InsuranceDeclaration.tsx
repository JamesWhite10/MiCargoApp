import React from "react";
import { Col, Row } from "react-bootstrap";
import { BlockedInput } from "./Inputs/BlockedInput";
import { DateToString } from "../../utils/DateToString";
import { UseCurrentDeclarationFromStore as useCurrentDeclarationFromStore } from "../../utils/hooks/UseCurrentDeclarationFromStore";
import { Form } from "react-bootstrap";

const InsuranceDeclaration: React.FC = () => {
  const {
    number,
    amount,
    distance,
    insuredCargoName,
    cargoValue,
    deductible,
    fullValue,
    origin,
    destination,
    pickUp,
    delivery,
    bol,
    motorCarrierName,
    dot,
  } = useCurrentDeclarationFromStore();

  const costPerMile = ((amount ? amount : 1) / (distance ? distance : 1)).toPrecision(3);

  return (
    <div>
      <div>
        <h2 className="mb-3">Insurance Declaration {number}</h2>
        <Row className={"mt-2"}>
          <Col>
            <Form.Label>Amount</Form.Label>
            <h3 style={{ color: "#E5651F" }}>{`$${amount}`}</h3>
          </Col>
          <BlockedInput name="Distance" val={`${distance} Mi.`} />
          <BlockedInput name="Cost Per Mi." val={`$${costPerMile}`} />
        </Row>
        <Row className={"mt-2"}>
          <BlockedInput name="Insured Cargo" val={insuredCargoName} />
        </Row>
        <Row className={"mt-2"}>
          <BlockedInput name="Cargo Value" val={`$${cargoValue}`} />
          <BlockedInput name="Deductible" val={`$${deductible}`} />
          <BlockedInput name="Full Value" val={`$${fullValue}`} />
        </Row>
        <Row className={"mt-2"}>
          <BlockedInput name="Origin" val={origin} />
          <BlockedInput name="Destination" val={destination} />
        </Row>
        <Row className={"mt-2"}>
          <BlockedInput name="Est. Pick-up" val={DateToString(pickUp)} />
          <BlockedInput name="Est. Delivery" val={DateToString(delivery)} />
          <BlockedInput name="BOL Number" val={bol} />
        </Row>
        <Row className={"mt-2"}>
          <BlockedInput name="Motor Carrier Name" val={motorCarrierName} />
          <BlockedInput name="DOT Number" val={dot} xs={4} />
        </Row>
      </div>
    </div>
  );
};

export default InsuranceDeclaration;
