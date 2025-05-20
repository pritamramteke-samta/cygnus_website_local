import { Logo } from '@assets/index';
import { Box, Grid } from '@mantine/core';
import './footer.scss';
import FooterLinks from './sections/FooterLinks';
import {
  footerlinksData1,
  footerlinksData2,
  footerlinksData3,
  footerlinksData4,
  socialLinksData,
} from './data/footerLinks';

const Footer = () => {
  return (
    <Box className='footer'>
      {/* <Box className='newslater-cont'>
        <Box className='newslater-cont-title'>
          Supercharge Your Success with Our 100% Guarantee
        </Box>
        <Box className='newslater-subc-cont'>
          <Box className='newslater-subc-title'>Subscribe to Newsletter</Box>
        </Box>
        <Box className='subscribe-row'>
          <input
            className='subscribe-row-input'
            type='email'
            placeholder='Enter email address'
          />

          <CButton
            title='Subscribe'
            extraStyles={{
              borderRadius: 'calc((8 / 1440) * 100vw)',
              fontSize: 'calc((13 / 1440) * 100vw)',
              lineHeight: 'calc((28 / 1440) * 100vw)',
              width: 'calc((82 / 1440) * 100vw)',
              height: 'calc((40 / 1440) * 100vw)',
              paddingLeft: 'calc((7 / 1440) * 100vw)',
              paddingRight: 'calc((7 / 1440) * 100vw)',
              paddingTop: 'calc((6 / 1440) * 100vw)',
              paddingBottom: 'calc((6 / 1440) * 100vw)',
              fontWeight: 500,
            }}
          />
        </Box>
      </Box> */}

      <Grid w={'100%'} className='footer-menu-cont'>
        <Grid.Col span={4}>
          <img src={Logo} className='footer-logo' />
          <Box className='footer-logo-para'>
            In a world of shifting regulations and rising complexity, Cygnus
            Compliance is the calm you can trust
          </Box>

          <Box className='social-links-cont'>
            {socialLinksData.map((slink) => {
              return (
                <a
                  href={slink.linkUrl}
                  target={slink.target}
                  rel='noopener noreferrer'
                >
                  <img
                    src={slink.imgPath}
                    className='social-links-logo'
                    alt={slink.alt}
                  />
                </a>
              );
            })}
          </Box>
        </Grid.Col>

        <FooterLinks flinks={footerlinksData1} />
        <FooterLinks flinks={footerlinksData2} />
        <FooterLinks flinks={footerlinksData3} />
        <FooterLinks flinks={footerlinksData4} />
      </Grid>

      <Box className='footer-br' />
      <Box className='footer-end-cont'>
        <Box className='footer-end-left-cont'>
          <Box className='footer-menu-txt'>Privacy Policy</Box>
          <Box className='footer-menu-txt'>Terms and Conditions</Box>
          <Box className='footer-menu-txt'>Cookie Policy</Box>
        </Box>
        <Box className='footer-menu-txt'>
          {new Date().getFullYear()} © Cygnus. All rights reserved.
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
