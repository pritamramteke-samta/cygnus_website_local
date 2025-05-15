import { motion } from 'framer-motion';
import styles from './LogoScroller.module.scss';
import Waverio from '../../assets/Svg/waverio.svg';
import { Box, Container } from '@mantine/core';
// import Waverio from "../../assets/Svg/Waverio";

const logos = [Waverio, Waverio, Waverio, Waverio, Waverio, Waverio];

const LogoScroller = () => {
  const repeated = [...logos, ...logos];

  return (
    <Container size='90%' px='md' className={styles.wrapper}>
      <Box>
        <Box className={styles.heading}>
          <h3 className={styles.headingText}>
            Trusted by more than 150 companies across the world
          </h3>
        </Box>

        <motion.div
          className={styles.track}
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: 'linear',
          }}
        >
          {repeated.map((logo, idx) => (
            <div className={styles.logoBox} key={idx}>
              <img src={logo} alt='client logo' className={styles.logo} />
            </div>
          ))}
        </motion.div>
      </Box>
    </Container>
  );
};

export default LogoScroller;
