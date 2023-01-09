import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Bar } from '../Bar';
import { DashboardContainer } from './styled-components/styles';

const Main = styled.div`
  padding: 3rem 5rem;
  width: 100%;
`;
export const LayoutDashboard = () => {
  return (
    <DashboardContainer>
      <Bar />
      <Main>
        <Outlet />
      </Main>
    </DashboardContainer>
  );
};
