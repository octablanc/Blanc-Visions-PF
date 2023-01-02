import { useEffect, useState } from "react";
import { ButtonNext, ButtonPrev, SliderContainer, SliderContent, Views } from "../styled-components/CreateProduct.styled";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function SliderCreate({ images }: { images: string[] }) {
    const [image, setImage] = useState(0);

    function previous() {
        if (image > 0)
            setImage(image - 1);
    }

    function next() {
        if (image < images.length - 1)
            setImage(image + 1);
    }

    if (image === images.length)
        previous();

    return (
        <SliderContainer style={{
            backgroundImage: images.length ? `url(${images[image]})` : 'url(https://www.manchesterdirect.com.au/assets/themes/QCS_D/img/default_product.gif?1667962863)',
        }}>
            <SliderContent>
                {
                    images.length > 0 &&
                    <>
                        <ButtonPrev onClick={previous}>
                            <KeyboardArrowLeftIcon style={{ fontSize: '25px', color: 'white' }} />
                        </ButtonPrev>


                        <ButtonNext onClick={next}>
                            <KeyboardArrowRightIcon style={{ fontSize: '25px', color: 'white' }} />
                        </ButtonNext>

                        <Views>
                            <span>
                                {
                                    `${image + 1} / ${images.length ? images.length : 1}`
                                }
                            </span>
                        </Views>
                    </>
                }

            </SliderContent>
        </SliderContainer >
    );
}