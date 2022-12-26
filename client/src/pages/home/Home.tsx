import { Sales } from './components/Sales/Sales';
import { Slider } from './components/Slider/Slider';

export const Home = () => {
  return (
    <>
      <Slider />

      <h3 className='text-center'>Featured products</h3>
      <Sales />
    </>
  );
};
