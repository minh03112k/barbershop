import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import Image from 'next/image';
import { Box, width } from '@mui/system';

export default function Home() {
  var items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
    },
  ];

  return (
    <Box sx={{width: '100vw', minHeight: '100vh'}} >
      
    </Box>
  );
}
