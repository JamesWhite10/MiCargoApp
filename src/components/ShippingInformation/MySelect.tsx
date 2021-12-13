import React from "react";
import { Form } from "react-bootstrap";
import { ListType } from "./Lists";

type MySelectPropsType = {
  formik: any;
  for: string;
  label?: string;
  list: Array<ListType>;
  className: string;
};

const MySelect: React.FC<MySelectPropsType> = (props) => {
  const formik = props.formik;
  return (
    <div>
      <Form.Label className={"mx-3 mt-3"}>{props.label}</Form.Label>
      <select
        required
        style={{
          cursor: "pointer",
        }}
        className={
          formik.touched[props.for] && formik.errors[props.for]
            ? `${props.className} errorActive`
            : `${props.className}`
        }
        {...props.formik.getFieldProps(props.for)}
      >
        <option disabled value="0" id="default">
          Shipper Country
        </option>
        {props.list.map((option) => {
          return (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          );
        })}
      </select>
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

export default MySelect;
