import React from 'react'
import Layout from './components/Layout'
import { Box, Grid } from '@mui/material'

function App() {
  return (
    <Layout>
      <Box>
        <Grid container >
          <Grid item md={6} xs={12}  sx={{backgroundColor:'red'}}>test</Grid>
          <Grid item md={6} xs={12}  sx={{backgroundColor:'green'}}>test</Grid>
        </Grid>
      </Box>
    </Layout>
  )
}

export default App