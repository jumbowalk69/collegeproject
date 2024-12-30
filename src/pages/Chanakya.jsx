import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';

import Card from '../component/Card';

import Chanakya1 from '../assets/chanakya1.png';
import Chanakya2 from '../assets/chanakya2.png';
import Chanakya3 from '../assets/chanakya3.png';
import Chanakya4 from '../assets/chanakya4.png';
import Chanakya6 from '../assets/chanakya6.png';
import Chanakya8 from '../assets/chanakya8.png';
import Chanakya10 from '../assets/chanakya10.png';

const heroStyles = {
    backgroundImage: `url(${Chanakya1})`, // Example image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '90vh',  // Height of the Hero Section
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', // Text shadow for better readability
};

const map = {
    backgroundImage: `url(${Chanakya2})`, // Example image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '90vh',  // Height of the Hero Section
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', // Text shadow for better readability
};


const Chanakya = () => {
  return (
    <div>
        <Box sx={heroStyles}>
            <Container>
                <Typography variant="h2" align="center" gutterBottom>
                    Welcome to Chanakya Block
                </Typography>
]                <Typography variant="h6" align="center" paragraph>
                    Discover the best products and services tailored just for you.
                </Typography>
                <Box display="flex" justifyContent="center">
                    {/* <Button variant="contained" color="primary" size="large" href="/shop">
                        Shop Now
                    </Button> */}
                </Box>
            </Container>
        </Box>
        <Box sx={{ flexGrow: 1, paddingTop: '3rem', paddingBottom: '3rem', backgroundColor: '#212429', color: '#fff' }}>
            <Typography variant='h4' textAlign={'center'}>
                Floor Layout of Chanakya Block
            </Typography>
        </Box>
        <Box sx={map}>
            <Container>

            </Container>
        </Box>        
        <Box sx={{ flexGrow: 1 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid size={4}>
                    <Card img={Chanakya3} text={"Entrance Hallway of Chanakya Block"} />
                </Grid>
                <Grid size={4}>
                    <Card img={Chanakya6} text={"Conference Hall"} />
                </Grid>
                <Grid size={4}>
                    <Card img={Chanakya4} text={"Food and Beverage Lab"} />
                </Grid>
                <Grid size={4}>
                    <Card img={Chanakya8} text={"Food Production Lab"} />
                </Grid>
                <Grid size={4}>
                    <Card img={Chanakya10} text={"Lecture Theatre"} />
                </Grid>
                <Grid size={4}>
                    <Card img={Chanakya4} text={"Food and Beverage Lab"} />
                </Grid>
            </Grid>
        </Box>

        

    </div>
  )
}

export default Chanakya