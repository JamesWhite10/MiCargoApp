import { Form } from "react-bootstrap";

export function ZipCodeInput(props: { formik: any; for: string; label: string; hint: string }) {
  const formik = props.formik;
  return (
    <div>
      <Form.Label className={"mx-3 text-white"}>{props.label}</Form.Label>
      <Form.Control
        style={{
          backgroundColor: "#F5F8FF",
          cursor: "pointer",
        }}
        type="input"
        placeholder={props.hint}
        size={"lg"}
        className={
          formik.touched[props.for] && formik.errors[props.for] ? "w-75 errorActive" : "w-75"
        }
        {...formik.getFieldProps(props.for)}
      />
      {formik.touched[props.for] && formik.errors[props.for] && (
        <div
          style={{
            color: "white",
          }}
        >
          {formik.errors[props.for]}
        </div>
      )}
    </div>
  );
}
