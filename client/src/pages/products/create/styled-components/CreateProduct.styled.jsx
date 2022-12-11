import styled from "styled-components";

export const FormConteiner = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: auto 60%;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    max-height: 1000px;
    box-shadow: 24px 29px 88px 0px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 100%;
    margin-left: 50px;

    .swiper-slide {
        img {
            max-height:300px;
        }
    }
`;

export const Fields = styled.div`
    width: 100%;
    padding: 40px 100px 40px 100px;
`;