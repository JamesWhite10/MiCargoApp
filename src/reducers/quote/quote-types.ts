import { IGetDeclarationResponse } from "../../api/micargo-api";
import { isQuoteUser, getDeclarationUser, getUserQuote, setQuoteData } from "./quote-actions";

export interface InitialStateType {
  declarationData?: IGetDeclarationResponse;
  isQuote: boolean;
  declarationId: string | null | undefined;
}
export type QuoteActionType =
  | ReturnType<typeof getUserQuote>
  | ReturnType<typeof isQuoteUser>
  | ReturnType<typeof getDeclarationUser>
  | ReturnType<typeof setQuoteData>;

export const GET_USER_QUOTE = "GET_USER_QUOTE";
export const GET_DECLARATION_USER = "GET_DECLARATION_USER";
export const SET_QUOTE_DATA = "SET_QUOTE_DATA";
export const IS_QUOTE = "IS_QUOTE";
