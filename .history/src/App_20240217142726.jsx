import React from 'react'
import Layout from './components/Layout'
import { Box, Grid } from '@mui/material'

function App() {
  return (
    <Layout>
      <Box>
        <Grid container gap={2}}>
          <Grid item md={6} xs={12}  sx={{backgroundColor:'red'}}>تست</Grid>
          <Grid item md={6} xs={12}  sx={{backgroundColor:'green'}}>تست</Grid>
        </Grid>
      </Box>
    </Layout>
  )
}

export default App