import React from 'react'
import { Container } from '@mui/material'

function Layout({ children }) {
    return (
        <>
            <Container>
                {children}
            </Container>
        </>
    )
}

export default Layout