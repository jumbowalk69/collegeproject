import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';

import Card from '../component/Card';

import btechImage from '../assets/btech1.png';
import btechImage2 from '../assets/btech2.png';
import btechImage4 from '../assets/btech4.png';
import btechImage6 from '../assets/btech6.png';
import btechImage7 from '../assets/btech7.png';
import btechImage8 from '../assets/btech8.png';
import btechImage9 from '../assets/btech9.png';
import btechImage10 from '../assets/btech10.png';
const heroStyles = {
    backgroundImage: `url(${btechImage})`, // Example image URL
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
    backgroundImage: `url(${btechImage2})`, // Example image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '90vh',  // Height of the Hero Section
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', // Text shadow for better readability
};


const Btech = () => {
  return (
    <div>
        <Box sx={heroStyles}>
            <Container>
                <Typography variant="h2" align="center" gutterBottom>
                    Welcome to B.Tech Block
                </Typography>
                <Typography variant="h2" align="center" gutterBottom>
                    (Administrative Block)
                </Typography>
                <Typography variant="h6" align="center" paragraph>
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
                Floor Layout of B.Tech Block
            </Typography>
        </Box>
        <Box sx={map}>
            <Container>

            </Container>
        </Box>        
        <Box sx={{ flexGrow: 1 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid size={4}>
                    <Card img={btechImage6} text={"Office of International Affairs"} />
                </Grid>
                <Grid size={4}>
                    <Card img={btechImage10} text={"Auditorium"} />
                </Grid>
                <Grid size={4}>
                    <Card img={btechImage8} text={"Admission Office"} />
                </Grid>
                <Grid size={4}>
                    <Card img={btechImage4} text={"Lecture Theatre"} />
                </Grid>
                <Grid size={4}>
                    <Card img={btechImage9} text={"Record Office"} />
                </Grid>
                <Grid size={4}>
                    <Card img={btechImage7} text={"Admission Office"} />
                </Grid>
            </Grid>
        </Box>

        

    </div>
  )
}

export default Btech