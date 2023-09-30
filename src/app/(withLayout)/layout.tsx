'use client';
import Contents from '@/components/ui/Contents';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import SideBar from '@/components/ui/Sidebar';
import { isLoggedIn } from '@/services/auth.service';
import { Layout } from 'antd';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);

    if (!userLoggedIn) {
      router.push('/login');
    }
  }, [router, userLoggedIn]);

  if (isLoading) {
    return <LoadingSpinner/>;
  }

  return (
    <Layout hasSider>
      <SideBar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
