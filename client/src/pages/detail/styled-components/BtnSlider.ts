import styled from "styled-components";

export const BtnNext = styled.button`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: #f1f1f1;
  border: 1px solid rgba(34, 34, 34, 0.287);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  top: 50%;
  right: 20px;
  transform: translateY(-60%);
`;

export const BtnPrev = styled.button`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: #f1f1f1;
  border: 1px solid rgba(34, 34, 34, 0.287);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  top: 50%;
  left: 20px;
  transform: translateY(-60%);
`;