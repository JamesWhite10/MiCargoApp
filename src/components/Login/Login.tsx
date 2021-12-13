import React from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import style from "./Login.module.css";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { loginTC } from "../../reducers/auth/auth-reducer";
import { NavLink } from "react-router-dom";
import { PATH } from "../../app/App";
import { ReactComponent as CloseIcon } from "../../assets/icon/closeIcon.svg";
import { LoginRequest } from "../../api/micargo-api";
import { StringInput } from "../shared/Inputs/StringInput";
import { setIsModalOpen } from "../../reducers/auth/auth-actions";

type LoginPropsType = {
  isOpen: boolean;
};

const Login: React.FC<LoginPropsType> = (props) => {
  const dispatch = useDispatch();
  type FormikErrorType = {
    username?: string;
    password?: string;
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      adminRights: false,
    },
    validate: (values) => {
      const errors: FormikErrorType = {};
      if (!values.username) {
        errors.username = "Username is required";
      } else if (values.username.length < 3) {
        errors.username = "Invalid username";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 3) {
        errors.password = "Invalid password";
      }
      return errors;
    },
    onSubmit: (values, onSubmitProps) => {
      dispatch(loginTC(new LoginRequest(values)));
      onSubmitProps.setSubmitting(false);
      formik.resetForm();
    },
  });

  return (
    <>
      <Modal
        show={props.isOpen}
        onHide={() => dispatch(setIsModalOpen(false))}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">User Profile | Login</Modal.Title>
          <button className={style.btnClose} onClick={() => dispatch(setIsModalOpen(false))}>
            <CloseIcon />
          </button>
        </Modal.Header>

        <Modal.Body>
          <Container className={"d-flex align-items-center"}>
            <Form onSubmit={formik.handleSubmit}>
              <Row>
                <StringInput formik={formik} for="username" colName="xs-12 sm-5" />
                <StringInput
                  formik={formik}
                  for="password"
                  colName="mt-sm-0 mt-2 xs-12 sm-5"
                  type="password"
                />
                <Col xs={12} sm={2} className={"mt-sm-4 mt-xs-4 mt-xl-4"}>
                  <button
                    className={style.btnGo}
                    disabled={!(formik.dirty && formik.isValid) || formik.isSubmitting}
                  >
                    Go
                  </button>
                </Col>
              </Row>
            </Form>
          </Container>
        </Modal.Body>

        <Modal.Footer className={"d-flex justify-content-center"}>
          Want to create a MiKargo Profile?
          <NavLink to={PATH.PROFILE} className={"text-decoration-none"}>
            <Button
              className={style.btnCreate}
              size="sm"
              type="submit"
              onClick={() => dispatch(setIsModalOpen(false))}
            >
              Create Profile
            </Button>
          </NavLink>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
