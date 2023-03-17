import { colors, InputBase, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';

const Header = () => {
  const router = useRouter();

  return (
    <Box className={`${styles.header} bg-dark px-5`}>
      <Box className="d-flex align-items-center justify-content-between container-fluid">
        <Typography>Brand</Typography>
        <ul className="d-flex flex-row align-items-center m-0" style={{listStyleType: 'none'}}>
          {/* Todo: Custom Link Component by Higher Order Function */}
          <li className=''>
            <Link  href={'#'}>
              <Typography className={router.asPath.includes('home') ? 'text-danger text-20' : 'text-20'}>Home</Typography>
            </Link>
          </li>
          <li className='mx-3'>
            <Link className={router.asPath.includes('about') ? 'text-danger text-20' : 'text-20'} href={'#'}>
              <Typography>About</Typography>
            </Link>
          </li>
          <li className=''>
            <Link className={router.asPath.includes('Galleries') ? 'text-danger text-20' : 'text-20'} href={'#'}>
              <Typography>Galleries</Typography>
            </Link>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default Header;
