import { Button } from "react-bootstrap";

export function SubmitButton(props: { formik: any; class: string; name: string }) {
  return (
    <Button
      type="submit"
      className={props.class}
      size="lg"
      disabled={!(props.formik.dirty && props.formik.isValid) || props.formik.isSubmitting}
      onClick={props.formik.handleSubmit}
    >
      {props.name}
    </Button>
  );
}
