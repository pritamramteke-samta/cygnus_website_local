import { Box, Container } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useEffect, useRef, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import './home.scss';
import CButton from '../../components/buttons/CButton';
// import { LegalDoc, LegalDocW, TechConsult, TechConsultW } from '../../assets';

import LogoScroller from '../../components/LogoScroller';
// import TrustSection from '../../layout/TrustSection';
import ServicesCards from '../../components/Cards/ServicesCards';
import StackedCards from '../../components/Cards/StackedCards';
import StatsSection from '../../layout/StatsSection';
import TestimonialsSection from '../../layout/TestimonialsSection';
import BlogSection from '../../layout/BlogCard';
import { carouselData } from './data';
// import Stats from '@sections/stats/Stats';

const Home = () => {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const carouselRef = useRef(null);
  // const [tabHover, settabHover] = useState(false);
  // const [tabHover2, settabHover2] = useState(false);
  const [activeIndex, setactiveIndex] = useState(0);

  useEffect(() => {
    const autoplayInstance = autoplay.current;

    return () => {
      autoplayInstance?.stop();
    };
  }, []);

  return (
    <Container fluid p={0}>
      <Carousel
        ref={carouselRef}
        onSlideChange={(slideIndx) => {
          setactiveIndex(slideIndx);
        }}
        emblaOptions={{ loop: true, align: 'start' }}
        height={'calc((750 / 1440) * 100vw)'}
        slideSize='100%'
        withControls={false}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={() => {
          autoplay.current.reset();
          autoplay.current.play();
        }}
      >
        {' '}
        {carouselData.map((slide, index) => (
          <Carousel.Slide key={index}>
            <Box className='carousel-box'>
              <Box className='hero-sec-1'>
                <Box className={'big-txt-1'}>
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
                  {/* <CButton
                    title='Get a demo'
                    color={'var(--mantine-color-primaryLite-0)'}
                  /> */}
                  <CButton
                    title='Read more'
                    color={'var(--mantine-color-white-0)'}
                    variant='outline'
                    extraStyles={{
                      // color: '#fff',
                      borderColor: '#fff',
                    }}
                  />
                </Box>
                {/* <Box className='btm-tabs-cont'>
                  <Box
                    className='btm-tab-cont-1'
                    onMouseEnter={() => settabHover(true)}
                    onMouseLeave={() => settabHover(false)}
                  >
                    <Box className='btm-tab-img-cont'>
                      <img
                        src={tabHover ? LegalDocW : LegalDoc}
                        className='btm-tab-img'
                      />
                    </Box>
                    <Box className='btm-tab-para-cont'>
                      <Box
                        className='btm-tab-title'
                        style={{ lineHeight: '120%' }}
                      >
                        Open Compliance Suite
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
                </Box> */}
              </Box>

              <video
                muted
                playsInline
                autoPlay={true}
                loop
                width='100%'
                height='100%'
                src={slide.video}
                className='video'
              />
              <Box className='video-overlay'></Box>
            </Box>
          </Carousel.Slide>
        ))}
      </Carousel>
      <Box className='indicators'>
        {carouselData.map((_, index) => {
          return (
            <Box
              className={`${activeIndex === index ? 'indicator-active' : 'indicator'}`}
              key={index}
            />
          );
        })}
      </Box>

      <Box className='hero-bottom-cont'>
        <Box className='big-txt-2-center'>
          In a world of shifting regulations and rising complexity,
          <br />
          Cygnus Compliance is the calm you can trust
        </Box>
        <Box className='sm-txt-2-center'>
          We help financial entities enhance compliance, reduce risk, and
          achieve operational excellence by delivering end-to-end
          <br />
          regulatory consulting and technology services
        </Box>
      </Box>

      {/* <div style={{ backgroundColor: '#ffffff', height: '40vh' }} /> */}

      {/* <Stats/> */}

      <StatsSection />
      <StackedCards />
      <ServicesCards />
      <LogoScroller />
      {/* <TrustSection /> */}

      <TestimonialsSection />
      <BlogSection />
    </Container>
  );
};

export default Home;
