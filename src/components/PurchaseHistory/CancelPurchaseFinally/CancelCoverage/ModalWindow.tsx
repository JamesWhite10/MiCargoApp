import React from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import style from "./ModalWindow.module.css";
import { useDispatch } from "react-redux";
import { setIsModalOpen } from "../../../../reducers/cancelPurchase/cancel-actions";
import { ReactComponent as CloseIcon } from "../../../../assets/icon/closeIcon.svg";

export function ModalWindow(props: {
  formik: any;
  isOpen: boolean;
  declarationId: number | undefined;
}) {
  const dispatch = useDispatch();
  return (
    <>
      <Modal
        show={props.isOpen}
        onHide={() => dispatch(setIsModalOpen(false))}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Form onSubmit={props.formik.handleSubmit}>
          <Modal.Body className={style.modalGeneral}>
            <div
              style={{ color: "white", float: "right" }}
              onClick={() => dispatch(setIsModalOpen(false))}
            >
              <CloseIcon />
            </div>
            <Container className={"d-flex align-items-center"}>
              <Col>
                <Row style={{ color: "white" }}>
                  Are you sure you want to cancel insurance declaration {props.declarationId}?
                </Row>
                <Row>
                  <Col xs={12} sm={7} className={"mt-sm-4 mt-xs-4 mt-xl-4"}>
                    <Button className={style.btnGo} type="submit">
                      Yes, Cancel this Coverage
                    </Button>
                  </Col>
                  <Col xs={12} sm={2} className={"mt-sm-4 mt-xs-4 mt-xl-4"}>
                    <Button className={style.btnGo} onClick={() => dispatch(setIsModalOpen(false))}>
                      No
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Container>
          </Modal.Body>
        </Form>
      </Modal>
    </>
  );
}
