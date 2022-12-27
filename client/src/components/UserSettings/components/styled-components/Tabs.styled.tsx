import styled from 'styled-components';

export const BoxTabs = {
    backgroundColor: 'white',
    typography: 'body1', 
    fontSize: '18px',
    borderRadius: '5px',
    'h2:after':{
        backgroundColor: 'transparent',
        width: '500px'
    }
};

export const BoxTabList = { 
    borderRight: '1px solid #d1d1d1', 
    width: '25rem' 
};

export const Title = styled.h2`
    padding: 30px;
    padding-left: 50px;
    color: #4b4b4b;
`;

export const TabField = {
    padding: '0px', 
    fontSize: '15px', 
    textTransform: 'capitalize', 
    alignItems: 'flex-start' 
};

export const TabFieldContainer = styled.div`
    display: flex; 
    align-items: center;
    padding-left: 20px;
`;

export const IconS = { 
    width: '23px', 
    height: '23px' 
};

export const SpanTab = styled.span`
    margin-left: 10px;
`;