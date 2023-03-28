import CustomTextField from '@/components/CustomComponentMUI/CustomTextField';
import Layout from '@/components/Layout';
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { bookingHours } from '@/utils/mock';
import React from 'react';
import BookingDate from '@/components/BookingDate';

export default function Booking() {
  const [hour, setHour] = React.useState('');
  const [bookingDate, setBookingDate] = React.useState('');

  const handleChangeBookingHour = (event: { target: { value: string } }) => {
    setHour(event.target.value);
  };
  const handleChangeBookingDate = (event: { target: { value: string } }) => {
    setBookingDate(event.target.value);
  };

  return (
    <Layout>
      <Box
        className="container my-5 w-100"
        sx={{ minHeight: '100svh' }}
      >
        <Grid container spacing={5} sx={{ width: '100%' }}>
          <Grid item xs={12} sm={6}>
            <CustomTextField
              variant="standard"
              label="Email"
              className="custom-text-field"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTextField
              variant="standard"
              label="Fullname"
              className="custom-text-field"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTextField
              variant="standard"
              label="Phone Number"
              className="custom-text-field"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTextField
              variant="standard"
              label="Address"
              className="custom-text-field"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
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
                onChange={handleChangeBookingHour}
                sx={{
                  '& fieldset': {
                    borderColor: 'rgba(255,255,255,.14)',
                  },
                  '&:hover fieldset': {
                    borderColor: '#F5F5F5 !important',
                  },
                  '& .MuiSvgIcon-root': {
                    color: '#F5F5F5',
                  },
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
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <BookingDate />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel
                sx={{ color: '#F5F5F5' }}
                id="demo-simple-select-label-date"
              >
                Booking Date
              </InputLabel>
              <Select
                labelId="demo-simple-select-label-date"
                id="demo-simple-select-date"
                value={bookingDate}
                label="Booking Date"
                onChange={handleChangeBookingDate}
                sx={{
                  '& fieldset': {
                    borderColor: 'rgba(255,255,255,.14)',
                  },
                  '&:hover fieldset': {
                    borderColor: '#F5F5F5 !important',
                  },
                  '& .MuiSvgIcon-root': {
                    color: '#F5F5F5',
                  },
                }}
                inputProps={{
                  sx: {
                    color: '#F5F5F5',
                  },
                }}
              >
                <MenuItem value={'1'}>location1</MenuItem>
                <MenuItem value={'2'}>location2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant="contained">
              Booking
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
