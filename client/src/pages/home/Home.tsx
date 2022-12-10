import { Sales } from './components/Sales/Sales';
import { Slider } from './components/Slider';

//tengo que mostrar el slider, y las cards de productos seleccionados
export const Home = () => {
  return (
    <div className='container'>
      <div>
        <Slider />
      </div>
      <hr></hr>
      <h3 className='text-center'>Featured products</h3>
      <div>
        <Sales />
      </div>
    </div>
  );
};
