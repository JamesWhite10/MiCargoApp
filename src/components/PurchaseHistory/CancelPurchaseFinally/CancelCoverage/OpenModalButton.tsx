import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setIsModalOpen } from "../../../../reducers/cancelPurchase/cancel-actions";

export function OpenModalButton(props: { formik: any; name: string; class: string }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        type="submit"
        className={props.class}
        size={"lg"}
        disabled={!(props.formik.dirty && props.formik.isValid) || props.formik.isSubmitting}
        onClick={() => dispatch(setIsModalOpen(true))}
      >
        {props.name}
      </Button>
    </div>
  );
}

export default OpenModalButton;
