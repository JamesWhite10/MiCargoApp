import React from "react";
import st from "./UniqueCheckbox.module.css";

export const UniqueCheckBox = React.memo(
  ({
    checkedMode,
    onChangeCheckBox,
    checkBoxLabel,
  }: {
    checkedMode?: boolean;
    onChangeCheckBox?: () => void;
    checkBoxLabel: string;
  }) => {
    return (
      <div className={st.radioWrapper}>
        {checkedMode ? (
          <div className={st.radioActiveStyles} onClick={onChangeCheckBox} />
        ) : (
          <div className={st.radioDefaultStyles} onClick={onChangeCheckBox} />
        )}
        <span>{checkBoxLabel}</span>
      </div>
    );
  }
);
