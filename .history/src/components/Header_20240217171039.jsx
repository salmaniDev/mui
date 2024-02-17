import { AppBar, Container, Toolbar, Typography, IconButton, Menu, MenuItem, Button, Box, useScrollTrigger } from "@mui/material"
import DiamondIcon from '@mui/icons-material/Diamond';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { useRef } from "react";

const BUTTONS = [
    { title: 'shop', url: '/shop' },
    { title: 'login', url: '/login' },
    { title: 'signup', url: '/signup' },
]

function Header() {

    const [menuOpen, setMenuOpen] = useState(false)
    const buttonRef = useRef()
    return (
        <AppBar position="sticky" sx={{ marginBottom: '50px' }}>
            <Container>
                <Toolbar>    {/*standard heigth */}
                    <IconButton color="inherit">
                        <DiamondIcon sx={{ fontSize: 30 }} />
                    </IconButton>

                    <Typography flexGrow={1}>Mui Base Components</Typography>
                    <Box display={{ sm: 'none', md: "block" }}>
                        {BUTTONS.map((i, index) => <Button href={i.url} key={index}>{i.title}</Button>)}
                    </Box>
                    <Box display={{ md: 'none' }}>
                        <IconButton >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Menu open={false}>
                        <MenuItem>test</MenuItem>
                    </Menu>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header