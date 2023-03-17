import CustomInputBase from '@/components/CustomInputBase';
import { Box, Button, Card, Checkbox, FormControlLabel, InputLabel, Typography } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import style from '../styles/Login.module.css';
import Image from 'next/image';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event: string) => {
    setEmail(event);
  };

  const handlePasswordChange = (event: string) => {
    setPassword(event);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box className={style.loginPage}>
      <Box className="h-100 d-flex align-items-center justify-content-center flex-column">
        <Box className="p-2">
          <Typography variant='h2' className="text-center mx-5 mb-5 font-poppin-bold">Log in to your design account</Typography>
          <Box className={`${style.customBox} d-flex align-items-center justify-content-center w-100 rounded-5 bg-light border border-dark text-center py-2`}>
            <Image src={'/img/icons/facebook-icon.svg'} width={32} height={32} alt="google" />
            <Typography className="text-22 font-avenir ms-3">Continue with Facebook</Typography>
          </Box>
          <Box className={`${style.customBox} d-flex align-items-center justify-content-center w-100 rounded-5 bg-light border border-dark text-center py-2 my-3`}>
            <Image src={'/img/icons/google-icon.svg'} width={24} height={24} alt="google" />
            <Typography className="text-22 font-avenir ms-3">Continue with Google</Typography>
          </Box>
          <Box className={`${style.customBox} d-flex align-items-center justify-content-center w-100 rounded-5 bg-light border border-dark text-center py-2`}>
            <Image src={'/img/icons/apple-icon.svg'} width={32} height={32} alt="google" />
            <Typography className="text-22 font-avenir ms-3">Continue with Apple</Typography>
          </Box>
          <Box className={`${style.separator} my-4`}>
            <div className="font-avenir m-0">OR</div>
          </Box>
          <Box>
            <InputLabel htmlFor="email-input"><Typography>Email address</Typography></InputLabel>
            <CustomInputBase type="email" className="w-100" onChange={(event) => handleEmailChange(event.target.value)} />
          </Box>
          <Box className="my-3">
            <Box className="d-flex justify-content-between align-items-center mb-2">
              <InputLabel htmlFor="password-input">Your password</InputLabel>
              <InputLabel className="me-2" htmlFor="password-input" onClick={toggleShowPassword}>
                {showPassword ? (
                  <Image role="button" tabIndex={0} src="/img/icons/open-eye-icon.svg" width={24} height={24} alt="My Image" />
                ) : (
                  <Image role="button" tabIndex={0} src="/img/icons/close-eye-icon.svg" width={24} height={24} alt="My Image" />
                )}
              </InputLabel>
            </Box>
            <CustomInputBase type={showPassword ? 'text' : 'password'} className="w-100" onChange={(event) => handlePasswordChange(event.target.value)} />
          </Box>
          <p className="text-end">
            <Link href="#"><Typography>Forget your password</Typography></Link>
          </p>
          <FormControlLabel className="w-100" control={<Checkbox defaultChecked />} label="Keep me signed in until I sign out" />
          <Button disabled={!email || !password} variant="contained" className="rounded-5 w-100 my-3 py-2">
            <Typography>Log in</Typography>
          </Button>
          <div className={`${style.separator} my-4`} />
          <Link href={'#'}>
            <h4 className="font-poppins fw-normal text-center"><Typography>Don’t have an account?</Typography></h4>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
