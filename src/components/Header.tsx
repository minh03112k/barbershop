import { Box, Button, Drawer, Paper, SwipeableDrawer, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';
import { BiMenu } from 'react-icons/bi';
import { useState } from 'react';
import CustomBox from './CustomComponentMUI/CustomBox';

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open: any) => (event: any) => {
    if (event?.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };
  return (
    <Box id='header' className={`${styles.header} bg-dark px-5`}>
      <Box className='d-flex align-items-center justify-content-between container'>
        <Box>Brand</Box>
        <ul className={`${styles.headerMenu} d-xl-flex d-none`}>
          {/* Todo: Custom Linl Component by Higher Order Function */}
          <li>
            <Link className={`${router.asPath.includes('home') ? 'text-text-purple' : ''} text-20 ${styles.headerItem}`} href={'home'}>
              Home
            </Link>
          </li>
          <li>
            <span className={`${router.asPath.includes('booking') ? 'text-text-purple' : ''} text-20 ${styles.headerItem}`}>
              Booking
            </span>
          </li>
          <li>
            <Link className={`${router.asPath.includes('shop') ? 'text-text-purple' : ''} text-20 ${styles.headerItem}`} href={'shop'}>
              Shop
            </Link>
          </li>
          <li>
            <Link className={`${router.asPath.includes('gallery') ? 'text-text-purple' : ''} text-20 ${styles.headerItem}`} href={'gallery'}>
              Gallery
            </Link>
          </li>
          <li>
            <Link className={`${router.asPath.includes('about') ? 'text-text-purple' : ''} text-20 ${styles.headerItem}`} href={'about'}>
              About
            </Link>
          </li>
          <li>
            <Button variant='contained'>
              <Typography>
                <Link href={'login'}>Login</Link>
              </Typography>
            </Button>
          </li>
          <li>
            <Button variant='outlined'>
              <Typography>Sign up</Typography>
            </Button>
          </li>
        </ul>
        <Box className='position-relative'>
          <BiMenu />
          {/* <Paper sx={{position: 'absolute', top: '30px'}}>
            <ul>
              <li>Home</li>
            </ul>
          </Paper> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
