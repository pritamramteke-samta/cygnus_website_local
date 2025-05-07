import { Box } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import './home.css';

const Home = () => {
  const videos = ['/videos/vid1.mp4', '/videos/vid2.mp4', '/videos/vid3.mp4'];

  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <div>
      Home
      <Carousel
        styles={{
          slide: {
            borderRadius: 0,
          },
        }}
        classNames={{ indicator: 'indicator', indicators: 'indicators' }}
        emblaOptions={{ loop: true, align: 'start' }}
        withIndicators
        height={800}
        slideSize='100%'
        controlSize={50}
        withControls={false}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={() => autoplay.current.play()}
      >
        {' '}
        {videos.map((src) => (
          <Carousel.Slide>
            <Box
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                //   justifyContent: 'center',
                alignItems: 'center',
                background: 'hsl(104, 84%, 52%)',
                position: 'relative',
              }}
            >
              {/* {index} */}
              <div
                style={{
                  position: 'absolute',
                  top: 183,
                  left: 100,
                }}
              >
                <div className={'smTxt1'}>Highlighted feature</div>
                <div className={'smTxt1'}>
                  Trusted advisor to deliver Risk & Regulatory Compliance
                  Solutions
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
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Carousel.Slide>
        ))}
      </Carousel>
      <div
        style={{ backgroundColor: 'red', height: '40vh', marginBottom: 20 }}
      />
      <div
        style={{ backgroundColor: 'red', height: '40vh', marginBottom: 20 }}
      />
      <div
        style={{ backgroundColor: 'red', height: '40vh', marginBottom: 20 }}
      />
    </div>
  );
};

export default Home;
