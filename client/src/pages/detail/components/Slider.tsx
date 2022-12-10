import React, {useEffect, useState} from 'react';
import {Pro} from './Interface';


export const Slider = () => {

    const [prod, setProd] = useState<Pro[]>([])

    useEffect(() => {
        fetch(`http://localhost:4000/products`)
          .then((resp) => resp.json())
          .then((prod) => {
            console.log(prod);
            setProduct(prod);
          });
      }, []);
      
  return (
    <div>
        dataSlider.map(obj, index) => 
        Slider
        
        </div>
  )
}

