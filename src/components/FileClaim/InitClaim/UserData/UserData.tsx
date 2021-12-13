import React from "react";
import { useSelector } from "react-redux";
import { AppStateType } from "../../../../app/store";
import { dateGetter, timeGetter } from "../../../../utils/helper";
import { UnAuthUserInfo } from "../../../shared/GuestServicesComponent/UnAuthUserInfo/UnAuthUserInfo";
import { AuthUserInfo } from "../../../shared/GuestServicesComponent/AuthUserInfo/AuthUserInfo";
import { IsLoggedInType } from "../../../../reducers/auth/auth-types";
import { Col } from "react-bootstrap";

export const UserData = () => {
  const isLoggedIn = useSelector<AppStateType, IsLoggedInType>((state) => state.auth.isLoggedIn);
  const number = useSelector<AppStateType, string | undefined>(
    (state) => state.report.data?.number
  );
  const purchaseDate = useSelector<AppStateType, Date | undefined>(
    (state) => state.report.data?.purchaseDate
  );
  return (
    <Col>
      {isLoggedIn !== "guest" ? <AuthUserInfo /> : <UnAuthUserInfo />}
      <div>
        <h5>Insurance Declaration: {number ? number : "XXX"}</h5>
        <h5>
          Purchase Date: {purchaseDate && dateGetter(purchaseDate)}{" "}
          {purchaseDate && timeGetter(purchaseDate)}
        </h5>
      </div>
    </Col>
  );
};
