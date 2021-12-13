import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import style from "./Profile.module.css";
import { FormikValues } from "formik";
import { IGetUserResponse } from "../../api/micargo-api";
import { UniqueCheckBox } from "../shared/UniqueCheckbox/UniqueCheckbox";
import { AutoFillString } from "./AutoFillString/AutoFillString";
import { Link } from "react-router-dom";
import { PATH } from "../../app/App";

type ProfilePropsType = {
  profile?: IGetUserResponse;
  isAdmin: boolean;
  formik: FormikValues;
  adminOptions?: boolean;
  setAdminOptions?: (adminOptions: boolean) => void;
  buttonName: string;
};

const Profile: React.FC<ProfilePropsType> = (props) => {
  const { profile, formik, adminOptions, isAdmin, setAdminOptions, buttonName } = props;
  return (
    <div className={`${style.createBlock} pb-4 pb-lg-4 pt-4 pt-lg-4`}>
      <Container>
        <Row>
          <Col>
            <h1 className={"fw-bold text-color-name-profile"}>
              {profile && profile.business_Name ? profile.business_Name : "MiKargo Profile"}
            </h1>
          </Col>
        </Row>
        <Form onSubmit={formik.handleSubmit}>
          <Row className="mb-3 pt-4 pt-lg-4">
            <Col md="6">
              <Form.Label>Business Name*</Form.Label>
              {!isAdmin && profile?.business_Name !== "" ? (
                <Form.Control
                  required
                  type="input"
                  placeholder="Business Name"
                  size="lg"
                  className={
                    formik.touched.business_Name && formik.errors.business_Name
                      ? "errorActive"
                      : "background-color-input"
                  }
                  {...formik.getFieldProps("business_Name")}
                />
              ) : (
                <AutoFillString formik={formik} />
              )}
              {formik.touched.business_Name && formik.errors.business_Name && (
                <div
                  style={{
                    color: "#852F2E",
                  }}
                >
                  {formik.errors.business_Name}
                </div>
              )}
            </Col>
            <Col md="6" className={"mt-md-0 mt-3 mt-xl-0"}>
              <Form.Label>Contact Name*</Form.Label>
              <Form.Control
                required
                type="input"
                placeholder="Contact Name"
                size="lg"
                className={
                  formik.touched.contact_Name && formik.errors.contact_Name
                    ? "errorActive"
                    : "background-color-input"
                }
                {...formik.getFieldProps("contact_Name")}
              />
              {formik.touched.contact_Name && formik.errors.contact_Name && (
                <div
                  style={{
                    color: "#852F2E",
                  }}
                >
                  {formik.errors.contact_Name}
                </div>
              )}
            </Col>
          </Row>{" "}
          <Row className="mb-3">
            <Col md="6">
              <Form.Label>Mailing Address 1*</Form.Label>
              <Form.Control
                required
                type="input"
                placeholder="Address"
                size="lg"
                className={
                  formik.touched.mailing_Address_1 && formik.errors.mailing_Address_1
                    ? "errorActive"
                    : "background-color-input"
                }
                {...formik.getFieldProps("mailing_Address_1")}
              />
              {formik.touched.mailing_Address_1 && formik.errors.mailing_Address_1 && (
                <div
                  style={{
                    color: "#852F2E",
                  }}
                >
                  {formik.errors.mailing_Address_1}
                </div>
              )}
            </Col>
            <Col md="6" className={"mt-md-0 mt-3 mt-xl-0"}>
              <Form.Label>Contact Email*</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Email"
                size="lg"
                className={
                  formik.touched.contact_Email && formik.errors.contact_Email
                    ? "errorActive"
                    : "background-color-input"
                }
                {...formik.getFieldProps("contact_Email")}
              />
              {formik.touched.contact_Email && formik.errors.contact_Email && (
                <div
                  style={{
                    color: "#852F2E",
                  }}
                >
                  {formik.errors.contact_Email}
                </div>
              )}
            </Col>
          </Row>{" "}
          <Row className="mb-3">
            <Col md="6">
              <Form.Label>Mailing Address 2</Form.Label>
              <Form.Control
                type="input"
                placeholder="Address"
                size="lg"
                className={"background-color-input"}
                {...formik.getFieldProps("mailing_Address_2")}
              />
            </Col>
            <Col md="6" className={"mt-md-0 mt-3 mt-xl-0"}>
              <Form.Label>Username*</Form.Label>
              <Form.Control
                required
                type="input"
                placeholder="Username"
                size="lg"
                className={
                  formik.touched.username && formik.errors.username
                    ? "errorActive"
                    : "background-color-input"
                }
                {...formik.getFieldProps("username")}
              />
              {formik.touched.username && formik.errors.username && (
                <div
                  style={{
                    color: "#852F2E",
                  }}
                >
                  {formik.errors.username}
                </div>
              )}
            </Col>
          </Row>{" "}
          <Row className="mb-3">
            <Col md="6" className={"mt-md-0 mt-3 mt-xl-0"}>
              <Form.Label>Password*</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                size="lg"
                className={
                  formik.touched.password && formik.errors.password
                    ? "errorActive"
                    : "background-color-input"
                }
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password && (
                <div
                  style={{
                    color: "#852F2E",
                  }}
                >
                  {formik.errors.password}
                </div>
              )}
            </Col>
            <Col md="6" className={"mt-md-0 mt-3 mt-xl-0"}>
              <Form.Label>Verify Password*</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Verify Password"
                size="lg"
                className={
                  formik.touched.confirmPassword && formik.errors.confirmPassword
                    ? "errorActive"
                    : "background-color-input"
                }
                {...formik.getFieldProps("confirmPassword")}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <div
                  style={{
                    color: "#852F2E",
                  }}
                >
                  {formik.errors.confirmPassword}
                </div>
              )}
            </Col>
          </Row>{" "}
          <Row className="mb-3">
            <Col md="6">
              <Row className={"m-0 flex-column"}>
                <Col className={"p-0"}>
                  <Form.Label>City / State / Zip*</Form.Label>
                  <Form.Control
                    required
                    type="input"
                    placeholder="City"
                    size="lg"
                    className={
                      formik.touched.city && formik.errors.city
                        ? "w-75 errorActive"
                        : "w-75 background-color-input"
                    }
                    {...formik.getFieldProps("city")}
                  />
                  {formik.touched.city && formik.errors.city && (
                    <div
                      style={{
                        color: "#852F2E",
                      }}
                    >
                      {formik.errors.city}
                    </div>
                  )}
                </Col>
                <Col className={"d-flex p-0"}>
                  <Form.Control
                    required
                    type="input"
                    placeholder="State"
                    className={
                      formik.touched.state && formik.errors.state
                        ? "form-select-lg mt-2 w-25 background-color-input errorActive"
                        : "form-select-lg mt-2 w-25 background-color-input"
                    }
                    {...formik.getFieldProps("state")}
                  />
                  <Form.Control
                    required
                    type="input"
                    placeholder="Zip"
                    size="lg"
                    className={
                      formik.touched.zip && formik.errors.zip
                        ? `${style.zip} mt-2 background-color-input mx-2 errorActive`
                        : `${style.zip} mt-2 background-color-input mx-2`
                    }
                    {...formik.getFieldProps("zip")}
                  />
                </Col>
              </Row>
            </Col>
            <Col md="6">
              <Form.Label>Country*</Form.Label>
              <Form.Control
                required
                type="input"
                placeholder="USA or Canada only"
                size="lg"
                className={
                  formik.touched.country && formik.errors.country
                    ? "w-75 errorActive"
                    : "w-75 background-color-input"
                }
                {...formik.getFieldProps("country")}
              />
              {formik.touched.country && formik.errors.country && (
                <div
                  style={{
                    color: "#852F2E",
                  }}
                >
                  {formik.errors.country}
                </div>
              )}
              {isAdmin && (
                <div>
                  <UniqueCheckBox
                    checkedMode={adminOptions}
                    onChangeCheckBox={() => setAdminOptions && setAdminOptions(!adminOptions)}
                    checkBoxLabel={"Designated Admin User"}
                  />
                </div>
              )}
            </Col>
          </Row>
          <Row className="text-align-center">
            <Col>
              <Link to={PATH.PURCHASE_HISTORY}> Back to Purchase History</Link>
            </Col>
            <Col className={"mt-md-5 mt-xl-5"}>
              <Button
                className={"button-create-profile"}
                type={"submit"}
                size={"lg"}
                disabled={!(formik.dirty && formik.isValid) || formik.isSubmitting}
              >
                {buttonName}
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default React.memo(Profile);
