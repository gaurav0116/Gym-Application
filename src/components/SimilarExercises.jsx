import React from 'react'
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';
import HorizontalScrollbar from './HorizontalScrollbar';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
      <Typography variant='h3' mb={5}> Exercises that target the same muscle group </Typography>
      <Stack direction='row' sx={{ p: 2, position: 'relative' }}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
      </Stack>
      <Typography variant='h3' mt={3} mb={3}> Exercises that the same equipment group </Typography>
      <Stack direction='row' sx={{ p: 2, position: 'relative' }}>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises