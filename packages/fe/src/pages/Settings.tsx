import { Alert, Box, Button, Container, Typography } from "@mui/material";
import { useStore } from "../context/TodoStore";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/material/Icon';
import React from "react";



export default function Settings () {
    const [open, setOpen] = React.useState(false);

    const handleClearCurrent = () => {
        clearCurrentTodo();
        setOpen(true);
    };

    const handleClearFinished = () => {
        clearFinishedTodo();
        setOpen(true);
    };

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
        >
            <CloseIcon fontSize="small" />
        </IconButton>
        </React.Fragment>
    );



    const {savedTheme, changeTheme, clearCurrentTodo, clearFinishedTodo} =  useStore();
    

    return(
        <Container>
            <Box m={10} display="flex" justifyContent='space-evenly' alignItems="center">
                <Typography variant="h2">Main Settings</Typography>
            </Box>
            <Box padding={3} m={0.3} display="flex" justifyContent='space-evenly' alignItems="center" border={0.5}>
                <Typography variant="h5">Current theme:{savedTheme}</Typography>
                <Button variant='contained' onClick={changeTheme} sx={{width:'100px'}}>
                    Change
                </Button>
            </Box>
            <Box padding={3} m={0.3} display="flex" justifyContent='space-evenly' alignItems="center" border={0.5}>
                <Typography variant="h5">Clear Current Todo</Typography>
                <Button variant='contained' onClick={handleClearCurrent} sx={{width:'100px'}}>
                    Clear
                </Button>
            </Box>
            <Box padding={3} m={0.3} display="flex" justifyContent='space-evenly' alignItems="center" border={0.5}>
                <Typography variant="h5" >Clear Finished Todo</Typography>
                <Button variant='contained' onClick={handleClearFinished} sx={{width:'100px'}}>
                    Clear
                </Button>
            </Box>
            <Snackbar sx={{width:'500px', height:'100px'}} open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                This is a success message!
                </Alert>
            </Snackbar>
        </Container>
    )
}