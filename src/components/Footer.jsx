import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography variant="h5" mt="40px" textAlign="center" pb="40px">Made with 😉 by <span style={{ color: '#FF2625' }}>Gaurav Dhandhukiya</span> </Typography>
      </Stack>
    </Box>
  )
}

export default Footer