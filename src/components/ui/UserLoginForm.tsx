'use client';

import { useUserLoginMutation } from '@/redux/api/authApi';
import { storeUserInfo } from '@/services/auth.service';
import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import Form from '../Forms/Form';
import FormInput from '../Forms/FormInput';
import { useRouter } from 'next/navigation';
import { Button } from 'antd';

type FormValues = {
  id: string;
  password: string;
};

function UserLoginForm() {
  const [login] = useUserLoginMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const res = await login({ ...data }).unwrap();
    storeUserInfo({ accessToken: res?.accessToken });

    if (res?.accessToken) {
      return router.push('/profile');
    }
  };

  return (
    <Form submitHandler={onSubmit}>
      <div>
        <FormInput name="id" type="text" size="large" label="User Id" />
      </div>
      <div
        style={{
          margin: '15px 0',
        }}
      >
        <FormInput
          name="password"
          type="password"
          size="large"
          label="User Password"
        />
      </div>
      <Button type="primary" htmlType="submit">
        Login
      </Button>
    </Form>
  );
}

export default UserLoginForm;
