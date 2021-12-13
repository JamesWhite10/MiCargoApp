import { SET_DECLARATION_DATA } from "./report-types";
import { GetDeclarationResponse } from "../../api/micargo-api";

export const setDeclarationNumAC = (data: GetDeclarationResponse) => {
  return { type: SET_DECLARATION_DATA, payload: { data } } as const;
};
