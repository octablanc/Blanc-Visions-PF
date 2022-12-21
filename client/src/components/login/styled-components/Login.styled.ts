import { padding } from "@mui/system";
import styled from "styled-components";

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

export const LoginContainer = styled.div`
    padding: 40px 70px 0px 70px;

    h2 {
        margin-bottom: 25px;
    }
`;

export const CreateContainer = styled.div`
    display: flex;
    border-top: 1px solid black;
    border-color: #BFBFBF;
    color: #898989;
    width: 75%;
    justify-content: center;
    align-items: center;
    height: 90px;

    span {
        color: #63A8F6;
        cursor: pointer;
        user-select: none;
        
        :hover {
            color: #2475D1;
        }
    }
`;

export const ButtonLog = {
    marginTop: '10px',
    fontSize: "15px",
    textTransform: "capitalize",
    height: "50px",
    width: "100%",
};

export const ForgetPassword = styled.span`
  margin: 40px 40px;
  color: #63A8F6;
  cursor: pointer;
  user-select: none;
  width: 185px;
  
  :hover {
      color: #2475D1;
  }
`;

export const ImagLogin = styled.img`
    width: 100%;
    height: 100%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    object-fit: cover;
`;

export const Inputs = styled.div`
    position: relative;
    margin-top: 70px;
    width: 420px;
    height: 170px;
`;

export const Mail = { 
    position: 'absolute', 
    top: '0', 
    left:'0px', 
    width: "100%"
};

export const Password = { 
    position: 'absolute', 
    top: '90px', 
    left:'0px', 
    width: "100%" 
}

