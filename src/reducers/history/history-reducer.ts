import { Dispatch } from "redux";
import instance, { API_URL } from "../../api/app-api";
import { HomeClient } from "../../api/micargo-api";
import { setAppStatusAC, setAppErrorAC } from "../app/app-actions";
import { getPurchaseHistory } from "./history-actions";
import { GET_PURCHASE_HISTORY, HistoryActionType, InitialStateType } from "./history-types";
import { AppStateType } from "../../app/store";

const initialState: InitialStateType = {
  loadedHistory: [],
  anonymousDeclarationIds: [],
};

export const historyReducer = (
  state: InitialStateType = initialState,
  action: HistoryActionType
): InitialStateType => {
  switch (action.type) {
    case GET_PURCHASE_HISTORY:
      return {
        ...state,
        loadedHistory: action.payload.loadedHistory,
      };
    default:
      return state;
  }
};

// thunks

export const getLoggedPurchaseHistory = () => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC("loading"));
  const client = new HomeClient(API_URL, instance);
  client
    .getDeclarationsHistory()
    .then((response) => {
      console.log(response);
      dispatch(getPurchaseHistory({ loadedHistory: response }));
      dispatch(setAppStatusAC("succeeded"));
    })
    .catch((error) => {
      if (error.response) {
        dispatch(setAppErrorAC(error.response.errors));
      }
      if (!error.response) {
        dispatch(setAppErrorAC(error.message + " more details in the console"));
      }
      dispatch(setAppStatusAC("failed"));
    });
};

export const getAnonymousPurchaseHistory = (declarationIds: number[]) => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC("loading"));
  const client = new HomeClient(API_URL, instance);
  client
    .getDeclarationsHistoryNoauth(declarationIds)
    .then((response) => {
      dispatch(getPurchaseHistory({ loadedHistory: response }));
      dispatch(setAppStatusAC("succeeded"));
    })
    .catch((error) => {
      if (error.response.errors) {
        const errorsObj = JSON.parse(error.response.errors);
        if (!errorsObj.InsuranceDeclarations) dispatch(setAppErrorAC(error.response)); //Не имеет смысла показывать эту ошибку
      }
      if (!error.response) {
        dispatch(setAppErrorAC(error.message + " more details in the console"));
      }
      dispatch(setAppStatusAC("failed"));
    });
};
