import React from "react";
import style from "./CustomCheckBox.module.css";

export const CustomCheckBox = React.memo(
  ({ text, formik, forActive }: { text: string; formik: any; forActive: string }) => {
    const isActive = formik.getFieldProps(forActive).value;
    return (
      <div
        className={style.radioWrapper}
        onClick={() => formik.setFieldValue(forActive, !isActive)}
      >
        <div className={style.parent}>
          {isActive ? (
            <div className={style.radioActive}>
              <div className={style.innerRadioActive} />
            </div>
          ) : (
            <div className={style.radioDisable} />
          )}
        </div>
        <span>{text}</span>
      </div>
    );
  }
);
