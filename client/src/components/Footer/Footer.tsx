// import { AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai';
// import { useState } from 'react';
// import { BsTwitter } from 'react-icons/bs';
// import { SiTiktok } from 'react-icons/si';
import { Link } from 'react-router-dom';
import {
  BsFillEnvelopeOpenFill,
  BsWhatsapp,
  BsFillTelephoneFill,
  BsGithub,
} from '../../icons/index';
import {
  FooterBar,
  GridFooter,
  Icons,
  // Input,
  // Btn,
  // Newsletter,
} from './styled-components/styles';

export const Footer = () => {
  // const [input, setInput] = useState({
  //   mail: '',
  // });

  // const handleChange = (
  //   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setInput({
  //     ...input,
  //     [event.target.name]: event.target.value,
  //   });
  //   console.log(input);
  // };

  // const handleSubmit = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   event.preventDefault();
  // if(input) {

  //   //add to firebase
  //   db.collection("emails").add({
  //     email: input,
  //   })
  // }
  // };

  return (
    <FooterBar>
      <GridFooter className='container'>
        {/* <Newsletter>
          <form>
            <h4>Recibí las últimas novedades</h4>
            <Input
              placeholder='Ingresá tu email'
              type='email'
              name='mail'
              value={input.mail}
              onChange={handleChange}
            />
            <Btn onSubmit={() => handleSubmit}>Suscribirme</Btn>
          </form>
        </Newsletter> */}

        <div>
          <h3>KingComm</h3>
          <ul>
            <li>
              <Link to='/'>Inicio</Link>
            </li>
            <li>
              <Link to='/products'>Productos</Link>
            </li>
            <li>
              <Link to='about'>Nosotros</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Información</h3>
          <ul>
            <li>
              <Link to='/questions'>Preguntas frecuentes</Link>
            </li>
            <li>
              <Link to='/privacy'>Política de privacidad</Link>
            </li>
            <li>
              <Link to='/termsyconditions'>Términos y condiciones</Link>
            </li>
          </ul>
        </div>

        <div className='contact'>
          <h3>Contactanos</h3>
          <p>
            <BsFillEnvelopeOpenFill className='icons' />
            <span> info@kingcomm.com</span>
          </p>
          <p>
            <BsWhatsapp className='icons' />
            <a href='https://walink.co/bfd3d0' target='_blank' rel='noreferrer'>
              +54 1121838240
            </a>
          </p>
          <p>
            <BsFillTelephoneFill className='icons' />
            <span> (011) 2100 6019</span>
          </p>
        </div>
        <div>
          <h3>Desarrollado por</h3>
          <Icons>
            <p>
              <BsGithub />
              <a
                href='https://github.com/NOELIAFERRER'
                target='_blank'
                rel='noreferrer'
              >
                Lucas Alegre
              </a>
            </p>
            <p>
              <BsGithub />
              <a
                href='https://github.com/octablanc'
                target='_blank'
                rel='noreferrer'
              >
                Octavio Blanc
              </a>
            </p>
            <p>
              <BsGithub />
              <a
                href='https://github.com/F25C'
                target='_blank'
                rel='noreferrer'
              >
                Florencia Caro
              </a>
            </p>
            <p>
              <BsGithub />
              <a
                href='https://github.com/NOELIAFERRER'
                target='_blank'
                rel='noreferrer'
              >
                Noelia Ferrer
              </a>
            </p>
            <p>
              <BsGithub />
              <a
                href='https://github.com/tomasflores24'
                target='_blank'
                rel='noreferrer'
              >
                Tomas Flores
              </a>
            </p>
            <p>
              <BsGithub />
              <a
                href='https://github.com/JohnTicona'
                target='_blank'
                rel='noreferrer'
              >
                John Ticona
              </a>
            </p>
            <p>
              <BsGithub />
              <a
                href='https://github.com/Agagus'
                target='_blank'
                rel='noreferrer'
              >
                Agustina Zanetti
              </a>
            </p>
          </Icons>
        </div>
      </GridFooter>
    </FooterBar>
  );
};
