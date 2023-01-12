// import { AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { useState } from 'react';
// import { BsTwitter } from 'react-icons/bs';
// import { SiTiktok } from 'react-icons/si';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
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
  Input,
  Btn,
  Newsletter,
} from './styled-components/styles';
import { FlashMsg } from '../FlashMsg/FlashMsg';

export const Footer = () => {
  const [success, setSuccess] = useState(false);
  const [msg, setMsg] = useState('');

  const [input, setInput] = useState({ mail: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log('input:', input);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // console.log(input);
    e.preventDefault();
    emailjs
      .send('service_dpfn6c5', 'template_np52mja', input, 'JYjoaKNcqXdcfIf3D')
      .then(
        (response: any) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (err: any) => {
          console.log('FAILED...', err);
        }
      );
    setSuccess(true);
    setMsg('Suscripción recibida!');
  };

  return (
    <FooterBar>
      <GridFooter className='container'>
        <Newsletter>
          <form>
            <h4>Recibí las últimas novedades</h4>
            <Input
              placeholder='Ingresá tu email'
              type='email'
              name='mail'
              value={input.mail}
              onChange={handleChange}
            />
            <Btn type='submit' onClick={e => handleSubmit(e)}>
              Suscribirme
            </Btn>
          </form>
        </Newsletter>
        {success ? <FlashMsg msg={msg}>{msg}</FlashMsg> : ''}

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
              <Link to='/termsyconditions'>Términos y Condiciones</Link>
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
