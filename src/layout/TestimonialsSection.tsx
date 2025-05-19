import {
  Box,
  Container,
  Text,
  Title,
  Avatar,
  Paper,
  Group,
  Center,
} from '@mantine/core';
import { IconStarFilled } from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';

const stars = new Array(5).fill(0);

const testimonials = [
  {
    name: 'Leslie Alexander',
    title: 'Freelance React Developer',
    quote:
      '“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Jacob Jones',
    title: 'Digital Marketer',
    quote:
      '“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    name: 'Jenny Wilson',
    title: 'Graphic Designer',
    quote:
      '“I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.”',
    image: 'https://randomuser.me/api/portraits/women/50.jpg',
  },
  {
    name: 'Jenny Wilson',
    title: 'Graphic Designer',
    quote:
      '“I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.”',
    image: 'https://randomuser.me/api/portraits/women/50.jpg',
  },
];

const TestimonialCard = ({
  name,
  title,
  quote,
  image,
}: (typeof testimonials)[0]) => (
  <Paper shadow='md' radius='8px' p='xl' withBorder style={{ minHeight: 280 }}>
    <Group spacing={4} mb='sm'>
      {stars.map((_, i) => (
        <IconStarFilled key={i} size={16} color='#F59E0B' />
      ))}
    </Group>
    <Text size='sm' c='dimmed' mb='md' style={{ fontStyle: 'italic' }}>
      {quote}
    </Text>
    <Group mt='auto'>
      <Avatar src={image} radius='xl' />
      <Box>
        <Text fw={600} size='sm'>
          {name}
        </Text>
        <Text size='xs' c='dimmed'>
          {title}
        </Text>
      </Box>
    </Group>
  </Paper>
);

const TestimonialsSection = () => {
  return (
    <Box
      py={64}
      //   style={{
      //     background: `
      //   radial-gradient(circle at 35% 60%, #91F5D3 -30%, transparent 25%),
      //   radial-gradient(circle at 95% 60%, #FF814399 -10%, transparent 15%),
      //   #fffefc
      // `,
      //   }}
    >
      <Container size={'lg'}>
        <Center mb='xs'>
          <Text size='sm' c='dimmed'>
            2,157 people have said how good Cygnus
          </Text>
        </Center>
        <Title align='center' order={2} mb='xl'>
          Our happy clients say about us
        </Title>

        <Carousel
          slideSize={{ base: '100%', sm: '50%', md: '33.3333%' }}
          slideGap='xl'
          align='start'
          withIndicators
          loop
          draggable
          plugins={[Autoplay({ delay: 5000 })]}
          styles={{
            indicator: {
              width: 10,
              height: 4,
              transition: 'width 250ms ease',
              '&[data-active]': {
                width: 20,
              },
            },
          }}
        >
          {testimonials.map((t, i) => (
            <Carousel.Slide key={i}>
              <TestimonialCard {...t} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
