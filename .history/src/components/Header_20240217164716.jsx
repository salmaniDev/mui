import { AppBar, Container, Toolbar, Typography, IconButton, Menu, MenuItem } from "@mui/material"
import DiamondIcon from '@mui/icons-material/Diamond';

function Header() {
    return (
        <AppBar position="sticky" sx={{ marginBottom: '50px' }}>
            <Container>
                <Toolbar>    {/*standard heigth */}
                    <IconButton color="inherit">
                        <DiamondIcon sx={{ fontSize: 30 }} />
                    </IconButton>
                    <Typography>Mui Base Components</Typography>
                    <Menu open>
                        <MenuItem>test</MenuItem>
                    </Menu>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header