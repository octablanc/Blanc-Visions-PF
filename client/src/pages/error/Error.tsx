import "./styled-components/error.css";
import { Link } from "react-router-dom";
export const Error = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h3>Oops! Page not found</h3>
          <h1>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
        </div>
        <h2>we are sorry, but the page you requested was not found</h2>
        <button className="btn-curve">
          <Link to="/home" className="linkBoton"> Go home</Link>
        </button>
      </div>
    </div>
  );
};
