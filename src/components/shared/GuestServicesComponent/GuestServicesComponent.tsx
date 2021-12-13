import React from "react";
import styles from "./GuestServicesComponent.module.css";
import { Link } from "react-router-dom";
import { PATH } from "../../../app/App";
import { useSelector } from "react-redux";
import { AppStateType } from "../../../app/store";
import { UnAuthUserInfo } from "./UnAuthUserInfo/UnAuthUserInfo";
import { AuthUserInfo } from "./AuthUserInfo/AuthUserInfo";
import { IsLoggedInType } from "../../../reducers/auth/auth-types";
import { Col, Container, Row } from "react-bootstrap";

export const GuestServicesComponent = () => {
  const isAuth = useSelector<AppStateType, IsLoggedInType>((state) => state.auth.isLoggedIn);

  return (
    <Container>
      <Row>
        <h1 className={"text-color-name-profile"}>Guest services</h1>
        {isAuth !== "guest" ? <AuthUserInfo /> : <UnAuthUserInfo />}
        <Col className={"mt-xs-3 mt-sm-3 mt-md-3 mt-lg-3 mt-xl-2 mt-3"}>
          <h5 className={"fw-bold mt-4 mb-2"}>What are the benefits of a MiKargo profile?</h5>
          <p>In addition to the claims or coverage cancellations shown here, account users can:</p>
          <div className={styles.benefitsList}>
            <ul className={"mb-4 mt-4"}>
              <li>Access purchase history</li>
              <li>Distribute Insurance Declarations</li>
              <li>Download records</li>
              <li>View Cancellations</li>
              <li>Speed up purchases</li>
            </ul>
          </div>
          <p>
            Please feel free to continue as our Guest,
            <Link to={PATH.PROFILE}>Create a MiKargo Profile</Link>, or learn even more through our{" "}
            <Link to={PATH.FAQ}>Frequently Asked Questions</Link>
          </p>
          <p className={"mt-4"}>
            Suggestions or ideas? Please <Link to={"/"}>Contact Us.</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};
