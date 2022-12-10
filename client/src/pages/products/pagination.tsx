import React from 'react';
import PaginationS from './styled-components/styledPag';
let page: 7;
export default function Pagination() {
  // function handlerChange(){
  //     switch(id){
  //         case "previous":
  //             if(page > 1){
  //                 page--;
  //                 dispatch(changePage(page));
  //             }
  //             break;

  //         case "next":
  //             if(page < Math.ceil(recipes.length/12)){
  //                 page++;
  //                 dispatch(changePage(page));
  //             }
  //             break;
  //     }

  return (
    <PaginationS>
      <div className='previous' id='previous'>
        <span id='previous'>{'<'}</span>
      </div>

      <div id='page'>
        <span>{page}</span>
      </div>

      <div className='next' id='next'>
        <span id='next'>{'>'}</span>
      </div>
    </PaginationS>
  );
}
