import {
  Box,
  Text,
  Title,
  Container,
  Card,
  Image,
  Anchor,
  SimpleGrid,
} from '@mantine/core';
// import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
// import image3 from '../assets/images/image3.png';

const blogPosts = [
  {
    title: 'Understanding Supply Chain Risk Management',
    description:
      'Advanced code solutions added directly inside of Webflow at the click of a button.',
    image: image2,
    link: '#',
  },
  {
    title: 'Key Steps in Managing Supply Chain Risk',
    description:
      'Advanced code solutions added directly inside of Webflow at the click of a button.',
    image: image2,
    link: '#',
  },
  {
    title: 'Internal Audit Through the Years (must read)',
    description:
      'Advanced code solutions added directly inside of Webflow at the click of a button.',
    image: image2,
    link: '#',
  },
];

const BlogCard = ({
  title,
  description,
  image,
  link,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
}) => (
  <Card
    withBorder
    radius='md'
    shadow='xs'
    p={0}
    style={{ overflow: 'hidden', transition: 'transform 0.2s ease' }}
  >
    <Image src={image} height={180} alt={title} />
    <Box p='md'>
      <Text fw={600} size='sm' mb={4}>
        {title}
      </Text>
      <Text size='xs' c='dimmed' mb='sm'>
        {description}
      </Text>
      <Anchor href={link} size='xs' fw={500} style={{ color: '#18181B' }}>
        Learn more
      </Anchor>
    </Box>
  </Card>
);

const BlogSection = () => {
  return (
    <Box py={64}>
      <Container size='lg'>
        <Title
          order={2}
          mb={4}
          fw={600}
          size={'56px'}
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Read our blog
        </Title>
        <Text size='sm' c='dimmed' mb='xl'>
          Discover articles and tutorials to help you build better
        </Text>

        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 3 }}
          spacing='lg'
          verticalSpacing='xl'
          mb='lg'
        >
          {blogPosts.map((post, i) => (
            <BlogCard key={i} {...post} />
          ))}
        </SimpleGrid>

        <Anchor
          href='#'
          size='sm'
          fw={600}
          underline='always'
          style={{ color: '#18181B' }}
        >
          Read all 150 blogs
        </Anchor>
      </Container>
    </Box>
  );
};

export default BlogSection;
