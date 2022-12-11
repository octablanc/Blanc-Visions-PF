import { Sales } from './components/Sales/Sales';
import { Slider } from './components/Slider/Slider';

//tengo que mostrar el slider, y las cards de productos seleccionados
export const Home = () => {
  return (
    <div className='container'>
      <Slider />
      <hr></hr>
      <h3 className='text-center'>Featured products</h3>
      <Sales />
    </div>
  );
};
