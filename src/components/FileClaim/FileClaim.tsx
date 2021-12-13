import React from "react";
import styles from "./FileClaim.module.css";
import { InitClaim } from "./InitClaim/InitClaim";
import { DeclarationData } from "./DeclarationData/DeclarationData";
import { useSelector } from "react-redux";
import { AppStateType } from "../../app/store";
import { Redirect } from "react-router-dom";
import { PATH } from "../../app/App";
import { Col, Container, Row } from "react-bootstrap";

export const FileClaim = () => {
  const reportData = useSelector<AppStateType, string | undefined>(
    (state) => state.report.data?.number
  );

  if (reportData === undefined) {
    return <Redirect to={PATH.REPORT_A_CLAIM} />;
  }

  return (
    <div className={styles.fileClaimContainer}>
      <Container>
        <Row className={"p-2 p-sm-2 p-md-2 p-lg-5"}>
          <Col xl={6}>
            <InitClaim />
          </Col>
          <Col xl={6}>
            <DeclarationData />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
