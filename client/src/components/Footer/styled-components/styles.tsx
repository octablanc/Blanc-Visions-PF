import styled from 'styled-components';

export const FooterBar = styled.div`
  background: ${props => props.theme.colors.black};
  /* color: ${props => props.theme.colors.white}; */
  color: #777769;
  padding: 2.5rem;
`;

export const GridFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;

  ul li {
    padding-bottom: 1rem;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 3.5rem;
`;
