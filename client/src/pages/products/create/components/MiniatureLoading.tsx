import { MiniatureBackground } from '../styled-components/CreateProduct.styled';
import CircularProgress from '@mui/material/CircularProgress';

export default function MiniatureLoading() {
    return (
        <MiniatureBackground style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            backgroundColor: '#0000008d'
        }}>
            <CircularProgress size={'20px'} style={{ margin: '0px', padding: '0px', color: 'white' }}/>
        </MiniatureBackground>
    );
}