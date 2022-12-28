import { Columns, Box } from './styled-components/about';
import {
  BsFillEnvelopeOpenFill,
  BsWhatsapp,
  BsFillTelephoneFill,
} from '../../icons/index';
import { Sales } from '../home/components/Sales/Sales';

export const About = () => {
  return (
    <div className='container'>
      <Columns>
        <Box>
          <h3>Nosotros</h3>
          <p>
            Kingcomm tiene sus inicios en 2022, enfocado en brindar a sus
            clientes los mejores equipos y accesorios siempre de las mejores
            marcas, para brindarles la calidad y seguridad que merecen.
          </p>
          <p>
            Somos una tienda online abierta las 24hs los 365 días del año,
            especializada en fotografía, video e iluminación para el aficionado
            y el profesional.
          </p>
          <p>
            Detrás de la innovación y las nuevas necesidades, buscamos ofrecer
            las últimas tecnologías disponibles del mercado.
          </p>
          <p>
            Para una atención más personalizada podes contactarte vía whatsapp
            de lunes a viernes de 9 a 18hs.
          </p>
        </Box>
        <Box>
          <h3>Contáctanos</h3>
          <p>
            <BsFillEnvelopeOpenFill className='icons' />
            <span>info@kingcomm.com</span>
          </p>
          <p>
            <BsWhatsapp className='icons' />
            <a href='https://walink.co/bfd3d0'>+54 1121838240</a>
          </p>
          <p>
            <BsFillTelephoneFill className='icons' />
            <span>(011) 2100 6019</span>
          </p>
        </Box>
      </Columns>
      <h4>Aprovecha estos descuentos</h4>
      <Sales />
    </div>
  );
};
