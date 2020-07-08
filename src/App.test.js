import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  expect(getByText('R. Raad 2020')).toBeInTheDocument();
});
