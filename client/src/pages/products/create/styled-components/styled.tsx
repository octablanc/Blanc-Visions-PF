import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 95%;
  padding: 3rem;
  margin: 0 auto;
  box-shadow: 0px 10px 48px 16px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Form = styled.form`
  div {
    margin-top: 1.5rem;
  }

  label {
    font-weight: bold;
    text-transform: uppercase;
  }
  input {
    width: 100%;
    padding: 1rem;
  }

  textarea {
    width: 100%;
    height: 7rem;
  }

  button {
    padding: 1rem;
    width: 100%;
    margin: 1.5rem 0;
    background-color: black;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.8rem;
    border-radius: 0.8rem;
  }

  select {
    margin-top: 1rem;
  }

  .grid-form {
    display: flex;
    gap: 2rem;
    margin: 0;
  }
`;

export const Alert = styled.div`
  background-color: #e12e1c;
  color: white;
  text-align: center;
  padding: 1.2rem 0.5rem;
`;
