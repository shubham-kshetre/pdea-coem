import { Box, Typography } from '@mui/material'
import React from 'react'
import Records from '../../helper/Records/Records'

function Statistics() {
  return (
    <Box
    sx={{
      background: "black",
      color: "white",
      padding: "24px",
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <Box sx={{ padding: "4px", paddingX: "12px" }}>
      <Records number={200} />
      <Typography variant="h4">Happy Students</Typography>
    </Box>

    <Box sx={{ padding: "4px", paddingX: "12px" }}>
      <Records number={10000} />
      <Typography variant="h4">Placements</Typography>
    </Box>

    <Box sx={{ padding: "4px", paddingX: "12px" }}>
      <Records number={100} />
      <Typography variant="h4">Teachers</Typography>
    </Box>
  </Box>
  )
}

export default Statistics