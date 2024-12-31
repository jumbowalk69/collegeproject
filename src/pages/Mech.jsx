import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';

import Card from '../component/Card';

import mechImage from '../assets/mech1.png';
import mechImage2 from '../assets/mech2.png';
import mechImage3 from '../assets/mech3.png';
import mechImage4 from '../assets/mech4.png';
import mechImage5 from '../assets/mech5.png';

const heroStyles = {
    backgroundImage: `url(${mechImage})`, // Example image URL
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
    backgroundImage: `url(${mechImage2})`, // Example image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '90vh',  // Height of the Hero Section
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', // Text shadow for better readability
};


const mech = () => {
  return (
    <div>
        <Box sx={heroStyles}>
            <Container>
                <Typography variant="h2" align="center" gutterBottom>
                    Welcome to Mechanical Workshop Block
                </Typography>
                {/* <Typography variant="h6" align="center" paragraph>
                    Discover the best products and services tailored just for you.
                </Typography> */}
                <Box display="flex" justifyContent="center">
                    {/* <Button variant="contained" color="primary" size="large" href="/shop">
                        Shop Now
                    </Button> */}
                </Box>
            </Container>
        </Box>
        <Box sx={{ flexGrow: 1, paddingTop: '3rem', paddingBottom: '3rem', backgroundColor: '#212429', color: '#fff' }}>
            <Typography variant='h4' textAlign={'center'}>
                Floor Layout of Mechanical Workshop Block
            </Typography>
        </Box>
        <Box sx={map}>
            <Container>

            </Container>
        </Box>        
        <Box sx={{ flexGrow: 1 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid size={4}>
                    <Card img={mechImage3} />
                </Grid>
                <Grid size={4}>
                    <Card img={mechImage4} />
                </Grid>
                <Grid size={4}>
                    <Card img={mechImage5} />
                </Grid>
            </Grid>
        </Box>

        

    </div>
  )
}

export default mech