import React from 'react';
import { Box } from '@mui/system';
import HighLightProduct from '@/components/HighlightProduct';
import Typography from '@mui/material/Typography';
import HighlightGallery from '@/components/HighlightGallery';
import Layout from '@/components/Layout';

export default function HomePage() {
 
  return (
    <Layout>
      <Box className='mb-5'>
        <HighlightGallery />
        <HighLightProduct/>
        <Typography variant='h3' align='center' className='my-5'>Available Today</Typography>
        <Box className='text-center'>
          <img src='https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/273043290_3040038899591517_3287038098690829231_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=SnRCA-NU2OYAX9CfTB4&_nc_ht=scontent.fhan5-11.fna&oh=00_AfA80GMqirLtZEqmO7mvfCZsmV1sZMMMKGrfS8rNU7P-hQ&oe=641C7907'
          className='w-50'
          />
        </Box>
      </Box>
    </Layout>
  );
}
