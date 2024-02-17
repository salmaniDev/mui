import { AppBar, Container, Toolbar } from "@mui/material"
import DiamondIcon from '@mui/icons-material/Diamond';

function Header() {
    return (
        <AppBar position="sticky" sx={{ marginBottom: '50px' }}>
            <Container>
                <Toolbar>    {/*standard heigth */}
                <DiamondIcon sx={{fontSize30}} />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header