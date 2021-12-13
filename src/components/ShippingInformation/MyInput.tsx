import React from "react";
import { Form } from "react-bootstrap";

type MyInputPropsType = {
  formik: any;
  for: string;
  label: string;
};

const MyInput: React.FC<MyInputPropsType> = (props) => {
  const formik = props.formik;
  return (
    <div>
      <Form.Label className={"mx-3 mt-3"}>{props.label}</Form.Label>
      <Form.Control
        style={{
          cursor: "pointer",
        }}
        placeholder={props.label}
        type="input"
        size={"lg"}
        className={
          formik.touched[props.for] && formik.errors[props.for]
            ? "w-100 background-color-input errorActive"
            : "w-100 background-color-input"
        }
        {...formik.getFieldProps(props.for)}
      />
      {formik.touched[props.for] && formik.errors[props.for] && (
        <div
          style={{
            color: "#852F2E",
          }}
        >
          {formik.errors[props.for]}
        </div>
      )}
    </div>
  );
};

export default MyInput;
