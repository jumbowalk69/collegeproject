import React, { useRef } from 'react';
import { Box, Typography, CardMedia, Button } from '@mui/material';

const DeptCard = ({ img, text, link }) => {
  const imageRef = useRef(null); // Reference to the image element

  // Function to handle full screen request
  const handleFullScreen = () => {
    if (imageRef.current) {
      // Check if the imageRef is available
      if (imageRef.current.requestFullscreen) {
        imageRef.current.requestFullscreen();
      } else if (imageRef.current.mozRequestFullScreen) { // Firefox
        imageRef.current.mozRequestFullScreen();
      } else if (imageRef.current.webkitRequestFullscreen) { // Chrome, Safari and Opera
        imageRef.current.webkitRequestFullscreen();
      } else if (imageRef.current.msRequestFullscreen) { // IE/Edge
        imageRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%', // Adjust the width of the image container
        '&:hover .overlay': {
          height: '100%', // Expand the overlay on hover
        }
      }}
    >
      {/* Image */}
      <CardMedia
        component="img"
        src={img} // Replace with your image URL
        alt="Avatar"
        ref={imageRef} // Reference the image for full-screen functionality
        sx={{
          width: '100%',
          height: 'auto',
        }}
      />

      {/* Overlay */}
      <Box
        className="overlay"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
          overflow: 'hidden',
          width: '100%',
          height: 0,
          transition: '.5s ease',
        }}
      >
        {/* Text inside the overlay */}
        <Typography
          variant="h6"
          sx={{
            color: 'white',
            fontSize: 20,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
            <Box sx={{ flexGrow: 1 }}>
                {text}
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Button
                    variant="outlined"
                    color="dark"
                    size="small"
                    onClick={handleFullScreen}
                    sx={{ marginTop: '1rem' }}
                    href={link}
                >
                    Visit
                </Button>
            </Box>
        </Typography>        
      </Box>
    </Box>
  );
};

export default DeptCard;