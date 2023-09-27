'use client';

import { Button, Col, Row } from 'antd';
import loginImage from '@/assets/login.gif';
import Image from 'next/image';
import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import { SubmitHandler } from 'react-hook-form';
import { useUserLoginMutation } from '@/redux/api/authApi';

type FormValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
  const [login] = useUserLoginMutation();

  const onSubmit: SubmitHandler<FormValues> = async(data) => {
    const res = await login({...data});
    console.log(res);
  };

  return (
    <div>
      <Row justify='center' align='middle' style={{minHeight:'100vh'}}>
        <Col sm={12} md={16} lg={10}>
          <Image src={loginImage} alt="login image" width={500} />
        </Col>
        <Col sm={12} md={8} lg={8}>
          <h1>First login your account</h1>
          <div>
            <Form submitHandler={onSubmit}>
              <div>
                <FormInput name="id" type="text" size="large" label="User Id" />
              </div>
              <div>
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
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
