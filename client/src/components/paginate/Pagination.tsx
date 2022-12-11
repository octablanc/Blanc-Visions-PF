import PaginationS from './PaginationStyle';

export default function Pagination() {
  return (
    <PaginationS>
      <div className='previous' id='previous'>
        <span id='previous'>{'<'}</span>
      </div>

      <div id='page'>
        <span>1</span>
      </div>

      <div className='next' id='next'>
        <span id='next'>{'>'}</span>
      </div>
    </PaginationS>
  );
}
