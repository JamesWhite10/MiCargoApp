import React from "react";
import { Form } from "react-bootstrap";

type MyInputDatePropsType = {
  formik: any;
  for: string;
  label: string;
};

const MyInputDate: React.FC<MyInputDatePropsType> = (props) => {
  const formik = props.formik;
  return (
    <div>
      <Form.Label className={"mx-3 mt-3"}>{props.label}</Form.Label>
      <Form.Control
        type="date"
        size={"lg"}
        className={
          formik.touched[props.for] && formik.errors[props.for]
            ? "w-75 background-color-input errorActive"
            : "w-75 background-color-input"
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

export default MyInputDate;
