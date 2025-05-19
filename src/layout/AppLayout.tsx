import { Container } from '@mantine/core';
import type React from 'react';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import type { AppLayoutProps } from './layoutTypes';

const Layout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <Container fluid p={0} h={'100vh'}>
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
