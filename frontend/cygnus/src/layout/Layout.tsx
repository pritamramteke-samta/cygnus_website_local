import { Container } from '@mantine/core';
const Layout = ({ children }) => {
  return (
    <Container
      fluid
      p={0}
      h={'100vh'}
      // w={'1440px'}
    >
      {children}
    </Container>
  );
};

export default Layout;
