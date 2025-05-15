import { Accordion, Box, Container, Grid, Group } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useRef, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import './home.scss';
import CButton from '../../components/buttons/CButton';
import {
  FooterLogo,
  LegalDoc,
  LegalDocW,
  TechConsult,
  TechConsultW,
} from '../../assets';
import { IoChevronDown } from 'react-icons/io5';
import LogoScroller from '../../components/LogoScroller';
import TrustSection from '../../layout/TrustSection';
import ServicesCards from '../../components/Cards/ServicesCards';
import StackedCards from '../../components/Cards/StackedCards';
import StatsSection from '../../layout/StatsSection';
import TestimonialsSection from '../../layout/TestimonialsSection';
import BlogSection from '../../layout/BlogCard';

interface AccordionProps {
  value: string;
  description: string;
}

const questions = [
  {
    value: 'What is CashEase?',
    description:
      'CashEase is an e-wallet app that allows you to store money, make payments, and perform other financial transactions electronically through your mobile device.',
  },
  {
    value: 'How do I download and install the CashEase app?',
    description:
      'To download and install the CashEase app, visit the Google Play Store for Android devices or the Apple App Store for iOS devices. Search for "CashEase" in the respective store, then tap "Install" or "Get" to download the app. Once installed, open the app and follow the on-screen instructions to set up your account.',
  },
  {
    value: 'Can I transfer money from CashEase to my bank account?',
    description:
      "Yes, CashEase allows users to transfer funds from their e-wallet to a linked bank account. To do this, open the CashEase app, navigate to the transfer or withdrawal section, enter the amount you wish to transfer, select your linked bank account, and confirm the transaction. Please note that transfer times may vary depending on your bank's processing times.",
  },
  {
    value: 'Is CashEase compatible with all types of devices?',
    description:
      "CashEase is compatible with most modern smartphones and tablets running up-to-date operating systems. For Android devices, ensure you have Android 8.1 or higher, and for Apple devices, iOS 14 or higher is recommended. It's advisable to keep your device's operating system updated to the latest version for optimal performance and security.",
  },
  {
    value: 'How can I contact CashEase customer support if I encounter issues?',
    description:
      'If you encounter any issues with the CashEase app, you can contact their customer support team via email at support@cashe.co.in or by calling their customer care number at +91 8828553333. They are available to assist you with any inquiries or problems you may have.',
  },
];

