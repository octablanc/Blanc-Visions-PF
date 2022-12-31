import styled from "styled-components";

export const FormConteiner = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: 40% 60%;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    max-height: 1000px;
    box-shadow: 24px 29px 88px 0px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.div`
    width: 100%;
    height: 100%;
`;

export const Fields = styled.div`
    width: 100%;
    padding: 40px 100px 40px 100px;
`;

export const IconAdd = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 3px;
    margin: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 0px 6px;
    transition: 0.1s;
    cursor: pointer;

    :hover {
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 0px 6px;
    }
`;