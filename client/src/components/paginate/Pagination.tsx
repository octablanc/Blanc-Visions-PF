import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import PaginationS from './PaginationStyle';
import { changePage } from '../../redux/slices/products';

export default function Pagination() {
  const { products } = useAppSelector((state) => state.productsState);
  let { page } = useAppSelector((state) => state.productsState);
  const dispatch = useAppDispatch();

  function handlerChange(id: string) {
    switch (id) {
      case 'previous':
        if (page > 1) {
          page--;
          dispatch(changePage(page));
        }
        break;

      case 'next':
        if (page < Math.ceil(products.length / 12)) {
          page++;
          dispatch(changePage(page));
        }
        break;
    }
  }

  return (
    <PaginationS>
      {/* <div className="previous" id="previous" onClick={(event)=> {handlerChange()}}>
              <span id="previous">{"<"}</span>
          </div>

          <div id="page">
              <span>{page}</span>
          </div>

          <div className="next" id="next" onClick={(event)=> handlerChange(event.target.id)}>
              <span id="next">{">"}</span>
          </div> */}
    </PaginationS>
  );
}
