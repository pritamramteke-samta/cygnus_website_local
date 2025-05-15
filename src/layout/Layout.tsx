import { Container } from '@mantine/core';
import type React from 'react';
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container fluid p={0} h={'100vh'}>
      {children}
    </Container>
  );
};

export default Layout;
