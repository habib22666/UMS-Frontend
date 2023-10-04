import React, { useState,useEffect } from 'react';
import { Button, message, Steps } from 'antd';
import { FormProvider, useForm } from 'react-hook-form';
import { getFromLocalStorage, setToLocalStorage } from '@/utils/local-storage';

interface ISteps {
  title?: string;
  content?: React.ReactElement | React.ReactNode;
}

interface IStepsProps {
  steps: ISteps[];
  submitHandler: (data: any) => void;
  // navigateLink?: string;
}

const StepperForm = ({ steps, submitHandler }: IStepsProps) => {
  const [current, setCurrent] = useState(
    !!getFromLocalStorage('step')
      ? Number(JSON.parse(getFromLocalStorage('step') as string).step)
      : 0
  );

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  useEffect(() => {
    setToLocalStorage('step', JSON.stringify({ step: current }));
  }, [current]);

  const items = steps.map((item: ISteps) => ({
    key: item.title,
    title: item.title,
  }));

  const methods = useForm();
  const { handleSubmit, reset } = methods;

  const onSubmit = (data: any) => {
    submitHandler(data);
    reset();
  };

  return (
    <>
      <Steps current={current} items={items} />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>{steps[current].content}</div>
          <div style={{ marginTop: 24 }}>
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => message.success('Processing complete!')}
              >
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default StepperForm;
