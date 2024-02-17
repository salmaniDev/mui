import { AppBar, Container, Toolbar } from "@mui/material"
import DiamondIcon from '@mui/icons-material/Diamond';

function Header() {
    return (
        <AppBar position="sticky" sx={{ marginBottom: '50px' }}>
            <Container>
                <Toolbar>    {/*standard heigth */}
                <DiamondIcon />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header