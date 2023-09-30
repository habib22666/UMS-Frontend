'use client';

import UMBreadCrumb from '@/components/ui/UMBreadCrumb';
import { getUserInfo } from '@/services/auth.service';
import React from 'react';

const CreateFacultyPage = () => {
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
            label: `manage faculty`,
            link: `/${role}/manage-faculty`,
          },
        ]}
      />

      <div>
        <h1> Create faculty</h1>
      </div>
    </section>
  );
};

export default CreateFacultyPage;
