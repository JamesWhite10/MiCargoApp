import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { IGetDeclarationResponse } from "../../../api/micargo-api";
import { PATH } from "../../../app/App";
import { AppStateType } from "../../../app/store";
import { GuestHeader } from "../../shared/GuestServicesComponent/GuestHeader";
import InsuranceDeclaration from "../../shared/InsuranceDeclaration";
import { CancelCoverage } from "./CancelCoverage/CancelCoverage";

const CancelPurchaseFinally: React.FC = () => {
  const currentDeclaration = useSelector<AppStateType, IGetDeclarationResponse | undefined>(
    (state) => state.cancel.currentDeclaration
  );

  if (!currentDeclaration) {
    debugger;
    return <Redirect to={PATH.CANCEL_A_PURCHASE} />;
  }

  return (
    <Container>
      <Row className={"p-2 p-sm-2 p-md-2 p-lg-5"}>
        <Col xl={6}>
          <GuestHeader />
          <div className="mb-4">
            Coverage may be cancelled at any time from COI purchase through the day before your
            Pick-up Date, or XX-XX-XXXX. At the time of cancellation, all parties that have received
            a COI for the shipment will be notified by email.
          </div>
          <CancelCoverage />
        </Col>
        <Col xl={6} className={"mt-sm-4 mt-4 mt-xl-2 "}>
          <InsuranceDeclaration />
        </Col>
      </Row>
    </Container>
  );
};

export default CancelPurchaseFinally;
