import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('affiche l’identité et les sections principales du portfolio', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /soulaymane benaddi/i })).toBeInTheDocument();
  expect(screen.getByText('Développeur Full-Stack')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Projets personnels' })).toBeInTheDocument();
});
