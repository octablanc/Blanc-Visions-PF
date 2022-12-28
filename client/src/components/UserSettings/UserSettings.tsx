import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { BoxStyle } from './styled-components/UserSettings.styled';
import Tabs from './components/Tabs';

export default function UserSettings({ closeButton }: { closeButton: Function; }) {
    const [open, setOpen] = useState(true);
    const handleClose = () => {
        setOpen(false);
        closeButton();
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ backdropFilter: 'blur(10px)' }}
            
        >
            <Box sx={BoxStyle}>
                <Tabs closeModal={handleClose}/>
            </Box>
        </Modal>
    );
}