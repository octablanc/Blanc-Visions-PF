import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img from '../../../assets/img.png';
import { BsCamera, BsListUl, HiUsers, FaMoneyBillAlt } from '../../../icons';

const SideBarContainer = styled.div`
  background-color: salmon;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  min-width: 25rem;
  padding: 3rem;
`;
const AdminImage = styled.div`
  overflow: hidden;
  img {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    object-fit: cover;
  }
`;
const AdminContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  h4,
  h3 {
    margin: 0;
  }
`;

export const Bar = () => {
  return (
    <div>
      <SideBarContainer>
        <AdminContent>
          <AdminImage>
            <img src={img} alt='img user' />
          </AdminImage>
          <div>
            <h3>Florencia</h3>
            <h4>Administradora</h4>
          </div>
        </AdminContent>
        <ul>
          <li>
            <span>
              <BsCamera />
            </span>
            <Link to='products'>products</Link>
          </li>
          <li>
            <span>
              <BsListUl />
            </span>
            <Link to='categories'>categories</Link>
          </li>
          <li>
            <span>
              <HiUsers />
            </span>
            <Link to='users'>users</Link>
          </li>
          <li>
            <span>
              <FaMoneyBillAlt />
            </span>
            <Link to='sales'>sales</Link>
          </li>
        </ul>
      </SideBarContainer>
    </div>
  );
};
