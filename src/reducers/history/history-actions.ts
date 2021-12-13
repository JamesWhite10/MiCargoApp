import { IGetDeclarationHistoryResponse } from "../../api/micargo-api";
import { GET_PURCHASE_HISTORY } from "./history-types";

export const getPurchaseHistory = (payload: { loadedHistory: IGetDeclarationHistoryResponse[] }) =>
  ({ type: GET_PURCHASE_HISTORY, payload } as const);
