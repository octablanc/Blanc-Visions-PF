import styled from 'styled-components';
import { BsFillEnvelopeOpenFill, BsFillTelephoneFill } from '../../icons/index';

export const About = () => {
  const Columns = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    box-shadow: 24px 29px 88px 0px rgba(0, 0, 0, 0.1);
  `;

  return (
    <div className='container'>
      <Columns>
        <div>
          <h3>About us</h3>
          <p>
            Somos una empresa dedicada a la venta de productos de calidad, con
            una amplia gama de productos para todos los gustos y necesidades del
            cliente.
          </p>
        </div>
        <div>
          <h3>Contact us</h3>
          <BsFillEnvelopeOpenFill />
          <span>info@kingcomm.com</span>
          <BsFillTelephoneFill />
          <span>+54 1121838240</span>
        </div>
      </Columns>
    </div>
  );
};
