import React from "react";
import { Link } from "react-router-dom";
import { PATH } from "../../../../app/App";
import { setIsModalOpen } from "../../../../reducers/auth/auth-actions";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../../../app/store";

export const UnAuthUserInfo = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector<AppStateType, boolean>((state) => state.auth.isOpen);
  return (
    <div>
      <p>
        If you’ve created a MiKargo profile,{" "}
        <Link onClick={() => dispatch(setIsModalOpen(!isOpen))} to={PATH.PROFILE}>
          Login Here
        </Link>
        . Guests may still use this portal to initiate claims or request coverage cancellations,
        however. In fact, some might even prefer it that way.
      </p>
    </div>
  );
};
