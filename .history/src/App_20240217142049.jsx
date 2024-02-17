import React from 'react'
import Layout from './components/Layout'
import { Box, Grid } from '@mui/material'

function App() {
  return (
    <Layout>
      <Box>
        <Grid container>
          <Box item>تست</Box>
          <Box item>تست</Box>
        </Grid>
      </Box>
    </Layout>
  )
}

export default App