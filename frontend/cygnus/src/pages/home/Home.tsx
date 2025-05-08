import { Box, Container } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import './home.scss';
import CButton from '../../components/buttons/CButton';

const Home = () => {
  const videos = ['/videos/vid1.mp4', '/videos/vid2.mp4', '/videos/vid3.mp4'];

  const autoplay = useRef(Autoplay({ delay: 3000 }));
  const carouselRef = useRef(null);

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
                  <CButton
                    title='Get a demo'
                    color='var(--mantine-color-primaryLite-0)'
                  />
                  <CButton
                    title='Contact us'
                    color='var(--mantine-color-white-0)'
                    variant='outline'
                    extraStyles={{
                      color: '#fff',
                      borderColor: '#fff',
                    }}
                  />
                </Box>
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
                      style={{ lineHeight: 'calc((25.6 / 1440) * 100vw)' }}
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
                      Technology Consulting
                    </div>
                    <div
                      className={'sm-txt-1'}
                      style={{ lineHeight: 'calc((25.6 / 1440) * 100vw)' }}
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

      <div
        style={{ backgroundColor: '#ffffff', height: '40vh', marginBottom: 20 }}
      />
    </Container>
  );
};

export default Home;
