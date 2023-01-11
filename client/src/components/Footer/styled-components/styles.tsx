import styled from 'styled-components';

export const FooterBar = styled.div`
  background: ${(props) => props.theme.colors.black};
  /* color: ${(props) => props.theme.colors.white}; */
  color: #777769;
  padding: 2.5rem;
  a {
    color: beige;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const GridFooter = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  justify-items: center;
  align-items: center;
  // background-color: yellow;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  p {
    margin: 0px;
  }
`;

export const Input = styled.input`
  padding: 1rem;
  background-color: white;
  margin-bottom: 1rem;
  width: 80%;
  border: none;
`;

export const Btn = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 1rem;
  width: 80%;
  border: none;
`;

export const Newsletter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
