import Layout from '@/components/Layout';
import { InputLabel, Input, FormHelperText } from '@mui/material';
import { FormControl } from 'react-bootstrap';

export default function Booking() {
  return (
    <Layout>
      <FormControl>
        {/* <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" /> */}
        {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
      </FormControl>
    </Layout>
  );
}
