import { Typography, Box, Grid, Paper } from '@mui/material';
import Link from 'next/link';
import style from '../styles/HighLightProduct.module.css';

export default function HighLightProduct() {
  return (
    <>
      <Typography variant='h3' align='center' className='my-5'>
        Highlight Product
      </Typography>
      <Box className='container'>
        <Grid container spacing={4}>
          {Array.from(Array(8)).map((_, index) => (
            <Grid key={index} item md={4} lg={3} xs={12} sm={6}>
              <Box className={style.productContainer}>
                <img src="/img/product.jpg" className="w-100 text-center" style={{ borderRadius: '8px 8px 0 0' }} />
                <Box className="p-3">
                  <Typography paragraph className="text-20">
                  HAIR GROOMING 02
                  </Typography>
                  <Typography paragraph>
                    • Creates a moldable, flexible hold of natural clay with a matte finish and is used to manipulate the hair into any style. <br/>
                    • Wont weigh hair down.<br/>
                    • Works on all hair types.<br/>
                  </Typography>
                  <Link href={''}>View Detail</Link>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
