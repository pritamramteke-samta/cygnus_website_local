import {
  Box,
  Title,
  Button,
  Center,
  Container,
  Group,
  Image,
  Flex,
} from '@mantine/core';
import { IconStarFilled, IconStarHalfFilled } from '@tabler/icons-react';
import vector from '../assets/images/vector.png';
import vector1 from '../assets/images/vector1.png';
import vector2 from '../assets/images/vector2.png';
import vector3 from '../assets/images/vector3.png';

const StarRating = () => (
  <Group mb='sm'>
    <IconStarFilled size={20} color='#F59E0B' />
    <IconStarFilled size={20} color='#F59E0B' />
    <IconStarFilled size={20} color='#F59E0B' />
    <IconStarFilled size={20} color='#F59E0B' />
    <IconStarHalfFilled size={20} color='#F59E0B' />
  </Group>
);

const TrustSection = () => {
  return (
    <Box
      py={64}
      // style={{
      //   background: `
      //     radial-gradient(circle at 15% 30%, #DFFFEF 5%, transparent 25%),
      //     radial-gradient(circle at 95% 30%, #FFD6C2 0%, transparent 20%),
      //     #ffffff
      //   `,
      // }}
    >
      <Container size='md'>
        <Center>
          <StarRating />
        </Center>

        <Title
          order={2}
          fw={600}
          fz={48}
          mb='xl'
          style={{ textAlign: 'center' }}
        >
          In a world of shifting regulations and <br /> rising complexity,
          Cygnus Compliance is <br />
          the calm you can <br /> trust.
        </Title>

        <Center mb={40}>
          <Button
            variant='outline'
            color='dark'
            radius='xl'
            size='md'
            px='lg'
            style={{ fontWeight: 500, borderColor: '#008F5E' }}
          >
            Download latest report
          </Button>
        </Center>

        <Flex justify='center' align='center' wrap='wrap' gap='xl'>
          <Image
            src={vector}
            alt='Top 50'
            height={60}
            w='auto'
            maw={120}
            fit='contain'
          />
          <Image
            src={vector1}
            alt='Momentum Leader'
            height={60}
            w='auto'
            maw={120}
            fit='contain'
          />
          <Image
            src={vector2}
            alt='Cyber 60'
            height={60}
            w='auto'
            maw={120}
            fit='contain'
          />
          <Image
            src={vector3}
            alt='Capterra'
            height={60}
            w='auto'
            maw={120}
            fit='contain'
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default TrustSection;
