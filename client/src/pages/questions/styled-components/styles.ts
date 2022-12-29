import styled from 'styled-components';

export const Container = styled.div`    
    width: 90%;
`;

export const QyA = styled.div`
    // background-color: bisque;
    h4 {
        font-weight: bold;
        font-size: 2rem;
        color: ${(props) => props.theme.colors.secondary};
    };
    p {
        text-decoration: underline;
    };
`;