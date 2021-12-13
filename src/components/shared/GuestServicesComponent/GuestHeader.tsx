import { Col, Row } from "react-bootstrap";
import React from "react";
import { setIsModalOpen } from "../../../reducers/auth/auth-actions";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../../app/store";

export const GuestHeader: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector<AppStateType, boolean>((state) => state.auth.isOpen);

  return (
    <div>
      <h1 className={"text-color-name-profile"}>Guest Services</h1>
      <div>
        If you’ve created a MiKargo profile,{" "}
        <a onClick={() => dispatch(setIsModalOpen(!isOpen))} href="#">
          Login Here
        </a>
        . Guests may still use this portal to initiate claims or request coverage cancellations,
        however. In fact, some might even prefer it that way.
      </div>
    </div>
  );
};
