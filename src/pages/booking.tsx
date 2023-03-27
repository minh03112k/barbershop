import CustomInputBase from '@/components/CustomComponentMUI/CustomInputBase';
import CustomTextField from '@/components/CustomComponentMUI/CustomTextField';
import Layout from '@/components/Layout';
import {
  Box,
  FormControl,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { bookingHours } from '@/utils/mock';
import CustomSelect from '../components/CustomComponentMUI/CustomSelect';
import { useState } from 'react';
import React from 'react';
import CustomInputLabel from '@/components/CustomComponentMUI/CustomInputLabel';

export default function Booking() {
  const [hour, setHour] = React.useState('');
  const handleChange = (event: { target: { value: string } }) => {
    setHour(event.target.value);
  };

  return (
    <Layout>
      <Box className="container my-5 w-100">
        <Grid container spacing={4} sx={{ width: '100%' }}>
          <Grid item xs={6}>
            <CustomTextField
              variant="standard"
              label="Email"
              className="custom-text-field"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              variant="standard"
              label="Fullname"
              className="custom-text-field"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              variant="standard"
              label="Phone Number"
              className="custom-text-field"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              variant="standard"
              label="Address"
              className="custom-text-field"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            {/* <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Booking hour
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={hour}
                onChange={handleChange}
                className="custom-text-field"
                input={<OutlinedInput />}
              >
                <MenuItem value="" disabled>
                  Select an option
                </MenuItem>
                {bookingHours.map((item: any, index: number) => (
                  <MenuItem key={index} value={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl> */}
            <FormControl fullWidth>
              <InputLabel
                sx={{ color: '#F5F5F5' }}
                id="demo-simple-select-label"
              >
                Booking Hour
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={hour}
                label="Booking Hour"
                onChange={handleChange}
                sx={{
                  '& fieldset': {
                    borderColor: '#F5F5F5',
                  },
                  '&:hover fieldset': {
                    borderColor: '#F5F5F5 !important',
                  },
                  '& .MuiSvgIcon-root': {
                    color: '#F5F5F5',
                  },
                  // '&:hover .MuiSelect-root': {
                  //   borderColor: '#80bdff',
                  // },
                }}
                inputProps={{
                  sx: {
                    color: '#F5F5F5',
                  },
                }}
              >
                {bookingHours.map((item: any, index: number) => (
                  <MenuItem key={index} value={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
