import { Columns, Box } from './styled-components/about';
import { BsFillEnvelopeOpenFill, BsFillTelephoneFill } from '../../icons/index';

export const About = () => {
  return (
    <div className='container'>
      <Columns>
        <Box>
          <h3>About us</h3>
          <p>
            Somos una empresa dedicada a la venta de productos de calidad, con
            una amplia gama de productos para todos los gustos y necesidades del
            cliente.
          </p>
        </Box>
        <Box>
          <h3>Contact us</h3>
          <p>
            <BsFillEnvelopeOpenFill style={{ marginRight: '2rem' }} />
            <span>info@kingcomm.com</span>
          </p>
          <p>
            <BsFillTelephoneFill style={{ marginRight: '2rem' }} />
            <span>+54 1121838240</span>
          </p>
        </Box>
      </Columns>
    </div>
  );
};
