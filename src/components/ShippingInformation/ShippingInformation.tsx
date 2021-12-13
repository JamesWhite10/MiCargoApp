import React from "react";
import style from "./ShippingInformation.module.css";
import CarrierDetail from "./CarrierDetail/CarrierDetail";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Form } from "react-bootstrap";
import { useFormik } from "formik";
import MyInput from "./MyInput";
import MyInputDate from "./MyInputDate";
import MySelect from "./MySelect";
import { CountryList, StateList } from "./Lists";

const ShippingInformation = () => {
  type FormikErrorType = {
    pick_up_Date?: string;
    delivery_Date?: string;
    boL_Number?: string;
    shipper_Name?: string;
    shipper_Email?: string;
    shipper_Address?: string;
    shipper_Country?: string;
    shipper_City?: string;
    shipper_State?: string;
    shipper_Zip?: string;
    carrier_Contact_Name?: string;
    carrier_Contact_Phone?: string;
    carrier_Contact_Email?: string;
    consignee_Name?: string;
    consignee_Email?: string;
  };

  const formik = useFormik({
    initialValues: {
      pick_up_Date: "",
      delivery_Date: "",
      boL_Number: "",
      shipper_Name: "",
      shipper_Email: "",
      shipper_Address: "",
      shipper_Country: "0",
      shipper_City: "",
      shipper_State: "0",
      shipper_Zip: "",
      carrier_Contact_Name: "",
      carrier_Contact_Phone: "",
      carrier_Contact_Email: "",
      consignee_Name: "",
      consignee_Email: "",
      broker_Name: "",
      broker_Email: "",
    },
    validate: (values) => {
      const errors: FormikErrorType = {};
      if (!values.pick_up_Date) {
        errors.pick_up_Date = "Pick up date is required";
      }
      if (!values.delivery_Date) {
        errors.delivery_Date = "Delivery date is required";
      }
      if (!values.boL_Number) {
        errors.boL_Number = "BOL number is required";
      } else if (values.boL_Number.length < 3) {
        errors.boL_Number = "Invalid BOL number";
      }
      if (!values.shipper_Name) {
        errors.shipper_Name = "Shipper name is required";
      } else if (values.shipper_Name.length < 3) {
        errors.shipper_Name = "Invalid shipper name";
      }
      if (!values.shipper_Email) {
        errors.shipper_Email = "Shipper email is required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.shipper_Email)) {
        errors.shipper_Email = "Invalid shipper email";
      }
      if (!values.shipper_Address) {
        errors.shipper_Address = "Shipper address is required";
      } else if (values.shipper_Address.length < 3) {
        errors.shipper_Address = "Invalid shipper address";
      }
      if (!values.shipper_Country || values.shipper_Country === "0") {
        errors.shipper_Country = "Shipper country is required";
      }
      if (!values.shipper_City) {
        errors.shipper_City = "Shipper city is required";
      } else if (values.shipper_City.length < 3) {
        errors.shipper_City = "Invalid shipper city";
      }
      if (!values.shipper_State || values.shipper_State === "0") {
        errors.shipper_State = "Shipper state is required";
      }
      if (!values.shipper_Zip) {
        errors.shipper_Zip = "Shipper zip is required";
      } else if (values.shipper_Zip.length < 6) {
        errors.shipper_Zip = "Invalid shipper zip";
      }
      if (!values.carrier_Contact_Name) {
        errors.carrier_Contact_Name = "Contact name is required";
      } else if (values.carrier_Contact_Name.length < 3) {
        errors.carrier_Contact_Name = "Invalid contact name";
      }
      if (!values.carrier_Contact_Phone) {
        errors.carrier_Contact_Phone = "Contact phone is required";
      } else if (values.carrier_Contact_Phone.length < 3) {
        errors.carrier_Contact_Phone = "Invalid contact phone";
      }
      if (!values.carrier_Contact_Email) {
        errors.carrier_Contact_Email = "Contact email is required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.carrier_Contact_Email)) {
        errors.carrier_Contact_Email = "Invalid contact email";
      }
      if (!values.consignee_Name) {
        errors.consignee_Name = "Consignee name is required";
      } else if (values.consignee_Name.length < 3) {
        errors.consignee_Name = "Invalid consignee name";
      }
      if (!values.consignee_Email) {
        errors.consignee_Email = "Consignee email is required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.consignee_Email)) {
        errors.consignee_Email = "Invalid consignee email";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const countryState = formik.getFieldProps("shipper_Country").value;
  let stateForCountry = StateList;
  const country = CountryList.find((x) => x.id === +countryState);
  if (country) {
    stateForCountry = StateList.filter((s) => s.country === country.country);
  }

  return (
    <div className={style.shippingBLock}>
      <Container>
        <Form onSubmit={formik.handleSubmit}>
          <Row>
            <Col xl={8}>
              <Form.Group as={Row}>
                <h2 className={"text-color-name-profile"}>Shipping Information</h2>
                <Col xl={6} className="mb-3 pt-4 pt-lg-2">
                  <MyInputDate formik={formik} for={"pick_up_Date"} label={"Est. Pick-up Date"} />
                  <MyInputDate formik={formik} for={"delivery_Date"} label={"Est. Delivery Date"} />
                  <MyInput formik={formik} for={"boL_Number"} label={"BOL Number"} />
                  <MyInput formik={formik} for={"shipper_Name"} label={"Shipper Name"} />
                  <MyInput formik={formik} for={"shipper_Email"} label={"Shipper Email"} />
                  <MyInput formik={formik} for={"shipper_Address"} label={"Shipper Address"} />
                  <MySelect
                    formik={formik}
                    for={"shipper_Country"}
                    label={"Shipper Country"}
                    list={CountryList}
                    className={"form-select-lg form-select w-100 background-color-input"}
                  />
                  <Row className={"m-0 flex-column"}>
                    <Col className={"p-0"}>
                      <Form.Label className="mx-3 mt-3">Shipper City / State / Zip</Form.Label>
                      <Form.Control
                        type="input"
                        placeholder="City"
                        size="lg"
                        className={
                          formik.touched.shipper_City && formik.errors.shipper_City
                            ? `${style.city} background-color-input errorActive`
                            : `${style.city} background-color-input`
                        }
                        {...formik.getFieldProps("shipper_City")}
                      />
                    </Col>
                    <Col className={"d-flex p-0 w-100"}>
                      <Form>
                        <select
                          className={
                            formik.touched.shipper_State && formik.errors.shipper_State
                              ? `${style.state} form-select-lg form-select mt-2 background-color-input errorActive`
                              : `${style.state} form-select-lg form-select mt-2 background-color-input`
                          }
                          {...formik.getFieldProps("shipper_State")}
                        >
                          <option disabled value="0" id="default">
                            St.
                          </option>
                          {stateForCountry.map((option) => {
                            return (
                              <option key={option.id} value={option.id}>
                                {option.label}
                              </option>
                            );
                          })}
                        </select>
                      </Form>
                      <Form.Control
                        type="input"
                        placeholder="Zip"
                        size="lg"
                        className={
                          formik.touched.shipper_Zip && formik.errors.shipper_Zip
                            ? "mt-2 w-75 background-color-input mx-4 errorActive"
                            : "mt-2 w-75 background-color-input mx-4"
                        }
                        {...formik.getFieldProps("shipper_Zip")}
                      />
                    </Col>
                    {formik.touched.shipper_City && formik.errors.shipper_City && (
                      <div
                        style={{
                          color: "#852F2E",
                        }}
                      >
                        {formik.errors.shipper_City}
                      </div>
                    )}
                    {formik.touched.shipper_State && formik.errors.shipper_State && (
                      <div
                        style={{
                          color: "#852F2E",
                        }}
                      >
                        {formik.errors.shipper_State}
                      </div>
                    )}
                    {formik.touched.shipper_Zip && formik.errors.shipper_Zip && (
                      <div
                        style={{
                          color: "#852F2E",
                        }}
                      >
                        {formik.errors.shipper_Zip}
                      </div>
                    )}
                  </Row>
                </Col>
                <Col xl={6} className="mb-3 pt-4 pt-lg-2">
                  <MyInput
                    formik={formik}
                    for={"carrier_Contact_Name"}
                    label={"Carrier Contact Name"}
                  />
                  <MyInput
                    formik={formik}
                    for={"carrier_Contact_Phone"}
                    label={"Carrier Contact Phone"}
                  />
                  <MyInput
                    formik={formik}
                    for={"carrier_Contact_Email"}
                    label={"Carrier Contact Email"}
                  />
                  <MyInput formik={formik} for={"consignee_Name"} label={"Consignee Name"} />
                  <MyInput formik={formik} for={"consignee_Email"} label={"Consignee Email"} />
                  <MyInput formik={formik} for={"broker_Name"} label={"Broker Name (optional)"} />
                  <MyInput formik={formik} for={"broker_Email"} label={"Broker Email (optional)"} />
                  <Form.Check
                    className={"mx-3 mt-3 mt-xs-2 mt-xl-5 mt-md-3 mt-lg-3"}
                    type="radio"
                    label="I have read and agree to the MiKargo Terms & Conditions."
                  />
                </Col>
              </Form.Group>
            </Col>
            <Col xl={4}>
              <Form.Group as={Row}>
                <CarrierDetail />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default ShippingInformation;
