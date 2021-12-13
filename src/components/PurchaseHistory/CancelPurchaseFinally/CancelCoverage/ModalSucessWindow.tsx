import React, { useState } from "react";
import { Col, Form, Modal } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import style from "./ModalWindow.module.css";
import { ReactComponent as CloseIcon } from "../../../../assets/icon/closeIcon.svg";

// TODO можно привести к человеческому виду
export function ModalSucessWindow(props: { isOpen: boolean; setIsOpen: (x: boolean) => void }) {
  return (
    <>
      <Modal show={props.isOpen} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Body className={style.modalGeneral}>
          <div
            style={{ color: "white", float: "right", cursor: "pointer" }}
            onClick={() => props.setIsOpen(false)}
          >
            <CloseIcon />
          </div>
          <Container className={"d-flex align-items-center"}>
            <Col>
              <Row style={{ color: "white" }}>Coverage Cancellation Scheduled</Row>
            </Col>
            <Col>
              <Row style={{ color: "white" }}>
                You should hear from us within the next two business days regarding your refund
                status.
              </Row>
            </Col>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}
