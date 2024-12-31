import React from 'react';
import { Box, Typography } from '@mui/material';

const HeroSection = () => {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      {/* Video Background */}
      <video
        src="https://files.geu.ac.in/videos/home-bg-videoplayback.mp4"  // Replace with your video URL
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      />
      
      {/* Content on top of the video */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textAlign: 'center',
          zIndex: 1,
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
          Welcome to GEU
        </Typography>
        <Typography variant="h5" sx={{ mb: 4 }}>
          Experience Campus Life from Your Screen!
        </Typography>
        {/* <Button variant="contained" color="primary" size="large">
          Get Started
        </Button> */}
      </Box>
    </Box>
  );
};

export default HeroSection;
