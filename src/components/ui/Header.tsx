import React from 'react';
import { DownOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Dropdown, Button, Row, Space, Avatar } from 'antd';
import { getUserInfo, removeUserInfo } from '@/services/auth.service';
import { authKey } from '@/constants/storage-key';
import { useRouter } from 'next/navigation';

const { Header: AntHeader } = Layout;

const Header = () => {
  const router = useRouter();
  const { role } = getUserInfo();

  const logout = () => {
    removeUserInfo(authKey);
    router.replace('/login');
  };

  const items: MenuProps['items'] = [
    {
      key: '0',
      label: (
        <Button onClick={logout} size="small" type="text" danger>
          Logout
        </Button>
      ),
    },
  ];

  return (
    <AntHeader style={{ backgroundColor: '#fff' }}>
      <Row justify="end" align="middle">
        <p style={{marginRight:'5px'}}>{role}</p>
        <Dropdown menu={{ items }}>
          <Space>
            <Avatar size="large" icon={<UserOutlined />} />
          </Space>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default Header;
