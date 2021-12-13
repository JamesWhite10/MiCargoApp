import { OptionsType } from "./ConstantsLists";

export function CustomOption(props: {
  formik: any;
  for: string;
  list: Array<OptionsType>;
  hint: string;
  className: string;
}) {
  const formik = props.formik;

  return (
    <div>
      <select
        required
        style={{
          color: "#2c829d",
          backgroundColor: "#F5F8FF",
          cursor: "pointer",
        }}
        className={
          formik.touched[props.for] && formik.errors[props.for]
            ? props.className + " errorActive"
            : props.className
        }
        {...props.formik.getFieldProps(props.for)}
      >
        <option disabled value="0" id="default">
          {props.hint}
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
            color: "white",
          }}
        >
          {formik.errors[props.for]}
        </div>
      )}
    </div>
  );
}
