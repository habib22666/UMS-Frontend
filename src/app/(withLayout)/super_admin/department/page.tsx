'use client';

import UMBreadCrumb from '@/components/ui/UMBreadCrumb';
import { getUserInfo } from '@/services/auth.service';
import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';

const DepartmentPage = () => {
  const { role } = getUserInfo() as any;

  return (
    <section>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
        ]}
      />

      <div>
        <h1>Manage student</h1>
        <Link href={`/${role}/department/create`}>
          <Button type="primary">Create</Button>
        </Link>
      </div>
    </section>
  );
};

export default DepartmentPage;
