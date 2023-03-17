import { Typography, Box, Grid, Paper } from '@mui/material';
import Link from 'next/link';
import style from '../styles/Home.module.css';

export default function HighLightProduct() {
  return (
    <>
      <Typography variant="h3" align="center" className="my-5">
        Highlight Product
      </Typography>
      <Box className="px-5">
        <Grid container spacing={4}>
          {Array.from(Array(8)).map((_, index) => (
            <Grid key={index} item md={3} xs={12} sm={6}>
              <Paper className={`${style.productContainer}`}>
                <img src="/img/service.png" className="w-100 text-center" style={{ borderRadius: '8px 8px 0 0' }} />
                <Box className="p-3">
                  <Typography paragraph className="text-20">
                    Minh
                  </Typography>
                  <Typography paragraph style={{ color: '#BBBBBB' }}>
                    Mascarilla embellecedora para el cuidado facial y tratamiento del acné.
                  </Typography>
                  <Link href={''}>Reserva tu cita</Link>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
