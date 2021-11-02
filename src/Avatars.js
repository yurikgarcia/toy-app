import React from 'react';
import './App.css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';


function Avatars() {

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          backgroundColor: '#44b700',
          color: '#44b700',
          boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
          '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
          },
        },
        '@keyframes ripple': {
          '0%': {
            transform: 'scale(.8)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
          },
        },
      }));
 
 
return (
   
    <main>


<Stack direction="row" spacing={2}>


        <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Vader" src="https://www.cadworxlive.com/blobs/usergallery/IMG_lordvaderDarth-Vader_phixr.jpg" />
      </StyledBadge>

      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="R2D2" src="https://www.sideshow.com/storage/product-images/2172/r2-d2-deluxe_star-wars_square.jpg" />
      </StyledBadge>

      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Leia" src="https://avatarfiles.alphacoders.com/711/thumb-71124.jpg" />
      </StyledBadge>

      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Leia" src="https://pbs.twimg.com/media/Dqx1HA0U8AAHNAE.jpg" />
      </StyledBadge>

 
    </Stack>

    </main>
    
 


)
        }

export default Avatars;