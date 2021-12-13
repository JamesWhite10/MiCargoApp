import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Col, Form } from "react-bootstrap";
import Information from "../../../Information/Information";
import style from "./HomePage.module.css";
import { useFormik } from "formik";
import { optionsShipping, trailerTypes } from "./components/ConstantsLists";
import instance, { API_URL } from "../../../../api/app-api";
import { QuoteClient, IQuoteRequest } from "../../../../api/micargo-api";
import CurrencyInput from "react-currency-input-field";
import { AutocompleteInput } from "./components/AutocompleteInput";
import { GetQuoteButton } from "./components/GetQuoteButton";
import { ZipCodeInput } from "./components/ZipCodeInput";
import { CustomOption } from "./components/CustomOption";
import { useDispatch, useSelector } from "react-redux";
import { createQuote } from "../../../../reducers/quote/quote-reducer";
import { AppStateType } from "../../../../app/store";
import { Redirect } from "react-router-dom";
import { PATH } from "../../../../app/App";
import { getZipCodeCountry } from "../../../../utils/getZipCodeCountry";

function FullValueInput(props: { formik: any; className: string }) {
  const formik = props.formik;
  return (
    <div className={"mt-5"}>
      <CurrencyInput
        placeholder="Full value"
        allowDecimals={false}
        className={
          formik.touched.fullValue && formik.errors.fullValue
            ? `w-50 full-value-input errorActive form-control ${props.className}`
            : `w-50 full-value-input form-control ${props.className}`
        }
        prefix={"$ "}
        decimalSeparator="."
        groupSeparator=","
        onChange={formik.getFieldProps("fullValue").onChange}
        onBlur={formik.getFieldProps("fullValue").onBlur}
        name="fullValue"
      />
      ;
      {formik.touched.fullValue && formik.errors.fullValue && (
        <div
          style={{
            color: "white",
            marginTop: "-23px",
          }}
        >
          {formik.errors.fullValue}
        </div>
      )}
    </div>
  );
}

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const isQuote = useSelector<AppStateType, boolean>((state) => state.quote.isQuote);

  type FormikErrorType = {
    insuredCargoId?: string;
    fullValue?: string;
    trailerTypeId?: string;
    fromZipCode?: string;
    toZipCode?: string;
    fromAddress?: string;
    toAddress?: string;
  };
  const [fromZipCode, setFromZipCode] = useState<string | undefined>("");
  const [toZipCode, setToZipCode] = useState<string | undefined>("");
  const [addressListFromCity, setAddressListFromCity] = useState<string[] | undefined>([]);
  const [addressListToCity, setAddressListToCity] = useState<string[] | undefined>([]);
  const [className] = useState("");

  const normalizeFullValue = (fullValueString: string) => {
    return fullValueString.replace(/(\$ |,)*/g, "");
  };

  const formik = useFormik({
    initialValues: {
      insuredCargoId: "0",
      fullValue: "",
      trailerTypeId: "0",
      fromZipCode: "",
      toZipCode: "",
      fromAddress: "",
      toAddress: "",
    },
    validate: (values) => {
      const errors: FormikErrorType = {};
      if (!values.insuredCargoId || values.insuredCargoId === "0") {
        errors.insuredCargoId = "Shipment category not filled in";
      }
      if (!values.fullValue) {
        errors.fullValue = "Full value is required";
      } else if (normalizeFullValue(values.fullValue).length >= 7) {
        errors.fullValue = "The amount cannot exceed $1,000,000";
      }
      if (!values.trailerTypeId || values.trailerTypeId === "0") {
        errors.trailerTypeId = "Trailer type not filled in";
      }
      if (!values.fromZipCode) {
        errors.fromZipCode = "Zip code is required";
      } else if (values.fromZipCode.length > 9) {
        errors.fromZipCode = "Invalid Zip code";
      } else {
        setFromZipCode(values.fromZipCode);
      }
      if (!values.toZipCode) {
        errors.toZipCode = "Zip code is required";
      } else if (values.toZipCode.length > 9) {
        errors.toZipCode = "Invalid Zip code";
      } else {
        setToZipCode(values.toZipCode);
      }
      return errors;
    },
    onSubmit: (values, onSubmitProps) => {
      const objToSend = {
        ...values,
        insuredCargoId: Number(values.insuredCargoId),
        trailerTypeId: Number(values.trailerTypeId),
        fullValue: Number(normalizeFullValue(values.fullValue)),
      };
      dispatch(createQuote(objToSend as IQuoteRequest));
      onSubmitProps.setSubmitting(false);
      console.log(objToSend);
    },
  });

  useEffect(() => {
    const country = getZipCodeCountry(fromZipCode);
    if (country) {
      const client = new QuoteClient(API_URL, instance);
      client
        .getZipCode(fromZipCode, country)
        .then((response) => {
          setAddressListFromCity(response.addresses);
        })
        .catch(() => {
          setAddressListFromCity([]);
        });
    }
  }, [fromZipCode]);

  useEffect(() => {
    const country = getZipCodeCountry(toZipCode);
    if (country) {
      const client = new QuoteClient(API_URL, instance);
      client
        .getZipCode(toZipCode, country)
        .then((response) => {
          setAddressListToCity(response.addresses);
        })
        .catch(() => {
          setAddressListToCity([]);
        });
    }
  }, [toZipCode]);

  if (isQuote) {
    return <Redirect to={PATH.YOUR_QUOTE} />;
  }

  return (
    <div className={`${style.homePageBlock} pb-4 pb-lg-0 pt-4 pt-lg-0`}>
      <div className={"d-flex align-items-center justify-content-between"}>
        <Container>
          <Form onSubmit={formik.handleSubmit}>
            <Row className={"p-1 p-sm-2 p-md-2 p-lg-5"}>
              <Col xl={6}>
                <Information />
              </Col>
              <Col xl={6} className={"mt-sm-4 mt-4 mt-xl-0"}>
                <Form.Label className={"mx-3 text-white"}>
                  <h4>Insured Cargo</h4>
                </Form.Label>
                <CustomOption
                  formik={formik}
                  for="insuredCargoId"
                  list={optionsShipping}
                  hint="What are you shipping?"
                  className="form-select-lg mt-4 form-select w-100"
                />
                <FullValueInput className={className} formik={formik} />
                <CustomOption
                  formik={formik}
                  for="trailerTypeId"
                  list={trailerTypes}
                  hint="Trailer Type"
                  className="form-select-lg mt-4 form-select w-75"
                />
                <Row className={"mt-5"}>
                  <Col>
                    <ZipCodeInput
                      formik={formik}
                      for="fromZipCode"
                      label="Pick-up Location"
                      hint="From Zip Code"
                    />
                    <AutocompleteInput
                      formik={formik}
                      for="fromAddress"
                      addressList={addressListFromCity as string[]}
                    />
                  </Col>
                  <Col>
                    <ZipCodeInput
                      formik={formik}
                      for="toZipCode"
                      label="Delivery Location"
                      hint="To Zip Code"
                    />
                    <AutocompleteInput
                      formik={formik}
                      for="toAddress"
                      addressList={addressListToCity as string[]}
                    />
                  </Col>
                </Row>
                <Row className="mt-5 text-align-center">
                  <GetQuoteButton formik={formik} />
                </Row>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
