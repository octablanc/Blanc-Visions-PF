// import { AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { useState } from "react";
// import { BsTwitter } from 'react-icons/bs';
// import { SiTiktok } from 'react-icons/si';
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import {
  BsFillEnvelopeOpenFill,
  BsWhatsapp,
  BsFillTelephoneFill,
} from "../../icons/index";
import {
  FooterBar,
  GridFooter,
  Icons,
  Input,
  Btn,
  Newsletter,
} from "./styled-components/styles";
import { FlashMsg } from "../FlashMsg/FlashMsg";

export const Footer = () => {

  const [success, setSuccess] = useState(false);
  const [msg, setMsg] = useState('');

  const [input, setInput] = useState({mail: ''});

  const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {    
  setInput({
    ...input,
    [e.target.name]: e.target.value
  })
  console.log('input:', input) 
  };

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // console.log(input);
    e.preventDefault();
    emailjs
      .send("service_dpfn6c5", "template_np52mja", input, "JYjoaKNcqXdcfIf3D")
      .then(
        (response: any) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err: any) => {
          console.log("FAILED...", err);
        }
      );  
      setSuccess(true)
      setMsg('Suscripción recibida!')
  };

  return (
    <FooterBar>
      <GridFooter className="container">
        <Newsletter>
          <form>
            <h4>Recibí las últimas novedades</h4>
            <Input
              placeholder="Ingresá tu email"
              type="email"
              name="mail"
              value={input.mail}
              onChange={handleChange}
            />
            <Btn type='submit' onClick={(e) => handleSubmit(e)}>Suscribirme</Btn>
          </form>
        </Newsletter>
        {success ? <FlashMsg msg={msg}>{msg}</FlashMsg>: ''}
        <div>
          {/* <h3>Categorías</h3> */}
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/products">Productos</Link>
            </li>
            <li>
              <Link to="about">Nosotros</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Información</h3>
          <ul>
            <li>
              <Link to="/questions">Preguntas frecuentes</Link>
            </li>
            <li>
              <Link to="/privacy">Política de privacidad</Link>
            </li>
            <li>
              <Link to="/termsyconditions">Términos y Condiciones</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Contactanos</h3>
          <p>
            <BsFillEnvelopeOpenFill className="icons" />
            <span> info@kingcomm.com</span>
          </p>
          <p>
            <BsWhatsapp className="icons" />
            <a href="https://walink.co/bfd3d0"> +54 1121838240</a>
          </p>
          <p>
            <BsFillTelephoneFill className="icons" />
            <span> (011) 2100 6019</span>
          </p>
          {/* <h3>Síguenos</h3>
          <p>Nuestras redes sociales</p>
          <Icons>
            <AiFillFacebook />
            <BsTwitter />
            <AiOutlineInstagram />
            <SiTiktok />
          </Icons> */}
        </div>
      </GridFooter>
    </FooterBar>
  );
};
