import { Box, AppBar, Toolbar, Button, Container, Typography, Grid} from "@mui/material"
import { useNavigate } from "react-router-dom"


export const TopBar:React.FC = function TopBar() {
    const navigate = useNavigate()

    return(
        <Box marginBottom={14}>
            <AppBar position='fixed'>
            <Toolbar>
                <Box>
                <Button variant='contained' color='primary' onClick={()=>{navigate('/')}}>
                    Home
                </Button>
                </Box>
                <Container>
                <Typography variant='h5'>Next Thing Todo</Typography>
                </Container>
                <Grid container justifyContent='flex-end'>
                    <Button variant='contained' color='info'onClick={()=>{navigate('/settings')}}>
                    Settings
                    </Button>
                </Grid>
            </Toolbar>
            </AppBar>
        </Box>
    )
}
