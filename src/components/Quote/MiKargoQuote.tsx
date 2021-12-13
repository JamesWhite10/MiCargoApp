import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import style from "./MiKargoQuote.module.css";
import { Button, Form, FormControl } from "react-bootstrap";
import CurrencyInput from "react-currency-input-field";
import MapQuote from "./MapQuote";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../app/store";
import { IGetDeclarationResponse } from "../../api/micargo-api";
import { getDeclarationData } from "../../reducers/quote/quote-reducer";
import { Redirect } from "react-router-dom";
import { PATH } from "../../app/App";
import { isQuoteUser } from "../../reducers/quote/quote-actions";

const MiKargoQuote: React.FC = () => {
  const dispatch = useDispatch();
  const declarationId = useSelector<AppStateType, string | undefined | null>(
    (state) => state.quote.declarationId
  );
  const declarationData = useSelector<AppStateType, IGetDeclarationResponse | undefined>(
    (state) => state.quote.declarationData
  );

  const distanceRounding = Math.round(declarationData?.distance as number);

  const numberWithCommas = distanceRounding.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const onClickShipping = () => {
    window.location.href = PATH.SHIPPING_INFORMATION;
  };

  useEffect(() => {
    if (!declarationData && declarationId) {
      dispatch(getDeclarationData(Number(declarationId)));
    }
  }, [declarationId, dispatch, declarationData]);

  useEffect(() => {
    dispatch(isQuoteUser(false));
  }, [dispatch]);

  if (!declarationData && !declarationId) {
    return <Redirect to={PATH.HOME} />;
  }

  return (
    <div className={`${style.quotePageBlock} pb-4 pb-lg-4 pt-4 pt-lg-4`}>
      <Container>
        <Row className={"p-1 p-sm-2 p-md-2 p-lg-5"}>
          <Col>
            <h1 className={"fw-bold text-color-name-profile"}>Your MiKargo Quote</h1>
          </Col>
        </Row>
        <Row className={"p-1 pt-4 pt-lg-4 p-sm-2 p-md-2 p-lg-3"}>
          <Col xl={6} className={"d-flex flex-column"}>
            <Row>
              <Col>
                <Form.Label className={"mx-3"}>
                  Amount
                  <div className={"mt-3 mt-md-2"}>
                    <h1 className={"color-amount"}>${declarationData?.amount}</h1>
                  </div>
                </Form.Label>
              </Col>
              <Col>
                <Form.Label className={"mx-3"}>Distance</Form.Label>
                <div>
                  <CurrencyInput
                    value={distanceRounding}
                    disabled={true}
                    allowDecimals={false}
                    className={"w-75 text-align-center full-value-input form-control"}
                    suffix={" Miles"}
                    decimalSeparator="."
                    groupSeparator=","
                  />
                </div>
              </Col>
            </Row>
            <div className={`${style.map} mt-5`}>
              <MapQuote />
            </div>
            <div className={"mx-3 mt-2"}>
              <div className={"fs-5 text-quote"}>
                from <span className={"color-city"}>{declarationData?.origin}</span> to{" "}
                <span className={"color-city"}>{declarationData?.destination}</span>{" "}
                <span className={"text-black"}>({`${numberWithCommas} mi.`})</span>
              </div>
              <div className={"text-quote"}>
                *informational purposes only, your route may change
              </div>
            </div>
          </Col>
          <Col xl={6} className={"mt-sm-4 mt-4 mt-xl-0"}>
            <Form.Label className={"mx-3"}>Insured Cargo</Form.Label>
            <FormControl
              className={"w-100"}
              size={"lg"}
              value={declarationData?.insuredCargoName}
              disabled={true}
            />
            <Row className={"mt-4"}>
              <Col xl={6}>
                <Form.Label className={"mx-3"}>Full Value</Form.Label>
                <CurrencyInput
                  value={declarationData?.fullValue}
                  disabled={true}
                  allowDecimals={false}
                  className={"w-75 full-value-input form-control"}
                  prefix={"$ "}
                  decimalSeparator="."
                  groupSeparator=","
                />
              </Col>
              <Col xl={6} className={"mt-xs-3 mt-sm-3 mt-md-3 mt-lg-3 mt-xl-0 mt-3"}>
                <Form.Label className={"mx-3"}>Deductible</Form.Label>
                <CurrencyInput
                  value={declarationData?.deductible}
                  disabled={true}
                  allowDecimals={false}
                  className={"w-75 full-value-input form-control"}
                  prefix={"$ "}
                  decimalSeparator="."
                  groupSeparator=","
                />
              </Col>
            </Row>
            <Row className={"mt-5"}>
              <Col xl={6}>
                <Form.Label className={"mx-3"}>From Zip Code</Form.Label>
                <FormControl
                  className={"w-75"}
                  size={"lg"}
                  value={declarationData?.fromZipCode}
                  disabled={true}
                />
                <FormControl
                  className={"w-100 mt-4"}
                  size={"lg"}
                  value={declarationData?.origin}
                  disabled={true}
                />
              </Col>
              <Col xl={6} className={"mt-xs-3 mt-sm-3 mt-md-3 mt-lg-3 mt-xl-0 mt-3"}>
                <Form.Label className={"mx-3"}>To Zip Code</Form.Label>
                <FormControl
                  className={"w-75"}
                  size={"lg"}
                  value={declarationData?.toZipCode}
                  disabled={true}
                />
                <FormControl
                  className={"w-100 mt-4"}
                  size={"lg"}
                  value={declarationData?.destination}
                  disabled={true}
                />
              </Col>
            </Row>
            <Row className="mt-5 text-align-center">
              <Col>
                <Button type="button" className={"mt-5 w-50"} size={"lg"} onClick={onClickShipping}>
                  Purchase
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MiKargoQuote;
