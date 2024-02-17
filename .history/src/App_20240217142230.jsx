import React from 'react'
import Layout from './components/Layout'
import { Box, Grid } from '@mui/material'

function App() {
  return (
    <Layout>
      <Box>
        <Grid container>
          <Box item md={6} sx={{backgroundColor:'red'}}>تست</Box>
          <Box item md={6} sx={{backgroundColor:'green'}}>تست</Box>
        </Grid>
      </Box>
    </Layout>
  )
}

export default App