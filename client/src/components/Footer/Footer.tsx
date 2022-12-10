import { AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { SiTiktok } from 'react-icons/si';
import { FooterBar, GridFooter, Icons } from './styled-components/styles';

export const Footer = () => {
  return (
    <FooterBar>
      <GridFooter className='container'>
        <div>
          <h3>Sobre Nosotros</h3>
          <p>
            Somos una empresa dedicada a la venta de productos de calidad, con
            una amplia gama de productos para todos los gustos y necesidades del
            cliente.
          </p>
        </div>

        <div>
          <h3>Categorías</h3>
          <ul>
            <li>Inicio</li>
            <li>Productos</li>
            <li>Nosotros</li>
            <li>Contacto</li>
          </ul>
        </div>

        <div>
          <h3>Información</h3>
          <ul>
            <li>Términos y Condiciones</li>
            <li>Privacidad</li>
            <li>Cookies</li>
            <li>Trabaja con nosotros</li>
          </ul>
        </div>

        <div>
          <h3>Síguenos</h3>
          <p>Nuestras redes sociales</p>
          <Icons>
            <AiFillFacebook />
            <BsTwitter />
            <AiOutlineInstagram />
            <SiTiktok />
          </Icons>
        </div>
      </GridFooter>
    </FooterBar>
  );
};
