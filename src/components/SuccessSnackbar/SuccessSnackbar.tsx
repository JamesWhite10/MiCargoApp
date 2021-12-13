import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../app/store";
import { setAppSuccessAC } from "../../reducers/app/app-actions";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const SuccessSnackbar: React.FC = () => {
  const success = useSelector<AppStateType, string | null>((state) => state.app.success);
  const dispatch = useDispatch();

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setAppSuccessAC(null));
  };

  const isOpen = success !== null;

  return (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success">
        {success}
      </Alert>
    </Snackbar>
  );
};
