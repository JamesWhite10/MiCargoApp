import { Col, Button } from "react-bootstrap";

export function GetQuoteButton(props: { formik: any }) {
  return (
    <Col>
      <Button
        type="submit"
        className={"mt-4"}
        size={"lg"}
        disabled={!(props.formik.dirty && props.formik.isValid) || props.formik.isSubmitting}
      >
        Get My Quote
      </Button>
    </Col>
  );
}