const Home = () => {
  const videos = ['/videos/vid1.mp4', '/videos/vid2.mp4', '/videos/vid3.mp4'];

  const carouselData = [
    {
      title:
        'Regulators are now questioning|||what’s behind your transaction monitoring logic.',
      subtitle:
        'Model transparency and validation aren’t optional, they’re expected.',
      video: 'videos/vid1.mp4',
    },
    {
      title:
        'Tech-enabled compliance|||doesn’t just speed up reviews, it strengthens them.',
      subtitle: 'Centralized, traceable decisions reduce risk and scrutiny.',
      video: '/videos/vid2.mp4',
    },
    {
      title: 'KYC is no longer static,|||it must evolve with your|||customers.',
      subtitle:
        'Stale profiles and outdated risk ratings are red flags waiting to be exposed.',
      video: '/videos/vid3.mp4',
    },
  ];

  const autoplay = useRef(Autoplay({ delay: 3000 }));
  const carouselRef = useRef(null);
  const [tabHover, settabHover] = useState(false);
  const [tabHover2, settabHover2] = useState(false);
  const [value, setValue] = useState<string[]>([questions[0].value]);
  const [activeIndex, setactiveIndex] = useState(0);

  const AccordionLabel = ({ value }: AccordionProps) => {
    return (
      <Group wrap='nowrap'>
        <div className='accordion-item-title'>{value}</div>
      </Group>
    );
  };

  const AccordionDescp = ({ description }: AccordionProps) => {
    return (
      <Group wrap='nowrap'>
        <div className='accordion-item-title'>{description}</div>
      </Group>
    );
  };

  const items = questions.map((item) => (
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
        onSlideChange={(slideIndx) => {
          setactiveIndex(slideIndx);
        }}
        emblaOptions={{ loop: true, align: 'start' }}
        height={'calc((800 / 1440) * 100vw)'}
        slideSize='100%'
        withControls={false}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={() => autoplay.current.play()}
      >
        {' '}
        {carouselData.map((slide, index) => (
          <Carousel.Slide key={index}>
            <Box className='carousel-box'>
              <Box className='hero-sec-1'>
                {/* <div
                  className={'sm-txt-1'}
                  style={{ textTransform: 'uppercase' }}
                >
                  Highlighted feature
                </div> */}

                <Box className={'big-txt-1'}>
                  {/* {slide.title} */}
                  {slide.title.split('|||').map((line, idx) => (
                    <Box key={idx}>{line}</Box>
                  ))}
                </Box>
                <Box
                  className='sm-txt-2'
                  style={{ marginTop: 'calc((32 / 1440) * 100vw)' }}
                >
                  {slide.subtitle}
                </Box>

                <Box className='btn-cont'>
                  <CButton
                    title='Get a demo'
                    color={'var(--mantine-color-primaryLite-0)'}
                  />
                  <CButton
                    title='Contact us'
                    color={'var(--mantine-color-white-0)'}
                    variant='outline'
                    extraStyles={{
                      // color: '#fff',
                      borderColor: '#fff',
                    }}
                  />
                </Box>
                <Box className='btm-tabs-cont'>
                  <Box
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
                  </Box>
                  <Box
                    className='btm-tab-cont-2'
                    onMouseEnter={() => settabHover2(true)}
                    onMouseLeave={() => settabHover2(false)}
                  >
                    <Box className='btm-tab-img-cont'>
                      <img
                        src={tabHover2 ? TechConsultW : TechConsult}
                        className='btm-tab-img'
                      />
                    </Box>
                    <Box className='btm-tab-para-cont'>
                      <Box
                        className='btm-tab-title'
                        style={{ lineHeight: '120%' }}
                      >
                        Technology Consulting
                      </Box>
                      <Box
                        className={'sm-txt-1'}
                        style={{ lineHeight: 'calc((25.6 / 1440) * 100vw)' }}
                      >
                        Galley of type and scrambled it to make a type specimen
                        book.
                      </Box>
                      <Box
                        className={'sm-txt-1'}
                        style={{ lineHeight: '150%' }}
                      >
                        Know more{'>'}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <video
                muted
                playsInline
                autoPlay={true}
                loop
                src={slide.video}
                width='100%'
                height='100%'
                className='video'
              />
              <Box className='video-overlay'></Box>
            </Box>
          </Carousel.Slide>
        ))}
      </Carousel>

      <Box className='indicators'>
        {videos.map((_, index) => {
          return (
            <Box
              className={`${activeIndex === index ? 'indicator-active' : 'indicator'}`}
              key={index}
            />
          );
        })}
      </Box>
      {/* <div style={{ backgroundColor: '#ffffff', height: '40vh' }} /> */}
      <LogoScroller />
      <TrustSection />
      <ServicesCards />
      <StackedCards />

      <StatsSection />
      <TestimonialsSection />
      <BlogSection />

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
            <Box className='footer-logo-para'>
              Monks Pay offers secure, seamless, and
              <br />
              fee-free payments for effortless global
              <br /> transactions.
            </Box>
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

        <Box className='footer-br' />
        <Box className='footer-end-cont'>
          <Box className='footer-end-left-cont'>
            <Box className='footer-menu-txt'>Built in Framer</Box>
            <Box className='footer-menu-txt'>Terms and Conditions</Box>
          </Box>
          <Box className='footer-menu-txt'>
            2024 © Design Monks. All rights reserved.
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
