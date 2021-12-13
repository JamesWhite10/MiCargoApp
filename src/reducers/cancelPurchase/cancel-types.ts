import { IGetDeclarationResponse } from "../../api/micargo-api";
import { setCoverageIsCanceled, setCurrentDeclaration, setIsModalOpen } from "./cancel-actions";

export type InitialStateType = {
  currentDeclaration: IGetDeclarationResponse;
  isOpen: boolean;
  isCanceled: boolean;
};
export type CancelActionType =
  | ReturnType<typeof setCurrentDeclaration>
  | ReturnType<typeof setIsModalOpen>
  | ReturnType<typeof setCoverageIsCanceled>;

export const SET_CURRENT_DECLARATION = "cancel/SET_CURRENT_DECLARATION";
export const IS_MODAL_OPEN = "cancel/IS_MODAL_OPEN";
export const IS_CANCELED = "cancel/IS_CANCELED";
