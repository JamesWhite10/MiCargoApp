import { Dispatch } from "redux";
import instance, { API_URL } from "../../api/app-api";
import { setAppStatusAC, setAppErrorAC } from "../app/app-actions";
import {
  HomeClient,
  IGetDeclarationResponse,
  IQuoteRequest,
  QuoteClient,
  QuoteRequest,
} from "../../api/micargo-api";
import { getDeclarationUser, getUserQuote, isQuoteUser, setQuoteData } from "./quote-actions";
import {
  GET_DECLARATION_USER,
  SET_QUOTE_DATA,
  InitialStateType,
  IS_QUOTE,
  QuoteActionType,
  GET_USER_QUOTE,
} from "./quote-types";
import { optionsShipping } from "../../components/Header/NavBar/Home/components/ConstantsLists";
import { parseErrorsResponse } from "../../utils/error-utils";

const initialState: InitialStateType = {
  declarationData: undefined,
  isQuote: false,
  declarationId: localStorage.getItem("declarationID"),
};

export const quoteReducer = (
  state: InitialStateType = initialState,
  action: QuoteActionType
): InitialStateType => {
  switch (action.type) {
    case SET_QUOTE_DATA:
      debugger;
      const setData: IGetDeclarationResponse = {
        insuredCargoName: optionsShipping.find(
          (x) => x.id === action.payload.quoteData.insuredCargoId!
        )?.label,
        fullValue: action.payload.quoteData?.fullValue,
        fromZipCode: action.payload.quoteData?.fromZipCode,
        origin: action.payload.quoteData?.fromAddress,
        toZipCode: action.payload.quoteData?.toZipCode,
        destination: action.payload.quoteData?.toAddress,
      };
      return { ...state, declarationData: { ...state.declarationData, ...setData } };
    case GET_USER_QUOTE:
      const getData: IGetDeclarationResponse = {
        id: action.payload.quote.declarationId,
        number: action.payload.quote.declarationNumber,
        amount: action.payload.quote.amount,
        distance: action.payload.quote.distance,
        deductible: action.payload.quote.deductible,
      };
      return { ...state, declarationData: { ...state.declarationData, ...getData } };
    case IS_QUOTE:
      return {
        ...state,
        isQuote: action.isQuote,
      };
    case GET_DECLARATION_USER:
      return {
        ...state,
        declarationData: action.payload.declaration,
      };
    default:
      return state;
  }
};

// thunks

export const createQuote = (data: IQuoteRequest) => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC("loading"));
  const client = new QuoteClient(API_URL, instance);
  client
    .createQuoteWithDeclaration(new QuoteRequest(data))
    .then((response) => {
      if (response) {
        localStorage.setItem("declarationID", String(response.declarationId));
        dispatch(isQuoteUser(true));
        dispatch(getUserQuote({ quote: response }, true));
        dispatch(setQuoteData({ quoteData: data }));
        dispatch(setAppStatusAC("succeeded"));
      }
    })
    .catch((error) => {
      if (error.response) {
        const errorString = parseErrorsResponse(error.response);
        dispatch(setAppErrorAC(errorString));
      }
      if (!error.response) {
        dispatch(setAppErrorAC(error.message + " more details in the console"));
      }
      dispatch(setAppStatusAC("failed"));
    });
};

export const getDeclarationData = (declarationId: number) => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC("loading"));
  const client = new HomeClient(API_URL, instance);
  client
    .getDeclarationById(declarationId)
    .then((response) => {
      dispatch(getDeclarationUser({ declaration: response }));
      dispatch(setAppStatusAC("succeeded"));
    })
    .catch((error) => {
      dispatch(setAppErrorAC(error.message));
      dispatch(setAppStatusAC("failed"));
    });
};
