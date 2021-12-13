import { Col, Form } from "react-bootstrap";

export function StringInput(props: {
  formik: any;
  for: string;
  name?: string;
  colName?: string;
  noHint?: boolean;
  labelClass?: string;
  errorColor?: string;
  type?: "input" | "password";
}) {
  const formik = props.formik;
  const printName = props.name
    ? props.name
    : props.for.charAt(0).toUpperCase() + props.for.slice(1);
  const labelClass = props.labelClass ?? "fw-bold mx-3";

  return (
    <Col className={props.colName}>
      <Form.Label className={labelClass}>{printName}</Form.Label>

      <Form.Control
        style={{
          backgroundColor: "#F5F8FF",
        }}
        size={"lg"}
        placeholder={props.noHint ? "" : printName}
        className={formik.touched[props.for] && formik.errors[props.for] ? "errorActive" : ""}
        type={props.type}
        {...formik.getFieldProps(props.for)}
      />

      {formik.touched[props.for] && formik.errors[props.for] && (
        <div
          style={{
            color: props.errorColor ?? "#852F2E",
          }}
        >
          {formik.errors[props.for]}
        </div>
      )}
    </Col>
  );
}
