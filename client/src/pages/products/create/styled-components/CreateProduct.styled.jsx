import styled from "styled-components";
import { theme } from "../../../../styled-components/theme";

export const FormConteiner = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 42% 57%;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  max-height: 1000px;
  background-color: white;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;

  *::-webkit-scrollbar {
    width: 5px;
  }
  *::-webkit-scrollbar-track {
    height: 4px;
    background: transparent;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #adafb4;
    border: 0px;
    border-radius: 20px;
  }
`;

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 50px 0px 40px 40px;
`;

export const Fields = styled.div`
  width: 100%;
  padding: 40px 100px 40px 100px;
`;

export const IconAdd = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 3px;
  margin-right: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 0px 6px;
  transition: 0.1s;
  cursor: pointer;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 0px 6px;
  }
`;

export const Miniatures = styled.div`
  padding: 20px 10px 20px 20px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`;

export const MiniatureBackground = styled.div`
  position: relative;
  margin-right: 10px;
  width: 60px;
  height: 60px;
  border-radius: 3px;
  background-size: cover;
  background-position: center;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  background-position: center;
  cursor: pointer;
`;

export const MiniatureContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 3px;
  background-color: #0000008d;
  opacity: 0;
  transition: 0.1s;
  cursor: pointer;

  :hover {
    opacity: 1;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 0px 6px;
  }
`;

/// Slider
export const SliderContainer = styled.div`
  position: relative;
  width: 464px;
  height: 400px;
  margin-bottom: 38px;
  border-radius: 5px;
  background-size: cover;
  background-position: center;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  transition: 0.1s;
`;

export const SliderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: 0.2s;
  opacity: 0;

  :hover {
    opacity: 1;
  }
`;

export const ButtonPrev = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: #00000092;
  border-radius: 50%;
  margin-left: 20px;
  cursor: pointer;
  transition: 0.1s;

  :hover {
    background-color: #000000b9;
  }
`;

export const ButtonNext = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: #00000092;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
  transition: 0.1s;

  :hover {
    background-color: #000000b9;
  }
`;

export const Views = styled.div`
  position: absolute;
  bottom: 20px;
  left: calc(50% - 30px);
  color: white;
  background-color: #000000a0;
  padding: 5px;
  border-radius: 3px;
  width: 60px;
  white-space: nowrap;
  text-align: center;
  font-size: 13px;
`;

// Properties
export const PropertyContainer = styled.div`
  margin-top: 20px;
  margin-left: 9px;
  margin-right: -9px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const PropertiesContainer = styled.div`
  margin-top: 10px;
  margin-left: 9px;
  margin-right: -9px;
  max-height: 100px;
  overflow: hidden;
  overflow-y: auto;
  border-radius: 5px;
`;

export const PropertyBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4px 4px;
  padding: 2px;
  border-radius: 3px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`;
