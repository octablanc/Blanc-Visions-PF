import { AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { useState } from 'react';
import { BsTwitter } from 'react-icons/bs';
import { SiTiktok } from 'react-icons/si';
import { Link } from 'react-router-dom';
import {
  FooterBar,
  GridFooter,
  Icons,
  Input,
  Btn,
  Newsletter,
} from './styled-components/styles';

export const Footer = () => {
  const [input, setInput] = useState({
    mail: '',
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    console.log(input);
  };

  const handleSubmit = () => {};

  return (
    <FooterBar>
      <GridFooter className='container'>
        <Newsletter>
          <h4>Recibí las últimas novedades</h4>
          <Input
            placeholder='Ingresá tu email'
            name='mail'
            value={input.mail}
            onChange={handleChange}
          />
          <Btn onSubmit={handleSubmit}>Suscribirme</Btn>
        </Newsletter>

        <div>
          <h3>Categorías</h3>
          <ul>
            <li>
              <Link to='/'>Inicio</Link>
            </li>
            <li>Productos</li>
            <li>
              <Link to='about'>Nosotros</Link>
            </li>
            {/* <li>Contacto</li> */}
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
