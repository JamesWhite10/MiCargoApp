import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import style from "./CancelPurchase.module.css";
import { PATH } from "../../../../app/App";
import { Redirect } from "react-router-dom";
import { AppStateType } from "../../../../app/store";
import { CancelPurchaseFindDeclaration as FindDeclaration } from "./FindDeclaration/FindDeclaration";
import { IGetDeclarationResponse } from "../../../../api/micargo-api";
import { isEmptyObject } from "../../../../utils/isEmptyObject";
import { GuestServicesComponent } from "../../../shared/GuestServicesComponent/GuestServicesComponent";

const CancelPurchase: React.FC = () => {
  const currentDeclaration = useSelector<AppStateType, IGetDeclarationResponse | undefined>(
    (state) => state.cancel.currentDeclaration
  );

  if (isEmptyObject(currentDeclaration)) {
    return <Redirect to={PATH.CANCEL_A_PURCHASE_FINALLY} />;
  }

  return (
    <div className={style.cancelPurchaseBlock}>
      <Container>
        <Row className={"p-2 p-sm-2 p-md-2 p-lg-5"}>
          <Col xl={6}>
            <GuestServicesComponent />
          </Col>
          <Col xl={6} className={"mt-sm-4 mt-4 mt-xl-2 "}>
            <FindDeclaration />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CancelPurchase;
