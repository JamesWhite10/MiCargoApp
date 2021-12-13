import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../app/store";
import { IsLoggedInType } from "../../reducers/auth/auth-types";
import {
  getLoggedPurchaseHistory,
  getAnonymousPurchaseHistory,
} from "../../reducers/history/history-reducer";
import DeclarationHistory from "./DeclarationHistory/DeclarationHistory";
import { GuestServicesComponent } from "../shared/GuestServicesComponent/GuestServicesComponent";

const PurchaseHistory: React.FC = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector<AppStateType, IsLoggedInType>((state) => state.auth.isLoggedIn);
  const anonymousDeclarationIds = useSelector<AppStateType, number[]>(
    (state) => state.history.anonymousDeclarationIds
  );

  useEffect(() => {
    if (isLogged === "user" || isLogged === "admin") {
      dispatch(getLoggedPurchaseHistory());
    } else {
      dispatch(getAnonymousPurchaseHistory(anonymousDeclarationIds));
    }
  }, [anonymousDeclarationIds, dispatch, isLogged]);

  return (
    <div>
      <Container>
        <Row className={"p-2 p-sm-2 p-md-2 p-lg-5"}>
          <Col xl={6}>
            <GuestServicesComponent />
          </Col>
          <Col xl={6} className={"mt-sm-4 mt-4 mt-xl-0"}>
            <DeclarationHistory />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PurchaseHistory;
