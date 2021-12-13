import { setDeclarationNumAC } from "./report-actions";
import { IGetDeclarationResponse } from "../../api/micargo-api";

export type InitialStateTypes = {
  data: IGetDeclarationResponse;
};
export const SET_DECLARATION_DATA = "report/SET_DECLARATION_DATA";
export type SetDeclarationNumType = ReturnType<typeof setDeclarationNumAC>;
export type ReportActionsType = SetDeclarationNumType;
