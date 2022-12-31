import { useState } from 'react';
import { MiniatureBackground, MiniatureContent } from '../styled-components/CreateProduct.styled';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function Miniature({ imageUrl, id, deleteImage } : { imageUrl: string; id: number; deleteImage: Function;  }) {
    const [showContent, setShowContent] = useState(false);
    return (
        <MiniatureBackground
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
            onMouseEnter={() => setShowContent(true)}
            onMouseLeave={() => setShowContent(false)}
            id={id.toString()}
        >
            {
                showContent &&
                <MiniatureContent onClick={()=> deleteImage(id)}>
                    <DeleteForeverIcon style={{ color: '#fafafa', fontSize: '30px' }}/>
                </MiniatureContent>
            }
        </MiniatureBackground>
    );
}