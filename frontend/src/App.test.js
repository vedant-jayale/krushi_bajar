// App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';
import ShopContextProvider from './Context/ShopContext.jsx';

test('renders the app without errors', () => {
  render(
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  );
  const appElement = screen.getByTestId('app-container');
  expect(appElement).toBeInTheDocument();
});
