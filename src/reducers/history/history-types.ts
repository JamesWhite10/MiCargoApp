import { IGetDeclarationHistoryResponse } from "../../api/micargo-api";
import { getPurchaseHistory } from "./history-actions";

export interface InitialStateType {
  loadedHistory: IGetDeclarationHistoryResponse[];
  anonymousDeclarationIds: number[]; //Должны записываться для неавторизированных пользователей при создании декларации и храниться в localStorage
}

export type HistoryActionType = ReturnType<typeof getPurchaseHistory>;

export const GET_PURCHASE_HISTORY = "GET_PURCHASE_HISTORY";
