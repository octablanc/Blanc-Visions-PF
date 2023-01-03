import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function Score() {
  const [value, setValue] = React.useState<number | null>(1);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
      
      size="large"
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
      />
    </Box>
  );
}
