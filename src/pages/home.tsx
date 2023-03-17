import React from 'react';
import { Box } from '@mui/system';
import HighLightProduct from '@/components/HighlightProduct';
import Typography from '@mui/material/Typography';
import HighlightGallery from '@/components/HighlightGallery';
import Layout from '@/components/Layout';

export default function Home() {
 
  return (
    <Layout>
      <Box className='mb-5'>
        <HighlightGallery />
        <HighLightProduct/>
        <Typography variant='h3' align='center' className='my-5'>Available Today</Typography>
      </Box>
    </Layout>
  );
}
