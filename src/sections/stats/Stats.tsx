import { Box, Group } from '@mantine/core';
import './stats.scss';
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
  <Box className='stats-box-1'>
    <Group className='stats-titles'>
      <Box className='stats-box-title'>{value}</Box>
      <Box className='stats-box-unit'>{label}</Box>
    </Group>
    <Box className='stats-box-desc'>{description}</Box>
  </Box>
);

const Stats = () => {
  return (
    <Box className='stats-cont'>
      {statsData.map((stat) => {
        return (
          <StatBox
            value={stat.value}
            label={stat.label}
            description={stat.description}
          />
        );
      })}
    </Box>
  );
};

export default Stats;
