import { IGetDeclarationResponse } from "../../api/micargo-api";
import { IS_CANCELED, IS_MODAL_OPEN, SET_CURRENT_DECLARATION } from "./cancel-types";

export const setCurrentDeclaration = (value: IGetDeclarationResponse) =>
  ({ type: SET_CURRENT_DECLARATION, value } as const);

export const setIsModalOpen = (isOpen: boolean) => ({ type: IS_MODAL_OPEN, isOpen } as const);

export const setCoverageIsCanceled = (isCanceled: boolean) =>
  ({ type: IS_CANCELED, isCanceled } as const);
