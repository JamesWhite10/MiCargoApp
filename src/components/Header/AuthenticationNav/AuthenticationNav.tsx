import React, { useCallback, useEffect } from "react";
import style from "./AuthenticationNav.module.css";
import { NavLink } from "react-router-dom";
import { PATH } from "../../../app/App";
import Login from "../../Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../../app/store";
import { logoutTC } from "../../../reducers/auth/auth-reducer";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Button } from "@material-ui/core";
import { ReactComponent as LoginIcon } from "../../../assets/icon/loginIcon.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/icon/logoutIcon.svg";
import { ReactComponent as SignUpIcon } from "../../../assets/icon/signUpIcon.svg";
import { ReactComponent as ProfileIcon } from "../../../assets/icon/profileIcon.svg";
import { setIsModalOpen } from "../../../reducers/auth/auth-actions";
import { IsLoggedInType } from "../../../reducers/auth/auth-types";

const AuthenticationNav: React.FC = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector<AppStateType, IsLoggedInType>((state) => state.auth.isLoggedIn);
  const isOpen = useSelector<AppStateType, boolean>((state) => state.auth.isOpen);
  const logoutHandler = useCallback(() => {
    dispatch(logoutTC);
  }, [dispatch]);
  useEffect(() => {
    if (isLoggedIn === "guest") {
      dispatch(setIsModalOpen(false));
    }
  }, [dispatch, isLoggedIn]);
  return (
    <>
      <div className={style.headerBlock}>
        <Container>
          <Row className={"d-flex"}>
            <Col sm={6} xs={6}>
              {isLoggedIn !== "guest" ? (
                <div>
                  <NavLink to={PATH.PROFILE} className={"text-decoration-none"}>
                    <Button style={{ width: "135px", height: "60px" }}>
                      <ProfileIcon className={"mx-2"} />
                      Profile
                    </Button>
                  </NavLink>
                </div>
              ) : (
                <div>
                  <NavLink to={PATH.PROFILE} className={"text-decoration-none"}>
                    <Button style={{ width: "135px", height: "60px" }}>
                      <SignUpIcon className={"mx-2"} />
                      Sign Up
                    </Button>
                  </NavLink>
                </div>
              )}
            </Col>
            <Col sm={6} xs={6} className={"px-2 px-lg-2 px-md-2"}>
              {isLoggedIn !== "guest" ? (
                <div>
                  <Button
                    style={{ width: "135px", height: "60px" }}
                    className={style.item}
                    onClick={logoutHandler}
                  >
                    <LogoutIcon className={"mx-2"} />
                    Logout
                  </Button>
                </div>
              ) : (
                <div>
                  <Button
                    style={{ width: "135px", height: "60px" }}
                    className={style.item}
                    onClick={() => dispatch(setIsModalOpen(!isOpen))}
                  >
                    <LoginIcon className={"mx-2"} />
                    Login
                  </Button>
                  <Login isOpen={isOpen} />
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AuthenticationNav;
