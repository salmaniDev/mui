import React from 'react'
import Layout from './components/Layout'
import { Box, Grid } from '@mui/material'

function App() {
  return (
    <Layout>
      <Box>
        <Grid container rowGap={10} >
          <Grid item md={6} xs={12} textAlign={'center'} py={5}  sx={{backgroundColor:'red'}}>test</Grid>
          <Grid item md={6} xs={12} textAlign={'center'} py={5}  sx={{backgroundColor:'green'}}>test</Grid>
        </Grid>
      </Box>
    </Layout>
  )
}

export default App