import { Box, Text, rem, Container } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import styles from './ServicesCards.module.scss';
import ServiceCard from '../../assets/images/ServicesCard.png';

const services = [
  {
    title: 'Effective Techniques for Model Validations',
    image: ServiceCard,
    bg: 'linear-gradient(180deg, #00472F 0%, #00472F 100%)',
  },
  {
    title: 'Innovative Strategies for Tech Implementations',
    image: ServiceCard,
    bg: 'linear-gradient(180deg, #886B41 0%,rgb(107, 82, 48) 100%)',
  },
  {
    title: 'Advanced Techniques for Model Tuning',
    image: ServiceCard,
    bg: 'linear-gradient(180deg, #C66C2E 0%,rgb(171, 65, 0) 100%)',
  },
  {
    title: 'Advanced Techniques for Model Tuning',
    image: ServiceCard,
    bg: 'linear-gradient(180deg, #d46a2b 0%, #c55e1f 100%)',
  },
];

function ServicesCards() {
  return (
    <Box className={styles.wrapper}>
      <Text
        size='18px'
        c='#08A965'
        fw={600}
        mb={rem(4)}
        ml={rem(65)}
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        SERVICES
      </Text>
      <Text
        fw={600}
        size='54px'
        ml={rem(65)}
        mt={rem(20)}
        mb={rem(50)}
        style={{ fontFamily: 'Manrope, sans-serif' }}
      >
        Why choose Cygnus for <br /> effortless managements?
      </Text>
      <Container size='95%' px='md'>
        <Carousel
          withIndicators
          slideSize='33.333333%'
          slideGap='md'
          // align="start"
          height='auto'
          emblaOptions={{ loop: true }}
          styles={{
            control: { display: 'none' }, // Hide arrows
          }}
        >
          {services.map((service, index) => (
            <Carousel.Slide key={index}>
              <Box className={styles.card} style={{ background: service.bg }}>
                <Box className={styles.cardTitle}>{service.title}</Box>
                <Box className={styles.imageWrapper}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className={styles.cardImage}
                  />
                  <Box
                    className={styles.overlay}
                    style={{ background: service.bg }}
                  >
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English.
                    </p>
                  </Box>
                </Box>
              </Box>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
}

export default ServicesCards;
