import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import {
  BoxStyle,
  ContainerAlert,
  ModalContainer,
} from '../styled-components/stryled';
import { postRating } from '../../../services/services';
import { Alert } from '@mui/lab';
import { useAppSelector } from '../../../redux/app/hooks';
import { useNavigate } from 'react-router-dom';

export default function Calification({
  productName,
  productImg,
  productId,
  ratings,
}: {
  productName: string;
  productImg: string;
  productId: number;
  ratings: Array<{ userId: number }>;
}) {
  const navigate = useNavigate();
  const userState = useAppSelector(({ userState }) => userState.user);
  const [form, setForm] = useState({
    score: 1,
    commentary: '',
    productId: productId,
    // userId: userState?.id
    userId: 1,
  });
  const userOpinion = ratings.some((rat) => rat.userId === userState?.id);

  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInput = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    const val = name === 'score';
    setForm({ ...form, [name]: val ? +value : value });
  };

  const postFormRating = (e: React.FormEvent<HTMLFormElement>) => {
    postRating(form);
    setOpen(false);
    setOpenAlert(true);
    setTimeout(() => {
      setOpenAlert(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        disabled={userOpinion ? true : false}
      >
        {userOpinion ? 'Ya opinó' : 'Dar Opinion'}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={BoxStyle}>
          <ModalContainer onSubmit={postFormRating}>
            <img src={productImg} alt="" />
            <h1>¿Que te parecio el producto?</h1>
            <p className="nameProduct">{productName}</p>
            <Box sx={{ '& > legend': { mt: 2 } }}>
              <Rating
                size="large"
                name="score"
                value={form.score}
                onChange={handleInput}
              />
            </Box>
            <hr />
            <h3>Agrega un comentario</h3>
            <p>(Opcional)</p>
            <textarea
              placeholder="Mi producto me parecio..."
              value={form.commentary}
              name="commentary"
              onChange={handleInput}
              maxLength={1500}
              rows={7}
              cols={70}
            ></textarea>
            <p>{form.commentary.length} / 1500</p>
            <input type="submit" value="Enviar" />
          </ModalContainer>
        </Box>
      </Modal>

      {openAlert && (
        <ContainerAlert>
          <Alert variant="filled" severity="success">
            Gracias por su opinion!
          </Alert>
        </ContainerAlert>
      )}
    </div>
  );
}
