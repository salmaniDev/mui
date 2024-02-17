import { AppBar, Container, Toolbar } from "@mui/material"

function Header() {
    return (
        <AppBar position="sticky" sx={{ marginBottom: '50px' }}>
            <Container>
                <Toolbar>    {/*standard heigth */}

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header