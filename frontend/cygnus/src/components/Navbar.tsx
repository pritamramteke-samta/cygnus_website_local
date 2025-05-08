import { Box, Group, Image } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import { DownIc, Logo } from '../assets';
import CButton from './buttons/CButton';
import './Navbar.css';
import { useCallback, useEffect, useRef, useState } from 'react';

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
      <div style={{ paddingTop: `${navHeight}px` }} />
      <Box
        ref={navRef}
        className='nav-bar'
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 999,
          transition: 'transform 0.3s ease',
          transform: showNav ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        <Image
          src={Logo}
          alt='Logo'
          style={{
            width: 157,
            height: 40,
          }}
        />

        <Group gap={16} className='nav-link-cont'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? 'nav-link-active' : 'nav-link'
            }
          >
            Home
          </NavLink>
          <NavLink
            to='/products'
            className={({ isActive }) =>
              isActive ? 'nav-link-active' : 'nav-link'
            }
          >
            <Group gap={8}>
              Products <img width={16} height={16} src={DownIc} alt='Logo' />
            </Group>
          </NavLink>
          <NavLink
            to='/services'
            className={({ isActive }) =>
              isActive ? 'nav-link-active' : 'nav-link'
            }
          >
            <Group gap={8}>
              Services <img width={16} height={16} src={DownIc} alt='Logo' />
            </Group>
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
            to='/resources'
            className={({ isActive }) =>
              isActive ? 'nav-link-active' : 'nav-link'
            }
          >
            Resources
          </NavLink>
        </Group>
        <Group>
          <CButton
            extraStyles={{
              borderColor: 'var(--mantine-color-greyLite-0)',
            }}
            color={'var(--mantine-color-primaryLite-0)'}
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
