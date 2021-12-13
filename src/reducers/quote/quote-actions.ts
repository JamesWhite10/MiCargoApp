import { IGetDeclarationResponse, IQuoteRequest, IQuoteResponse } from "../../api/micargo-api";
import { GET_USER_QUOTE, IS_QUOTE, GET_DECLARATION_USER, SET_QUOTE_DATA } from "./quote-types";

export const setQuoteData = (payload: { quoteData: IQuoteRequest }) =>
  ({ type: SET_QUOTE_DATA, payload } as const);

export const getUserQuote = (payload: { quote: IQuoteResponse }, isQuote: boolean) =>
  ({ type: GET_USER_QUOTE, payload, isQuote } as const);

export const isQuoteUser = (isQuote: boolean) => ({ type: IS_QUOTE, isQuote } as const);

export const getDeclarationUser = (payload: { declaration: IGetDeclarationResponse }) =>
  ({ type: GET_DECLARATION_USER, payload } as const);
