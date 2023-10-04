'use client';

import StepperForm from '@/components/stepperForm/StepperForm';
import GuardianInfo from '@/components/studentForm/GuardianInfo';
import LocalGuardianInfo from '@/components/studentForm/LocalGuardianInfo';
import StudentBasicInfo from '@/components/studentForm/StudentBasicInfo';
import StudentInfo from '@/components/studentForm/StudentInfo';
import UMBreadCrumb from '@/components/ui/UMBreadCrumb';
import { getUserInfo } from '@/services/auth.service';

const CreateStudentPage = () => {
  const { role } = getUserInfo() as any;

  const steps = [
    {
      title: 'Student Information',
      content: <StudentInfo />,
    },
    {
      title: 'Basic Information',
      content: <StudentBasicInfo />,
    },
    {
      title: 'Guardian Information',
      content: <GuardianInfo />,
    },
    {
      title: 'Local Guardian Information',
      content: <LocalGuardianInfo />,
    },
  ];

  const handleStudentSubmit = (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section style={{ padding: '0 10px' }}>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: `manage-student`,
            link: `/${role}/manage-student`,
          },
        ]}
      />
      <div>
        <h1>Create Student</h1>
        <StepperForm steps={steps} submitHandler={handleStudentSubmit} />
      </div>
    </section>
  );
};

export default CreateStudentPage;
