import { Select } from 'antd';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

type SelectOptions = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  options: SelectOptions[];
  name: string;
  size?: 'large' | 'small';
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  defaultValue?: SelectOptions;
};

const FormSelectField = ({
  options,
  name,
  size,
  value,
  defaultValue,
  label,
  placeholder,
}: SelectFieldProps) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={onChange}
            style={{ width: '100%' }}
            placeholder={placeholder}
            size={size}
            value={value}
            options={options}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
