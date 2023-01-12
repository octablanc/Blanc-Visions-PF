import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  background-color: red;
  padding: 2rem;
  background-color: white;
  border-radius: 1rem;
  min-width: 40rem;

  label {
    font-weight: bold;
    font-size: 1.5rem;
    display: block;
  }
  input {
    display: block;
    width: 100%;
    margin-bottom: 1.5rem;
    padding: 1rem 0.5rem;
  }

  select {
    margin-bottom: 2rem;
    width: 30%;
    text-align: center;
  }

  .create {
    text-transform: uppercase;
    padding: 0.8rem;
    background-color: #1565c0;
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
    outline: none;
    border: none;
    border-radius: 0.7rem;
  }
`;
