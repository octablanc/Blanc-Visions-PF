import styled from "styled-components";

const PaginationS = styled.div`
    user-select: none;
    display: flex;
    align-items: center;
    margin-top: 40px;
    font-size: 20px;

    .previous, .next {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 30px;
        background-color: #339e85;
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;        
        color: white;
        border-radius: 50%;
        margin: 10px;
        cursor: pointer;
        transition: 0.3s;

        :hover {
            background-color: #5c5c5c;
        }
    }

    #page {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 42px;
        height: 40px;
        background-color: #292929;
        color: white;
        border-radius: 50%;
        margin: 10px;
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    }
`;

export default PaginationS;