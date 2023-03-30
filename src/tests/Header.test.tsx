import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../test-utils';
import Header from '../components/Header';

describe('Testando Header', () => {
  test('se contem 2 links, Login e Resgistrar', () => {
    render(<Header />);
  
    const login = screen.getByText('Login');
    const registrar = screen.getByText('Registrar');
    expect(login).toBeInTheDocument();
    expect(registrar).toBeInTheDocument();
  });
});