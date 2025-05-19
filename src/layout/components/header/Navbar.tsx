import { Box, Group } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import { DownIc, Logo } from '../../../assets';
import './navbar.scss';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import CButton from '@components/buttons/CButton';

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
        className={` ${showNav ? 'nav-bar' : 'nav-bar-on-scroll'}`}
      >
        <img src={Logo} alt='Logo' className='nav-logo' />

        <Group gap={'calc((16 / 1440) * 100vw)'} className='nav-link-cont'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? 'nav-link-active' : 'nav-link'
            }
          >
            Home
          </NavLink>
          {/* <NavLink
            to='/aboutus'
            className={({ isActive }) =>
              isActive ? 'nav-link-active' : 'nav-link'
            }
          >
            About Us
          </NavLink> */}

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
            to='/industries'
            className={({ isActive }) =>
              isActive ? 'nav-link-active' : 'nav-link'
            }
          >
            <Group gap={'calc((8 / 1440) * 100vw)'}>
              Industries <img className='nav-btm-arr' src={DownIc} alt='Logo' />
            </Group>
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
            to='/resources'
            className={({ isActive }) =>
              isActive ? 'nav-link-active' : 'nav-link'
            }
          >
            <Group gap={'calc((8 / 1440) * 100vw)'}>
              Resources Hub{' '}
              <img className='nav-btm-arr' src={DownIc} alt='Logo' />
            </Group>
          </NavLink>

          <NavLink
            to='/career'
            className={({ isActive }) =>
              isActive ? 'nav-link-active' : 'nav-link'
            }
          >
            Career
          </NavLink>
        </Group>
        <Group gap={'calc((16 / 1440) * 100vw)'}>
          <CButton
            color={'var(--mantine-color-secondary-0)'}
            title='Contact us'
          />
        </Group>
      </Box>
    </>
  );
};

export default memo(NavBar);
