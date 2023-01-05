import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

// Path intellisense
//
export const Review = ({ ratings }: { ratings: Array<any> }) => {
  //   const rat = ratings[0].createdAt;
  //   console.log(rat.split('T'));

  return (
    <div>
      <Box width={300}>
        <Rating size='large' name='score' />
      </Box>
      <h1>Opiniones del producto</h1>
      {ratings?.map((rating) => (
        <div key={rating.id}>
          <Box>
            <Rating
              size='large'
              name='read-only'
              value={rating.score}
              readOnly
            />
          </Box>
          <p>{rating.createdAt.split('T')[0]}</p>
          <p>{rating.commentary}</p>
        </div>
      ))}
    </div>
  );
};
// "id": 1,
// "score": 1,
// "commentary": "primer cometario jejejeje",
// "createdAt": "2023-01-04T22:44:20.521Z",
// "updatedAt": "2023-01-04T22:44:20.521Z",
// "productId": 1
