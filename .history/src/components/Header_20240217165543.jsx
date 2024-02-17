import { AppBar, Container, Toolbar, Typography, IconButton, Menu, MenuItem, Button, Box } from "@mui/material"
import DiamondIcon from '@mui/icons-material/Diamond';
import MenuIcon from '@mui/icons-material/Menu';

const BUTTONS = [
    { title: 'shop', url: '/shop' },
    { title: 'login', url: '/login' },
    { title: 'signup', url: '/signup' },
]

function Header() {
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
                    <Box display={{ sm: 'block', md: 'none' }}>
                        <IconButton>
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