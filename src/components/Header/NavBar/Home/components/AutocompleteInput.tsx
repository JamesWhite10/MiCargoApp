import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

export function AutocompleteInput(props: { formik: any; for: string; addressList: string[] }) {
  return (
    <Autocomplete
      options={props.addressList}
      size={"medium"}
      renderInput={(params) => (
        <TextField
          {...params}
          label="City"
          variant="filled"
          style={{
            backgroundColor: "#F5F8FF",
            marginTop: "20px",
            borderRadius: "7px",
          }}
        />
      )}
      onChange={(e, value) => {
        props.formik.setFieldValue(props.for, value);
      }}
    />
  );
}
