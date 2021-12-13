import React from "react";
import styles from "./ClaimReport.module.css";
import { ClaimInfo } from "./ClaimInfo/ClaimInfo";
import { AddReportNumber } from "./AddReportNumber/AddReportNumber";
import { Container } from "react-bootstrap";

export const ClaimReport = () => {
  return (
    <>
      <ClaimInfo />
      <AddReportNumber />
    </>
  );
};
