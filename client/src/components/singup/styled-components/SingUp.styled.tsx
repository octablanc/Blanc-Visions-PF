import styled from 'styled-components';

export const BoxStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "5px",
    textAlign: "center"
};

export const ModalContainer = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    width: 900px;
    
    div {
        img {
            overflow: hidden;
            margin-bottom: -10px;
        }
    }
    `;

export const Fields = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px;

    .input {
        margin-top: 15px;
    }
`;

export const Tittle = styled.h2`
margin-bottom: 20px;
    font-weight: 500;
`;

export const TwoFields = styled.div`
    display: grid;
    grid-template-columns: 45% 45%;
    justify-content: space-between;
    width: 100%;
`;

export const ButtonLog = {
    marginTop: '60px',
    fontSize: "15px",
    textTransform: "capitalize",
    padding: '13px 13px',
    width: "100%",
    backgroundColor: "#1976D2"
};