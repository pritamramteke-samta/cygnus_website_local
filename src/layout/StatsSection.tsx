import { Box, Grid, Text, Title, Button, Container } from '@mantine/core';

const StatBox = ({
  value,
  label,
  description,
}: {
  value: string;
  label?: string;
  description: string;
}) => (
  <Box
    px='md'
    py='sm'
    style={{
      borderLeft: '4px solid #F97316', // Tailwind's orange-500 (#F97316)
      paddingLeft: '1rem',
    }}
  >
    <Text size='64px' fw={600} span c='dark'>
      {value}
    </Text>
    {label && (
      <Text size='32px' fw={600} span ml={4} c='dark'>
        {label}
      </Text>
    )}
    <Text
      size='16px'
      fw={400}
      mt={4}
      c='dimmed'
      style={{
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {description}
    </Text>
  </Box>
);

const StatsSection = () => {
  return (
    <Box bg='white' py={6}>
      <Container size='xl'>
        <Grid gutter={40} align='start'>
          {/* Left Text Section */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Title
              order={2}
              mb='md'
              fw={600}
              size={'56px'}
              style={{
                fontFamily: 'Manrope, sans-serif',
              }}
            >
              Know More
              <br />
              About Stats
            </Title>
          </Grid.Col>

          {/* Right Description */}
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Text size='sm' mb='sm' c='dimmed'>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only
            </Text>
            <Button variant='filled' radius='md' color='#00472F' size='xs'>
              Know more
            </Button>
          </Grid.Col>
        </Grid>

        <Box mt={'15px'} />

        {/* Stats Grid */}
        <Grid gutter={40}>
          <Grid.Col span={{ base: 6, md: 3 }}>
            <StatBox
              value='10'
              label='Million +'
              description='Respond to 58% more customer messages in the first year.'
            />
          </Grid.Col>
          <Grid.Col span={{ base: 6, md: 3 }}>
            <StatBox
              value='60+'
              label='min'
              description='Enhancing Model Performance Through Effective Tuning and Optimization Techniques'
            />
          </Grid.Col>
          <Grid.Col span={{ base: 6, md: 3 }}>
            <StatBox
              value='92'
              label='%'
              description='Businesses report increased loyalty by focusing on customer service.'
            />
          </Grid.Col>
          <Grid.Col span={{ base: 6, md: 3 }}>
            <StatBox
              value='30'
              label='%'
              description='Reduce email volume by 30% with self-serve support.'
            />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsSection;
