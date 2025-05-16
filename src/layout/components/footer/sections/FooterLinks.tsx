import type { FooterLinksProps } from '@layout/layoutTypes';
import { Box, Grid } from '@mantine/core';
import React from 'react';
import '../footer.scss';
import { useNavigate } from 'react-router-dom';

const FooterLinks: React.FC<FooterLinksProps> = ({ flinks }) => {
  const navigate = useNavigate();

  return (
    <Grid.Col span={2}>
      <Box className={'footer-menu-head'}>{flinks[0].name}</Box>
      {flinks.slice(1).map((item, index) => {
        return (
          <Box
            key={index}
            onClick={() => navigate(item.link)}
            className={'footer-menu-txt'}
          >
            {item.name}
          </Box>
        );
      })}
    </Grid.Col>
  );
};

export default FooterLinks;
