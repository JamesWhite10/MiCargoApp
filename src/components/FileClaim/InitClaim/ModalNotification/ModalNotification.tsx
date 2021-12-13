import React from "react";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export const ModalNotification = ({
  claimMode,
  setClaimMode,
}: {
  claimMode: boolean;
  setClaimMode: (claimMode: boolean) => void;
}) => {
  const history = useHistory();
  const closeModalHandler = () => {
    setClaimMode(false);
    history.goBack();
  };

  return (
    <Modal show={claimMode}>
      <Modal.Header closeButton onHide={closeModalHandler}>
        <Modal.Title>Thank You</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Your claim has been forwarded to the underwriter for disposition, and they should be in
          contact with you shortly. To check status during your claims process, you may contact
          underwriting directly at (xxx) xxx-xxxx or via email at xxxxx@xxxxx.xxx
        </p>
      </Modal.Body>
    </Modal>
  );
};
