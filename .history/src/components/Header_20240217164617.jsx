import { AppBar, Container, Toolbar, Typography, IconButton } from "@mui/material"
import DiamondIcon from '@mui/icons-material/Diamond';

function Header() {
    return (
        <AppBar position="sticky" sx={{ marginBottom: '50px' }}>
            <Container>
                <Toolbar>    {/*standard heigth */}
                    <IconButton>
                        <DiamondIcon sx={{ fontSize: 30 }} />
                    </IconButton>
                    <Typography>Mui Base Components</Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header