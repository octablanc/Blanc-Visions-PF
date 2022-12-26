import styled from "styled-components";

export const Profilecontainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px 20px;
`;

export const AvatarPic = { 
    width: '120px', 
    height: '120px', 
    marginLeft: '5px',
    boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
};

export const FullName = styled.span`
    font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
    color: #3f3f3f;
`;

export const Fields = styled.div`
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const Field = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;