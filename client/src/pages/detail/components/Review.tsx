import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { ContainerRatings } from './style';
import moment from 'moment';
import 'moment/locale/es';
import React from 'react';

export const Review = ({ ratings }: { ratings: Array<any> }) => {
  const formato = 'DD MMM YYYY';

  return (
<<<<<<< HEAD
    <div>   
      <h1>Opiniones del producto</h1>      <hr />
=======
    <div>
      <br />
      <br />
      <hr />
      { ratings.length ? <h1>Opiniones del producto</h1> : <h2>No hay opiniones de este producto</h2>}
>>>>>>> 4266923fa0f54d82beee6eaddc9f07fabd8d046b
      {/* FALTA COMPONENTE DE PROMEDIOS  */}
      <br />
      <ContainerRatings>
        {ratings?.map((rating) => (
          <div key={rating.id} className='one__rating'>
            <p className='date__rating'>
              {moment(rating.createdAt.split('T')[0]).format(formato)}
            </p>
            <Box>
              <Rating
                size='large'
                name='read-only'
                value={rating.score}
                readOnly
              />
            </Box>
            <p className='commentary__rating'>{rating.commentary}</p>
          </div>
        ))}
      </ContainerRatings>
    </div>
  );
};
// "id": 1,
// "score": 1,
// "commentary": "primer cometario jejejeje",
// "createdAt": "2023-01-04T22:44:20.521Z",
// "updatedAt": "2023-01-04T22:44:20.521Z",
// "productId": 1
