import { InputBase, TextField } from '@mui/material';
import { Box } from '@mui/system';
import styles from '../styles/Header.module.css';
import SearchBar from './SearchBar';
const Header = () => {
  return (
    <Box className="bg-light">
      <Box className={`${styles.header} container d-flex align-items-center`}>
        <Box>Brand</Box>
        <SearchBar />
      </Box>
    </Box>
  );
};

export default Header;
