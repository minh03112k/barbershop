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
          <li className="">
            <Link className={router.asPath.includes('home') ? 'text-danger text-20' : 'text-20'} href={'#'}>
              Home
            </Link>
          </li>
          <li className="">
            <Link className={router.asPath.includes('book') ? 'text-danger text-20' : 'text-20'} href={'#'}>
              Book
            </Link>
          </li>
          <li className="">
            <Link className={router.asPath.includes('shop') ? 'text-danger text-20' : 'text-20'} href={'#'}>
              Shop
            </Link>
          </li>
          <li className="">
            <Link className={router.asPath.includes('gallery') ? 'text-danger text-20' : 'text-20'} href={'#'}>
              Gallery
            </Link>
          </li>
          <li className="">
            <Link className={router.asPath.includes('about') ? 'text-danger text-20' : 'text-20'} href={'#'}>
              About
            </Link>
          </li>
          <li className="">
            <Button variant="contained">
              <Typography>Login</Typography>
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
