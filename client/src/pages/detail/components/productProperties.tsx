import React from "react";



export const ProductProperties = ({ name, value }: any) => {
  return (
    <div>
      productProperties
      <hr />
      <ul>
        <p>{name}</p>
        <p>{value}</p>
      </ul>
      <hr />
    </div>
  );
};
