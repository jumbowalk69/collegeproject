import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import DeptCard from '../component/DeptCard';

import btech from '../assets/btech1.png';
import chanakya from '../assets/chanakya1.png';
import mech from '../assets/mech1.png';
import HeroSection from '../component/HeroSection';

const data = [
    { id: '1', img: btech, text: 'B.Tech Block', link: '/btech' },
    { id: '2', img: chanakya, text: 'Chanakya Block', link: '/chanakya' },
    { id: '3', img: mech, text: 'Mechanical Workshop', link: '/mech' },
];


const Home = () => {
  return (
    <div>
        <HeroSection/>
        <br/><br/><br/><br/>
        
        <Box sx={{ flexGrow: 1 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {data.map((item) => (
                    <Grid size={4}>
                        <DeptCard key={item.id} img={item.img} text={item.text} link={item.link} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    </div>
  )
}

export default Home

