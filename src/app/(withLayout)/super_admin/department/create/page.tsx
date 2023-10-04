'use client';

import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import UMBreadCrumb from '@/components/ui/UMBreadCrumb';
import { useAddDepartmentMutation } from '@/redux/api/departmentApi';
import { departmentSchema } from '@/schemas/department';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Col, Row, message } from 'antd';

const CreateDepartmentPage = () => {
  const [addDepartment, { isLoading }] = useAddDepartmentMutation();

  const onSubmit = async (data: any) => {
    try {
      await addDepartment(data);
      message.success('Department added successfully');
    } catch (error: any) {
      message.error(error.message);
    }
  };

  const base = 'super_admin';
  return (
    <div style={{ padding: '0 10px' }}>
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: 'department', link: `/${base}/department` },
        ]}
      />
      <h1>Create Department</h1>
      <Form submitHandler={onSubmit} resolver={yupResolver(departmentSchema)}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit" disabled={isLoading}>
          add
        </Button>
      </Form>
    </div>
  );
};

export default CreateDepartmentPage;
