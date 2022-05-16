import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TodoForm } from './TodoForm';
import { SpeedDialIcon } from '@mui/material';
import { TodoItem } from '../context/TodoStore';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ButtonStyle = {
    position: 'fixed',
    borderRadius:'50%',
    bottom: 80,
    right: 80,
    width: '100px',
    height:'100px'
}

export default function TodoCreate() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (

    <div>
        <Button aria-label="Add" size="large" variant='contained' color='primary' sx={ButtonStyle} onClick={handleOpen}>
                <SpeedDialIcon/>
        </Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <TodoForm onSubmit={handleClose} buttonName='Add New'/>
            </Box>
        </Modal>
        </div>
  );
}