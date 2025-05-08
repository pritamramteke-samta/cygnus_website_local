import { Box, Container } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useEffect, useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import './home.scss';
import CButton from '../../components/buttons/CButton';

const Home = () => {
  const videos = ['/videos/vid1.mp4', '/videos/vid2.mp4', '/videos/vid3.mp4'];

  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const carouselRef = useRef(null);

  function scaleFromFigma(designValue, designWidth = 1440) {
    const screenWidth = window.innerWidth;
    return (designValue / designWidth) * screenWidth;
  }
  useEffect(() => {
    console.log('pxToRem', scaleFromFigma(64));
  }, []);

  return (
    <Container fluid p={0}>
      <Carousel
        ref={carouselRef}
        classNames={{ indicator: 'indicator', indicators: 'indicators' }}
        emblaOptions={{ loop: true, align: 'start' }}
        // withIndicators
        height={800}
        slideSize='100%'
        controlSize={50}
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
                <div
                  className={'sm-txt-1'}
                  style={{ textTransform: 'uppercase' }}
                >
                  Highlighted feature
                </div>

                <div className={'big-txt-1'}>
                  Trusted advisor to deliver
                  <br />
                  Risk & Regulatory
                  <br />
                  Compliance Solutions
                </div>
                <div className='sm-txt-2' style={{ marginTop: 32 }}>
                  Helping you design and implement success!
                </div>

                <div className='btn-cont'>
                  <CButton
                    title='Get a demo'
                    color='var(--mantine-color-primaryLite-0)'
                  />
                  <CButton
                    title='Contact us'
                    color='var(--mantine-color-white-0)'
                    variant='outline'
                  />
                </div>
                <div className='btm-tabs-cont'>
                  <div className='btm-tab-cont'>
                    <div
                      className='btm-tab-title'
                      style={{ lineHeight: '120%' }}
                    >
                      Open Compliance Suite
                    </div>
                    <div
                      className={'sm-txt-1'}
                      style={{ lineHeight: '25.6px' }}
                    >
                      Galley of type and scrambled it to make a type specimen
                      book.
                    </div>
                    <div className={'sm-txt-1'} style={{ lineHeight: '150%' }}>
                      Know more{'>'}
                    </div>
                  </div>
                  <div className='btm-tab-cont'>
                    <div
                      className='btm-tab-title'
                      style={{ lineHeight: '120%' }}
                    >
                      Open Compliance Suite
                    </div>
                    <div
                      className={'sm-txt-1'}
                      style={{ lineHeight: '25.6px' }}
                    >
                      Galley of type and scrambled it to make a type specimen
                      book.
                    </div>
                    <div className={'sm-txt-1'} style={{ lineHeight: '150%' }}>
                      Know more{'>'}
                    </div>
                  </div>
                </div>
              </div>

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
            </Box>
          </Carousel.Slide>
        ))}
      </Carousel>

      {/* <div
        style={{ backgroundColor: 'red', height: '40vh', marginBottom: 20 }}
      /> */}
    </Container>
  );
};

export default Home;
