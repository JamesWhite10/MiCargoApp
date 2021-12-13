import React from "react";
import styles from "./DeclarationData.module.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { AppStateType } from "../../../app/store";
import { dateGetter } from "../../../utils/helper";
import { IGetDeclarationResponse } from "../../../api/micargo-api";

export const DeclarationData = () => {
  const number = useSelector<AppStateType, string | undefined>(
    (state) => state.report.data?.number
  );
  const amount = useSelector<AppStateType, number | undefined>(
    (state) => state.report.data?.amount
  );
  const distance = useSelector<AppStateType, number | undefined>(
    (state) => state.report.data?.distance
  );
  const insuredCargoName = useSelector<AppStateType, string | undefined>(
    (state) => state.report.data?.insuredCargoName
  );
  const cargoValue = useSelector<AppStateType, number | undefined>(
    (state) => state.report.data?.cargoValue
  );
  const deductible = useSelector<AppStateType, number | undefined>(
    (state) => state.report.data?.deductible
  );
  const fullValue = useSelector<AppStateType, number | undefined>(
    (state) => state.report.data?.fullValue
  );
  const origin = useSelector<AppStateType, string | undefined>(
    (state) => state.report.data?.origin
  );
  const destination = useSelector<AppStateType, string | undefined>(
    (state) => state.report.data?.destination
  );
  const pickUp = useSelector<AppStateType, Date | undefined>((state) => state.report.data?.pickUp);
  const delivery = useSelector<AppStateType, Date | undefined>(
    (state) => state.report.data?.delivery
  );
  const bol = useSelector<AppStateType, string | undefined>((state) => state.report.data?.bol);
  const motorCarrierName = useSelector<AppStateType, string | undefined>(
    (state) => state.report.data?.motorCarrierName
  );
  const dot = useSelector<AppStateType, string | undefined>((state) => state.report.data?.dot);

  return (
    <div>
      <div>
        <h2>Insurance Declaration {number}</h2>
      </div>
      <Form>
        <Row>
          <Col>
            <Form.Label>Amount</Form.Label>
            <h3 className={styles.amountStiles}>{`$${amount}`}</h3>
          </Col>
          <Col>
            <Form.Label>Distance</Form.Label>
            <Form.Control value={`${distance} Mi`} disabled={true} />
          </Col>
          <Col>
            <Form.Label>Cost Per Mi.</Form.Label>
            <Form.Control value={"$0.23"} disabled={true} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Insured Cargo</Form.Label>
            <Form.Control value={insuredCargoName} disabled={true} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Cargo Value</Form.Label>
            <Form.Control value={`$${cargoValue}`} disabled={true} />
          </Col>
          <Col>
            <Form.Label>Deductible</Form.Label>
            <Form.Control value={`$${deductible}`} disabled={true} />
          </Col>
          <Col>
            <Form.Label>Full Value</Form.Label>
            <Form.Control value={`$${fullValue}`} disabled={true} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Origin</Form.Label>
            <Form.Control value={origin} disabled={true} />
          </Col>
          <Col>
            <Form.Label>Destination</Form.Label>
            <Form.Control value={destination} disabled={true} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Est. Pick-up</Form.Label>
            <Form.Control value={pickUp && dateGetter(pickUp)} disabled={true} />
          </Col>
          <Col>
            <Form.Label>Est. Delivery</Form.Label>
            <Form.Control value={delivery && dateGetter(delivery)} disabled={true} />
          </Col>
          <Col>
            <Form.Label>BOL Number</Form.Label>
            <Form.Control value={bol} disabled={true} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Motor Carrier Name</Form.Label>
            <Form.Control value={motorCarrierName} disabled={true} />
          </Col>
          <Col xs={4}>
            <Form.Label>DOT Number</Form.Label>
            <Form.Control value={dot} disabled={true} />
          </Col>
        </Row>
      </Form>
    </div>
  );
};
