import { AppBar, Container, Toolbar, Typography } from "@mui/material"
import DiamondIcon from '@mui/icons-material/Diamond';

function Header() {
    return (
        <AppBar position="sticky" sx={{ marginBottom: '50px' }}>
            <Container>
                <Toolbar>    {/*standard heigth */}
                <DiamondIcon sx={{fontSize:30}} />
                <Typography>Mui Base Components</Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header