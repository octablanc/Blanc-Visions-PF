// import { Features } from './components/Features/Features';
import styled from 'styled-components';
import { Features } from './components/Features/Features';
import { Sales } from './components/Sales/Sales';
import { Slider } from './components/Slider/Slider';

const Container = styled.div`
  width: 95vw;
`;

export const Home = () => {
  return (
    <>
      <Container>
        <Slider />
      </Container>
      <Features />
      <Sales />
    </>
  );
};
