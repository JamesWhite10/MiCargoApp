import { InitialStateTypes, ReportActionsType, SET_DECLARATION_DATA } from "./report-types";
import { Dispatch } from "redux";
import { setAppErrorAC, setAppStatusAC, setAppSuccessAC } from "../app/app-actions";
import { HomeClient, FileAClaimRequest } from "../../api/micargo-api";
import instance, { API_URL } from "../../api/app-api";
import { setDeclarationNumAC } from "./report-actions";

const initialState: InitialStateTypes = {
  data: {},
};

export const reportReducer = (
  state: InitialStateTypes = initialState,
  action: ReportActionsType
): InitialStateTypes => {
  switch (action.type) {
    case SET_DECLARATION_DATA: {
      return { ...state, data: action.payload.data };
    }
    default:
      return state;
  }
};

// thunk

export const getDeclarationByNum = (declarationNum: string) => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC("loading"));
  const client = new HomeClient(API_URL, instance);
  client
    .getDeclarationByNumber(declarationNum)
    .then((res) => {
      dispatch(setDeclarationNumAC(res));
      dispatch(setAppStatusAC("idle"));
    })
    .catch((err) => {
      dispatch(setAppErrorAC(err.message));
      dispatch(setAppStatusAC("idle"));
    });
};

export const fileClaim = (data: FileAClaimRequest) => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC("loading"));
  const client = new HomeClient(API_URL, instance);
  console.log(data);
  client
    .fileAClaim(data)
    .then(() => {
      dispatch(setAppStatusAC("idle"));
      dispatch(setAppSuccessAC("cool, thnx"));
    })
    .catch((err) => {
      dispatch(setAppStatusAC("idle"));
      dispatch(setAppErrorAC(err.message));
    });
};
