import React from "react";
import styles from "./Report.module.css";
import { GuestServicesComponent } from "../../../shared/GuestServicesComponent/GuestServicesComponent";
import { ClaimReport } from "./ClaimReport/ClaimReport";
import { Redirect } from "react-router-dom";
import { PATH } from "../../../../app/App";
import { useSelector } from "react-redux";
import { AppStateType } from "../../../../app/store";
import { Col, Container, Row } from "react-bootstrap";

const Report: React.FC = () => {
  const declarationNum = useSelector<AppStateType, string | undefined>(
    (state) => state.report.data?.number
  );

  if (declarationNum !== undefined) {
    return <Redirect to={PATH.FILE_A_CLAIM} />;
  }

  return (
    <div className={styles.reportClaimContainer}>
      <Container>
        <Row>
          <Col xl={6}>
            <GuestServicesComponent />
          </Col>
          <Col xl={6} className={"mt-sm-4 mt-4 mt-xl-2 "}>
            <ClaimReport />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Report;
