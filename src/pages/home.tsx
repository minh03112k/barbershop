import React from 'react';
import { Box } from '@mui/system';
import HighLightProduct from '@/components/HighlightProduct';
import HighlightGallery from '@/components/HighlightGallery';
import Layout from '@/components/Layout';
import AvaiableToday from '@/components/AvaiableToday';

export default function HomePage() {
 
  return (
    <Layout>
      <Box className=''>
        <HighlightGallery />
        <HighLightProduct/>
        <AvaiableToday />
      </Box>
    </Layout>
  );
}
