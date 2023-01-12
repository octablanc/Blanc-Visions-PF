import styled from 'styled-components';

export const FooterBar = styled.div`
  background: ${props => props.theme.colors.black};
  /* color: ${props => props.theme.colors.white}; */
  /* color: #777769; */
  padding: 2.5rem;
  a,
  span {
    color: #d0d0d0;
  }
  a:hover {
    text-decoration: underline;
  }

  h3 {
    color: ${(props): string => props.theme.colors.primary};
  }

  .contact svg {
    margin-right: 0.8rem;
    color: #d0d0d0;
  }
`;

export const GridFooter = styled.div`
  display: grid;
  align-content: center;
  justify-items: center;
  ul li {
    padding-bottom: 1rem;
  }

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
  }
`;

export const Icons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  p {
    margin-top: 0;
  }

  svg {
    color: #d0d0d0;
    margin-right: 0.5rem;
  }
`;

export const Input = styled.input`
  padding: 1rem;
  background-color: #d0d0d0;
  margin-bottom: 1rem;
  width: 80%;
  border: none;
`;

export const Btn = styled.button`
  background-color: ${props => props.theme.colors.primary};
  padding: 1rem;
  width: 80%;
  border: none;
`;

export const Newsletter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
