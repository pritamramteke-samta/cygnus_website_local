import { Box, Grid, Text } from '@mantine/core';
import React from 'react';

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

const Stats = () => {
  return (
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
  );
};

export default Stats;
