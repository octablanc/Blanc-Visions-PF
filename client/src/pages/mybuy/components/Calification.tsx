import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { BoxStyle, ModalContainer } from '../styled-components/stryled';
import Score from './Score';

export default function Calification({
  productName,
  productImg,
}: {
  productName: string;
  productImg: string;
}) {
  const [form, setForm] = useState({
    score: '',
    commentary: '',
  });
  const [open, setOpen] = useState(productName === 'Sony alfha 7' ? true : false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInput = (e: any) => {
    const { value } = e.target.value;
    //  setForm({

    //  })
  };

  return (
    <div>
      <Button onClick={handleOpen}>Dar Opinion</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={BoxStyle}>
          <ModalContainer>
            <img src={productImg} alt="" />
            <h1>¿Que te parecio el producto?</h1>
            <p className='nameProduct'>{productName}</p>
            <Score />
            <h2>Agrega un comentario</h2>
            <p>(Opcional)</p>
            <textarea
              placeholder="Mi producto me parecio..."
              value={form.commentary}
              name="commentary"
              onChange={handleInput}
              maxLength={1500}
              rows={7} cols={70}
              
            ></textarea>
            <p>0 / 1500</p>
            {/* <input type='textarea'></input> */}
            <Button variant="contained">Enviar</Button>
          </ModalContainer>
        </Box>
      </Modal>
    </div>
  );
}
