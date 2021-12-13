import React from "react";
import styles from "./ClaimForm.module.css";
import { Button, Col, Form } from "react-bootstrap";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { fileClaim } from "../../../../reducers/report-claim/report-reducer";
import { AppStateType } from "../../../../app/store";
import { FileAClaimRequest } from "../../../../api/micargo-api";

export const ClaimForm = ({ setClaimMode }: { setClaimMode: (claimMode: boolean) => void }) => {
  const declarationId = useSelector<AppStateType, number | undefined>(
    (state) => state.report.data?.id
  );

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      claimantName: "",
      claimantContactInformation: "",
      descriptionOfLoss: "",
    },
    validate: (values) => {
      const errors: any = {};
      if (!values.claimantName) {
        errors.claimantName = "Field is required";
      }
      if (!values.claimantContactInformation) {
        errors.claimantContactInformation = "Field is required";
      }
      if (!values.descriptionOfLoss) {
        errors.descriptionOfLoss = "Field is required";
      }
      return errors;
    },
    onSubmit: (values) => {
      dispatch(fileClaim(new FileAClaimRequest({ ...values, declarationId })));
      setClaimMode(true);
      formik.resetForm();
    },
  });

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Col className={styles.fieldsWrapper}>
          <Form.Label>Claimant Name</Form.Label>
          <div className={formik.errors ? styles.inputErrorMode : ""}>
            <Form.Control
              id={"claimant-name"}
              type="text"
              {...formik.getFieldProps("claimantName")}
              className={
                formik.touched.claimantName && formik.errors.claimantName
                  ? "block-example border border-danger"
                  : ""
              }
            />
            {formik.touched.claimantName && formik.errors.claimantName ? (
              <div className={styles.errorAppearance}>{formik.errors.claimantName}</div>
            ) : null}
          </div>
        </Col>

        <Col className={styles.fieldsWrapper}>
          <Form.Label>Claimant Contact Information</Form.Label>
          <div className={formik.errors ? styles.inputErrorMode : ""}>
            <Form.Control
              id={"claimant-contactInfo"}
              type="text"
              {...formik.getFieldProps("claimantContactInformation")}
              className={
                formik.touched.claimantContactInformation &&
                formik.errors.claimantContactInformation
                  ? "block-example border border-danger"
                  : ""
              }
            />
            {formik.touched.claimantContactInformation &&
            formik.errors.claimantContactInformation ? (
              <div className={styles.errorAppearance}>
                {formik.errors.claimantContactInformation}
              </div>
            ) : null}
          </div>
        </Col>

        <Col className={styles.fieldsWrapper}>
          <Form.Label>Description of Loss</Form.Label>
          <div className={formik.errors ? styles.inputErrorMode : ""}>
            <Form.Control
              as="textarea"
              rows={3}
              id={"loss-description"}
              type="text"
              {...formik.getFieldProps("descriptionOfLoss")}
              className={
                formik.touched.descriptionOfLoss && formik.errors.descriptionOfLoss
                  ? "block-example border border-danger"
                  : ""
              }
            />
            {formik.touched.descriptionOfLoss && formik.errors.descriptionOfLoss ? (
              <div className={styles.errorAppearance}>{formik.errors.descriptionOfLoss}</div>
            ) : null}
          </div>
        </Col>

        <Col className={styles.claimBtnStyles}>
          <Button
            type={"submit"}
            disabled={
              formik.values.claimantName === "" ||
              formik.values.claimantContactInformation === "" ||
              formik.values.descriptionOfLoss === ""
            }
          >
            Initiate Claim
          </Button>
        </Col>
      </Form>
    </div>
  );
};
