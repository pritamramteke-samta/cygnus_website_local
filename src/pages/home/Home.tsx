import { Accordion, Box, Container, Grid, Group } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useRef, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import './home.scss';
import CButton from '../../components/buttons/CButton';
import colors from '../../constants/colors';
import {
  FooterLogo,
  LegalDoc,
  LegalDocW,
  TechConsult,
  TechConsultW,
} from '../../assets';
import { IoChevronDown } from 'react-icons/io5';

const groceries = [
  {
    emoji: '🍎',
    value: 'Apples',
    description:
      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
  },
  {
    emoji: '🍌',
    value: 'Bananas',
    description:
      'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
  },
  {
    emoji: '🥦',
    value: 'Broccoli',
    description:
      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
  },
];

const Home = () => {
  const videos = ['/videos/vid1.mp4', '/videos/vid2.mp4', '/videos/vid3.mp4'];

  const autoplay = useRef(Autoplay({ delay: 3000 }));
  const carouselRef = useRef(null);
  const [tabHover, settabHover] = useState(false);
  const [tabHover2, settabHover2] = useState(false);
  const [value, setValue] = useState<string[]>([]);

  const AccordionLabel = ({ value }) => {
    return (
      <Group wrap='nowrap'>
        <div className='accordion-item-title'>{value}</div>
      </Group>
    );
  };

  const AccordionDescp = ({ description }) => {
    return (
      <Group wrap='nowrap'>
        <div className='accordion-item-title'>{description}</div>
      </Group>
    );
  };

  const items = groceries.map((item) => (
    <Accordion.Item
      key={item.value}
      value={item.value}
      bg={'rgba(255, 255, 255, 0.03)'}
      className={`accordion-item`}
    >
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <AccordionDescp {...item} />
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Container fluid p={0}>
      <Carousel
        ref={carouselRef}
        classNames={{ indicator: 'indicator', indicators: 'indicators' }}
        emblaOptions={{ loop: true, align: 'start' }}
        // withIndicators
        height={'calc((800 / 1440) * 100vw)'}
        slideSize='100%'
        // controlSize={50}
        withControls={false}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={() => autoplay.current.play()}
      >
        {' '}
        {videos.map((src, index) => (
          <Carousel.Slide key={index}>
            <Box className='carousel-box'>
              <div className='hero-sec-1'>
                {/* <div
                  className={'sm-txt-1'}
                  style={{ textTransform: 'uppercase' }}
                >
                  Highlighted feature
                </div> */}

                <Box className={'big-txt-1'}>
                  Trusted advisor to deliver
                  <br />
                  Risk & Regulatory
                  <br />
                  Compliance Solutions
                </Box>
                <Box
                  className='sm-txt-2'
                  style={{ marginTop: 'calc((32 / 1440) * 100vw)' }}
                >
                  Helping you design and implement success!
                </Box>

                <Box className='btn-cont'>
                  <CButton title='Get a demo' color={colors.primaryLite} />
                  <CButton
                    title='Contact us'
                    color={colors.white}
                    variant='outline'
                    extraStyles={{
                      // color: '#fff',
                      borderColor: '#fff',
                    }}
                  />
                </Box>
                <div className='btm-tabs-cont'>
                  <div
                    className='btm-tab-cont-1'
                    onMouseEnter={() => settabHover(true)}
                    onMouseLeave={() => settabHover(false)}
                  >
                    <div className='btm-tab-img-cont'>
                      <img
                        src={tabHover ? LegalDocW : LegalDoc}
                        className='btm-tab-img'
                      />
                    </div>
                    <div className='btm-tab-para-cont'>
                      <div
                        className='btm-tab-title'
                        style={{ lineHeight: '120%' }}
                      >
                        Open Compliance Suite
                      </div>
                      <div
                        className={'sm-txt-1'}
                        style={{ lineHeight: 'calc((25.6 / 1440) * 100vw)' }}
                      >
                        Galley of type and scrambled it to make a type specimen
                        book.
                      </div>
                      <div
                        className={'sm-txt-1'}
                        style={{ lineHeight: '150%' }}
                      >
                        Know more{'>'}
                      </div>
                    </div>
                  </div>
                  <div
                    className='btm-tab-cont-2'
                    onMouseEnter={() => settabHover2(true)}
                    onMouseLeave={() => settabHover2(false)}
                  >
                    <div className='btm-tab-img-cont'>
                      <img
                        src={tabHover2 ? TechConsultW : TechConsult}
                        className='btm-tab-img'
                      />
                    </div>
                    <div className='btm-tab-para-cont'>
                      <div
                        className='btm-tab-title'
                        style={{ lineHeight: '120%' }}
                      >
                        Technology Consulting
                      </div>
                      <div
                        className={'sm-txt-1'}
                        style={{ lineHeight: 'calc((25.6 / 1440) * 100vw)' }}
                      >
                        Galley of type and scrambled it to make a type specimen
                        book.
                      </div>
                      <div
                        className={'sm-txt-1'}
                        style={{ lineHeight: '150%' }}
                      >
                        Know more{'>'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="video-wrapper"> */}

              <video
                muted
                playsInline
                autoPlay={true}
                loop
                src={src}
                width='100%'
                height='100%'
                className='video'
              />
              <div className='video-overlay'></div>
              {/* </div> */}
            </Box>
          </Carousel.Slide>
        ))}
      </Carousel>

      <div style={{ backgroundColor: '#ffffff', height: '40vh' }} />

      <Box className='footer'>
        <Box className='accordion-cont'>
          <Box className='accordion-title'>Frequently asked questions</Box>

          <Accordion
            multiple
            value={value}
            w={'100%'}
            defaultValue={['Apples']}
            variant='filled'
            onChange={setValue}
            classNames={{
              chevron: 'chevron',
              // item:'custom-item'
            }}
            chevron={<IoChevronDown className={'icon'} />}
          >
            {items}
          </Accordion>
        </Box>
        <Box className='newslater-cont'>
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
        </Box>

        <Grid w={'100%'} className='footer-menu-cont'>
          <Grid.Col span={6}>
            <img src={FooterLogo} className='footer-logo' />
          </Grid.Col>
          <Grid.Col span={2}>
            <Box className='footer-menu-head'>Services</Box>
            <Box className='footer-menu-txt'>Features</Box>
            <Box className='footer-menu-txt'>How it works</Box>
            <Box className='footer-menu-txt'>Security</Box>
            <Box className='footer-menu-txt'>Testimonial</Box>
          </Grid.Col>
          <Grid.Col span={2}>
            <Box className='footer-menu-head'>Industries</Box>
            <Box className='footer-menu-txt'>Features</Box>
            <Box className='footer-menu-txt'>How it works</Box>
            <Box className='footer-menu-txt'>Security</Box>
            <Box className='footer-menu-txt'>Testimonial</Box>
          </Grid.Col>

          <Grid.Col span={2}>
            <Box className='footer-menu-head'>Other pages</Box>
            <Box className='footer-menu-txt'>About us</Box>
            <Box className='footer-menu-txt'>Privacy policy</Box>
            <Box className='footer-menu-txt'>Terms & conditions</Box>
            <Box className='footer-menu-txt'>404</Box>
          </Grid.Col>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
