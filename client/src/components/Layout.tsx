import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <h1>Header</h1>
      <Outlet />
      <h1>Footer</h1>
    </div>
  );
};
