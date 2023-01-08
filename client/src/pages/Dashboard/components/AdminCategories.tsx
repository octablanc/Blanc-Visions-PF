interface Props {
  category: {
    name: string;
    id: number;
  };
}
export const AdminCategories = ({ category }: Props) => {
  const { id, name } = category;
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
    </div>
  );
};
