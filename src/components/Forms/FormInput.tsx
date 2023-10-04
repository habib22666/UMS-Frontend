'use client';
import { useFormContext, Controller } from 'react-hook-form';
import { Input } from 'antd';
import { getErrorMessageByPropertyName } from '@/utils/schema-validator';

interface IInput {
  label?: string;
  name: string;
  type?: string;
  id?: string;
  size?: 'large' | 'small';
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
  const { control,formState:{errors} } = useFormContext();
  
  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === 'password' ? (
            <Input.Password
              {...field}
              type={type}
              size={size}
              placeholder={placeholder}
              value={value ? value : field.value}
            />
          ) : (
            <Input
              {...field}
              type={type}
              size={size}
              placeholder={placeholder}
              value={value ? value : field.value}
            />
          )
        }
      />
      <small style={{ color: "red" }}>{errorMessage}</small>
    </>
  );
};

export default FormInput;
