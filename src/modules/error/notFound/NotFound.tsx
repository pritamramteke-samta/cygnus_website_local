import './notfound.scss'; // or use .module.scss if preferred
import { Box } from '@mantine/core';

const NotFound = () => {
  return (
    <Box className='not-found-container'>
      <h1 className='not-found-title'>404</h1>
      <p className='not-found-message'>Page Not Found</p>
    </Box>
  );
};

export default NotFound;
