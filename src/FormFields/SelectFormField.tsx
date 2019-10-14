import { FieldProps, getIn } from "formik";
import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText
} from "@material-ui/core";

export const SelectFormField: React.FC<
  FieldProps & {
    label?: string;
    options: Array<{ label: string; value: string }>;
  }
> = ({ field, form, label, options, ...props }) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);
  return (
    <FormControl fullWidth error={!!errorText}>
      {label && <InputLabel>{label}</InputLabel>}
      <Select fullWidth {...field} {...props}>
        {options.map(op => (
          <MenuItem key={op.value} value={op.value}>
            {op.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{errorText}</FormHelperText>
    </FormControl>
  );
};
