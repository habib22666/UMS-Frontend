import { DatePicker } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';

type UMDatePikerProps = {
  // onChange?: (valOne: Dayjs | null, valTwo: string) => void;
  name: string;
  label?: string;
  //   value?: Dayjs;
  size?: 'large' | 'small';
};

const FormDatePicker = ({ name, label, size }: UMDatePikerProps) => {
  const { control } = useFormContext();

  return (
    <div>
      {label ? label : null}
      <br />
      <Controller
        name={name}
        control={control}
        render={({ field }) => <DatePicker {...field} size={size} style={{ width: "100%" }}/>}
      />
    </div>
  );
};

export default FormDatePicker;
