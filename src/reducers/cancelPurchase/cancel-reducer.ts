import { Dispatch } from "redux";
import instance, { API_URL } from "../../api/app-api";
import { HomeClient, CancelCoverageRequest, ICancelCoverageRequest } from "../../api/micargo-api";
import { setCoverageIsCanceled, setCurrentDeclaration } from "./cancel-actions";
import {
  CancelActionType,
  InitialStateType,
  IS_MODAL_OPEN,
  SET_CURRENT_DECLARATION,
  IS_CANCELED,
} from "./cancel-types";
import { setAppErrorAC, setAppStatusAC } from "../app/app-actions";
import { parseErrorsResponse } from "../../utils/error-utils";

const initialState: InitialStateType = {
  currentDeclaration: {},
  isOpen: false,
  isCanceled: false,
};

export const cancelReducer = (
  state: InitialStateType = initialState,
  action: CancelActionType
): InitialStateType => {
  switch (action.type) {
    case SET_CURRENT_DECLARATION:
      return { ...state, currentDeclaration: action.value };
    case IS_MODAL_OPEN:
      return { ...state, isOpen: action.isOpen };
    case IS_CANCELED:
      return { ...state, isCanceled: action.isCanceled };
    default:
      return state;
  }
};

// thunks

export const getcurrentDeclaration = (number: string) => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC("loading"));
  const client = new HomeClient(API_URL, instance);
  client
    .getDeclarationByNumber(number)
    .then((response) => {
      if (response) {
        dispatch(setCurrentDeclaration(response));
        dispatch(setAppStatusAC("succeeded"));
      }
    })
    .catch((error) => {
      if (error.response) {
        const errorStr = parseErrorsResponse(error.response);
        dispatch(setAppErrorAC(errorStr));
      } else {
        dispatch(setAppErrorAC(error.message + ", more details in the console"));
      }
      dispatch(setAppStatusAC("failed"));
    });
};

export const cancelCoverage = (data: ICancelCoverageRequest) => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC("loading"));
  const client = new HomeClient(API_URL, instance);
  client
    .cancelCoverage(new CancelCoverageRequest(data))
    .then(() => {
      dispatch(setCoverageIsCanceled(true));
      dispatch(setAppStatusAC("succeeded"));
    })
    .catch((error) => {
      if (error.response) {
        dispatch(setAppErrorAC(parseErrorsResponse(error.response)));
      }
      if (!error.response) {
        dispatch(setAppErrorAC(error.message + ", more details in the console"));
      }
      dispatch(setAppStatusAC("failed"));
    });
};
