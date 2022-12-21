import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Theme from './styled-components/theme';
import { Provider } from 'react-redux';
import { store } from './redux/app/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <Theme>
      <App />
    </Theme>
  </Provider>
);
