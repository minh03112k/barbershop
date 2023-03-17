import { Button, colors, InputBase, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';

const Header = () => {
  const router = useRouter();

  return (
    <Box id="header" className={`${styles.header} bg-dark px-5`}>
      <Box className="d-flex align-items-center justify-content-between">
        <Box>Brand</Box>
        <ul className={`${styles.headerMenu}`}>
          {/* Todo: Custom Linl Component by Higher Order Function */}
          <li>
            <Link className={`${router.asPath.includes('home') ? 'text-danger' : ''} text-20 ${styles.headerItem}`} href={'home'}>
              Home
            </Link>
          </li>
          <li>
            <Link className={`${router.asPath.includes('booking') ? 'text-danger' : ''} text-20 ${styles.headerItem}`} href={'booking'}>
              Booking
            </Link>
          </li>
          <li>
            <Link className={`${router.asPath.includes('shop') ? 'text-danger' : ''} text-20 ${styles.headerItem}`} href={'shop'}>
              Shop
            </Link>
          </li>
          <li>
            <Link className={`${router.asPath.includes('gallery') ? 'text-danger' : ''} text-20 ${styles.headerItem}`} href={'gallery'}>
              Gallery
            </Link>
          </li>
          <li>
            <Link className={`${router.asPath.includes('about') ? 'text-danger' : ''} text-20 ${styles.headerItem}`} href={'about'}>
              About
            </Link>
          </li>
          <li>
            <Button variant="contained">
              <Typography>
                <Link href={'login'}>Login</Link>
              </Typography>
            </Button>
          </li>
          <li>
            <Button variant="outlined">
              <Typography>Sign up</Typography>
            </Button>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default Header;
