import { ProductContainer } from '../../styled-components/styles';

interface Props {
  product: {
    name: string;
    id: number;
  };
}
export const AdminProducts = ({ product }: Props) => {
  const { name, id } = product;

  return (
    <ProductContainer>
      <p>{name}</p>
      <p>{id}</p>
    </ProductContainer>
  );
};
