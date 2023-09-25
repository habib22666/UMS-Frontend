"use client";
import { useFormContext, Controller } from "react-hook-form";
import { Input } from "antd";

interface IInput {
  label?: string;
  name: string;
  type?: string;
  id?: string;
  size?: "large" | "small";
  placeholder?: string;
  value?: string | string[] | number | undefined;
  validation?: object;
}

const FormInput = ({
  label,
  name,
  type,
  id,
  size,
  placeholder,
  validation,
  value,
}: IInput) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input
            {...field}
            type={type}
            size={size}
            placeholder={placeholder}
            value={value ? value : field.value}
          />
        )}
      />
    </>
  );
};

export default FormInput;
