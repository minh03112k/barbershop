import CustomInputBase from "@/components/CustomInputBase";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  FormControlLabel,
  InputLabel,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import style from "../styles/Login.module.css";

const Login = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [showPassword, setShowPassword] = useState(false);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const handleEmailChange = (event: string) => {
    setEmail(event)
  };

  const handlePasswordChange = (event: string) => {
    setPassword(event)
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  return (
    <Box className={style.loginPage}>
      <Box className="h-100 d-flex align-items-center justify-content-center flex-column">
        <Box className="p-2">
          <h2 className="text-center mx-5 mb-5 font-poppin-bold">
            Log in to your design account
          </h2>
          <Box
            className={`${style.customBox} w-100 rounded-5 bg-light border border-dark text-center py-2`}>
            <span className="text-22 font-avenir">Continue with Facebook</span>
          </Box>
          <Box
            className={`${style.customBox} w-100 rounded-5 bg-light border border-dark text-center py-2 my-3`}>
            <span className="text-22 font-avenir">Continue with Google</span>
          </Box>
          <Box
            className={`${style.customBox} w-100 rounded-5 bg-light border border-dark text-center py-2`}>
            <span className="text-22 font-avenir">Continue with Apple</span>
          </Box>
          <Box className={`${style.separator} my-4`}>
            <div className="font-avenir m-0">OR</div>
          </Box>
          <Box>
            <InputLabel htmlFor="email-input">Email address</InputLabel>
            <CustomInputBase type="email" className="w-100" onChange={(event) => handleEmailChange(event.target.value)} />
          </Box>
          <Box className="my-3">
            <Box className="d-flex justify-content-between align-items-center mb-2">
              <InputLabel htmlFor="password-input">Your password</InputLabel>
              <InputLabel className="me-2" htmlFor="password-input" onClick={toggleShowPassword}>
                <Button>
                    {showPassword ? "Hide" : "Show"} Password
                </Button>
              </InputLabel>
            </Box>
            <CustomInputBase type={showPassword ? "text" : "password"} className="w-100"  onChange={(event) => handlePasswordChange(event.target.value)}/>
          </Box>
          <p className="text-end">
            <Link href="#">Forget your password</Link>
          </p>
          <FormControlLabel
            className="w-100"
            control={<Checkbox defaultChecked />}
            label="Keep me signed in until I sign out"
          />
          <Button disabled={!email || !password} variant="contained" className="rounded-5 w-100 my-3 py-2">
            Log in
          </Button>
          <div className={`${style.separator} my-4`} />
          <Link href={"#"}>
            <h4 className="font-poppins fw-normal text-center">
              Don’t have an account?
            </h4>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
