import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { ICancelCoverageRequest, IGetDeclarationResponse } from "../../../../api/micargo-api";
import { PATH } from "../../../../app/App";
import { AppStateType } from "../../../../app/store";
import { setIsModalOpen } from "../../../../reducers/cancelPurchase/cancel-actions";
import { ModalWindow } from "./ModalWindow";
import { StringInput } from "../../../shared/Inputs/StringInput";
import OpenModalButton from "./OpenModalButton";
import { CustomCheckBox } from "../../../shared/Inputs/CustomCheckBox/CustomCheckBox";
import { cancelCoverage } from "../../../../reducers/cancelPurchase/cancel-reducer";
import { ModalSucessWindow as ModalSuccessWindow } from "./ModalSucessWindow";

export const CancelCoverage: React.FC = () => {
  const dispatch = useDispatch();
  const currentDeclaration = useSelector<AppStateType, IGetDeclarationResponse | undefined>(
    (state) => state.cancel.currentDeclaration
  );
  const isModalOpen = useSelector<AppStateType, boolean>((state) => state.cancel.isOpen);
  const isCanceled = useSelector<AppStateType, boolean>((state) => state.cancel.isCanceled);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);

  useEffect(() => {
    // TODO Костыль, вызывающийся, когда компонент will unmount, и то не всегда (кто знает как пофиксить, исправьте на нормальный)
    window.addEventListener("mousemove", () => {});
    return () => {
      window.removeEventListener("mousemove", () => {});
      setIsSuccessModalOpen(false);
    };
  }, []);

  const formik = useFormik({
    initialValues: {
      purchaserName: undefined,
      declarationId: currentDeclaration?.id,
      certify: false,
    },
    validate: (values) => {
      const errors: any = {};
      if (!values.purchaserName) {
        errors.purchaserName = "Field is required";
      }
      if (!values.certify) {
        errors.certify = "Field is required";
      }
      return errors;
    },
    onSubmit: (values) => {
      if (isModalOpen) dispatch(setIsModalOpen(false));
      dispatch(cancelCoverage(values as ICancelCoverageRequest));
      formik.resetForm(); // TODO не сбрасывается значение в инпуте purchaserName
    },
  });

  useEffect(() => {
    if (isCanceled) setIsSuccessModalOpen(true);
  }, [isCanceled]);

  if (!currentDeclaration) {
    return <Redirect to={PATH.CANCEL_A_PURCHASE} />;
  }

  return (
    <div>
      <Container>
        <StringInput formik={formik} for={"purchaserName"} noHint={true} />
        <CustomCheckBox
          text="I certify that I have purchased this coverage, and that cargo has not been picked up nor delivered."
          formik={formik}
          forActive="certify"
        />
        <OpenModalButton formik={formik} name="Cancel this purchase" class="mt-4" />
        <ModalWindow formik={formik} declarationId={currentDeclaration.id} isOpen={isModalOpen} />
        <ModalSuccessWindow isOpen={isSuccessModalOpen} setIsOpen={setIsSuccessModalOpen} />
      </Container>
    </div>
  );
};

export default CancelCoverage;
