import { Box, Grid, Group } from '@mantine/core';
import './stats2.scss';
import { statsData } from './data';

const StatBox = ({
  value,
  label,
  description,
}: {
  value: string;
  label?: string;
  description: string;
}) => (
  // <Box className='stats-box-2'>
  <>
    <Group className='stats-titles2'>
      <Box className='stats-box-title2'>{value}</Box>
      <Box className='stats-box-unit2'>{label}</Box>
    </Group>
    <Box className='stats-box-desc2'>{description}</Box>
  </>
  // </Box>
);

const Stats2 = () => {
  return (
    <Box
      // p={0}
      className='stats-cont2'
    >
      <Grid
      // p={0}
      // w={'100%'}
      >
        {statsData.map((stat) => {
          return (
            <Grid.Col
              p={24}
              className='stats-box-2'
              // p={'calc((24 / 1440) * 100vw)'}
              span={{ base: 6, md: 3, lg: 3 }}
            >
              <StatBox
                value={stat.value}
                label={stat.label}
                description={stat.description}
              />
            </Grid.Col>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Stats2;
