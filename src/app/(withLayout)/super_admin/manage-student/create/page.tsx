'use client';

import UMBreadCrumb from '@/components/ui/UMBreadCrumb';
import { getUserInfo } from '@/services/auth.service';
import React from 'react';

const CreateStudentPage = () => {
  const { role } = getUserInfo() as any;

  return (
    <section>
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
        <h1> Create Student</h1>
      </div>
    </section>
  );
};

export default CreateStudentPage;
