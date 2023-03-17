import React from 'react';
import { Box } from '@mui/system';
import HighLightProduct from '@/components/HighlightProduct';
import Typography from '@mui/material/Typography';
import HighlightGallery from '@/components/HighlightGallery';

export default function Home() {
 
  return (
    <Box>
      <HighlightGallery />
      <HighLightProduct/>
      <Typography variant='h3' align='center' className='my-4'>Available Today</Typography>
    </Box>
  );
}
