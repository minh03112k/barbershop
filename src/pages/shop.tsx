import Layout from '@/components/Layout';
import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import style from '../styles/Shop.module.css';

export default function Shop() {
  return (
    <Layout>
      <Box sx={{ minHeight: '100vh' }} className="my-5">
        <Typography variant="h3" align="center" className="mb-5">
          Products
        </Typography>
        <Box className="px-5">
          <Grid container spacing={4}>
            {Array.from(Array(8)).map((_, index) => (
              <Grid key={index} item md={3} xs={12} sm={6}>
                <Paper className={`${style.productContainer}`}>
                  <Box className={`${style.imageContainer}`}>
                    <img src="/img/service.png" className="w-100" style={{ borderRadius: '8px 8px 0 0' }} />
                    <Box className={`${style.imageOverlay}`}>
                      <Typography className={`${style.imageDescription}`} align="left">
                        Fiber Pomade 4 oz. <br/> Strength: Pliable, flexible hold pomade <br /> Shine: Low shine Base: Water soluble <br /> Best For: Men of all hair types looking for a volumizing,
                        texturizing pomade that can be restyled throughout the day <br/> The Reuzel Fiber Pomade has a vanilla mint fragrance and can be applied to wet hair for increased shine.
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="p-3 d-flex justify-content-between">
                    <Link href={'#'}>Fiber Pomade</Link>
                    <Typography>$19.95</Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
}
