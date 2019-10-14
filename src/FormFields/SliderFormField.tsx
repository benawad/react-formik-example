import { FieldProps } from "formik";
import React from "react";
import { Slider, Typography } from "@material-ui/core";

export const SliderFormField: React.FC<FieldProps & { label: string }> = ({
  field,
  form,
  label,
  ...props
}) => {
  return (
    <>
      <Typography>{label}</Typography>
      <Slider
        onChange={(_, v) => form.setFieldValue(field.name, v)}
        value={field.value}
        step={10}
        marks
        min={10}
        max={110}
        {...props}
      />
    </>
  );
};
