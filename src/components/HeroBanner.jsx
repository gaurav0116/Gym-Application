import React from 'react'
import { Box,Button,Stack, Typography } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{ mt:{lg: '212px', xs: '70px'}, ml:'25px' }} position="relative" p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="26px" mb={3}>
        Fitness Club
      </Typography> 
      <Typography fontWeight={700} sx={{ fontSize: { lg:'44px', xs:'40px' }, mt:'10px' }}>
        Sweat, Smile <br/> and Repeat
      </Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={3} mt={3}>
        Check out the mpst effective exercises
      </Typography>
      <Button variant='contained' color="error" href="#exercises" sx={{ backgroundColor: '#ff2626', padding: '5px', mt:'20px' }} >Explore Exercise</Button>
      <Typography fontWeight={600} color="#ff2625" sx={{ opacity:0.1, display:{ lg: 'block', xs:'none'}, mb:'20px', mt:'10px'}} fontSize="200px">
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="hero_banner" className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner