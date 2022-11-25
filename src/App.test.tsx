import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders sonething link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Скоро/i);
  expect(linkElement).toBeInTheDocument();
});
