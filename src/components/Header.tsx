import { colors, InputBase, TextField } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';

const Header = () => {
  const router = useRouter();

  return (
    <Box  id="header" className={`${styles.header} bg-dark px-5`}>
      <Box className="d-flex align-items-center justify-content-between">
        <Box>Brand</Box>
        <ul className="d-flex flex-row align-items-center m-0" style={{listStyleType: 'none'}}>
          {/* Todo: Custom Linl Component by Higher Order Function */}
          <li className=''>
            <Link className={router.asPath.includes('home') ? 'text-danger text-20' : 'text-20'} href={'#'}>Home</Link>
          </li>
          <li className='mx-3'>
            <Link className={router.asPath.includes('about') ? 'text-danger text-20' : 'text-20'} href={'#'}>About</Link>
          </li>
          <li className=''>
            <Link className={router.asPath.includes('Galleries') ? 'text-danger text-20' : 'text-20'} href={'#'}>Galleries</Link>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default Header;
