import styled from 'styled-components';
import {
  FaMedal,
  BiSupport,
  BsFillCreditCard2BackFill,
  TbTruckDelivery,
} from '../../../../icons';

const FeaturesContainer = styled.div`
  margin: 5rem 0;

  h2 {
    text-transform: uppercase;
    text-align: center;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
`;

const FeatureItem = styled.div`
  text-align: center;
  /* box-shadow: 0 10px 30px rgb(0 0 0 / 10%); */
  border-radius: 28px;
  background: #e0e0e0;
  box-shadow: 11px 11px 22px #d9d9d9, -11px -11px 22px #e7e7e7;
  overflow: hidden;
  border-radius: 2rem;
  padding: 2rem;
  background-color: white;
`;

const FeatureIcon = styled.i`
  font-size: 4rem;
  font-weight: bold;
  line-height: normal;
  color: ${(props): string => props.theme.colors.primary};
`;
const FeatureContent = styled.div`
  h3 {
    font-size: 1.8rem;
    text-transform: uppercase;
  }
  p {
    margin: 0;
  }
`;

export const Features = () => {
  return (
    <FeaturesContainer>
      <div className='container'>
        <FeaturesGrid>
          <FeatureItem>
            <FeatureIcon>
              <TbTruckDelivery />
            </FeatureIcon>
            <FeatureContent>
              <h3>Envío Rápido</h3>
              <p>Nuestros envíos son rápidos y seguros.</p>
            </FeatureContent>
          </FeatureItem>

          <FeatureItem>
            <FeatureIcon>
              <BsFillCreditCard2BackFill />
            </FeatureIcon>
            <FeatureContent>
              <h3>Pago Seguro</h3>
              <p>Pago seguro con tarjeta de crédito</p>
            </FeatureContent>
          </FeatureItem>

          <FeatureItem>
            <FeatureIcon>
              <BiSupport />
            </FeatureIcon>
            <FeatureContent>
              <h3>Soporte 24/7</h3>
              <p>Soporte para atenderte en cualquier momento.</p>
            </FeatureContent>
          </FeatureItem>

          <FeatureItem>
            <FeatureIcon>
              <FaMedal />
            </FeatureIcon>
            <FeatureContent>
              <h3>Calidad</h3>
              <p>Los mejores productos a tu disposición</p>
            </FeatureContent>
          </FeatureItem>
        </FeaturesGrid>
      </div>
    </FeaturesContainer>
  );
};
