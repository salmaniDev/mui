import React from 'react'
import { Container } from '@mui/material'
import Header from './Header'

function Layout({ children }) {
    return (
        <>
            <Header />

            <Container>
                {children}
            </Container>
        </>
    )
}

export default Layout