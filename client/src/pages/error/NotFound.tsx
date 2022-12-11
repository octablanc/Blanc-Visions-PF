import { Link } from 'react-router-dom';
import { NotFoundContainer } from './styled-components/styles';

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <h3>Oops! Page not found</h3>
      <h1>
        <span>4</span>
        <span>0</span>
        <span>4</span>
      </h1>
      <h2>we are sorry, but the page you requested was not found</h2>
      <Link to='/home'>
        <button>Go Home</button>
      </Link>
    </NotFoundContainer>
  );
};
