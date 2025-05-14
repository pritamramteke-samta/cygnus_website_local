import { Box, Group } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import { DownIc, Logo } from '../assets';
import CButton from './buttons/CButton';
import './navbar.scss';
import { useCallback, useEffect, useRef, useState } from 'react';
import colors from '../constants/colors';

const NavBar = () => {
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);

  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > navHeight) {
      setShowNav(false); // Scroll down → hide navbar
    } else {
      setShowNav(true); // Scroll up → show navbar
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY, navHeight]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, lastScrollY]);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);

  return (
    <>
      {/* <div style={{ paddingTop: `calc((${navHeight} / 1440) * 100vw)` }} /> */}
      <Box
        ref={navRef}
        className='nav-bar'
        style={{
          transform: showNav ? 'translateY(0)' : 'translateY(-100%)',
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 999,
          transition: 'transform 0.3s ease',
        }}
      >
        <img
          src={Logo}
          alt='Logo'
          className='nav-logo'
          //         style={{
          //           width: 'calc((157 / 1440) * 100vw)',
          // height:  'calc((40 / 1440) * 100vw)'
          //         }}
        />

        <Group gap={'calc((16 / 1440) * 100vw)'} className='nav-link-cont'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? 'nav-link-active' : 'nav-link'
            }
          >
            Home
          </NavLink>
          <NavLink
            to='/aboutus'
            className={({ isActive }) =>
              isActive ? 'nav-link-active' : 'nav-link'
            }
          >
            About Us
          </NavLink>

          <NavLink
            to='/services'
            className={({ isActive }) =>
              isActive ? 'nav-link-active' : 'nav-link'
            }
          >
            <Group gap={'calc((8 / 1440) * 100vw)'}>
              Services <img className='nav-btm-arr' src={DownIc} alt='Logo' />
            </Group>
          </NavLink>
          <NavLink
            to='/products'
            className={({ isActive }) =>
              isActive ? 'nav-link-active' : 'nav-link'
            }
          >
            <Group gap={'calc((8 / 1440) * 100vw)'}>
              Products <img className='nav-btm-arr' src={DownIc} alt='Logo' />
            </Group>
          </NavLink>

          <NavLink
            to='/resources'
            className={({ isActive }) =>
              isActive ? 'nav-link-active' : 'nav-link'
            }
          >
            Resources
          </NavLink>
        </Group>
        <Group gap={'calc((16 / 1440) * 100vw)'}>
          <CButton
            extraStyles={{
              borderColor: 'var(--mantine-color-greyLite-0)',
            }}
            color={colors.primaryLite}
            title='Contact us'
            variant='outline'
          />

          <CButton title='Get a demo' />
        </Group>
      </Box>
    </>
  );
};

export default NavBar;
