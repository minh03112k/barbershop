import CustomInputBase from '@/components/CustomComponentMUI/CustomInputBase';
import CustomTextField from '@/components/CustomComponentMUI/CustomTextField';
import Layout from '@/components/Layout';
import { Box, FormLabel, Grid, TextField, Typography } from '@mui/material';
import { width } from '@mui/system';

export default function Booking() {
  return (
    <Layout>
      <Box className="container my-5 w-100">
        <Grid container spacing={2} sx={{ width: '100%' }}>
          <Grid item xs={6}>
            <TextField variant="standard" sx={{borderBottomColor: '#F5F5F5'}}  />
          </Grid>
          <Grid item xs={6}>
            <Typography>Email</Typography>
            <CustomTextField label="Custom CSS" id="custom-css-outlined-input" />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
