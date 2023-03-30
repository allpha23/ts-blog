import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../test-utils';
import userEvent from '@testing-library/user-event';
import Blog from '../pages/Blog';

describe('Testando Blog', () => {
  test('se contem um titulo e um subtitulo', () => {
    render(<Blog />);

    const title = screen.getByRole('heading', { name: /Daily Blog/i, level: 1 });
    const subtitle = screen.getByText('um lugar incrível para se tornar produtivo e entretido por meio de atualizações diárias')
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });

  test('se existe blogs', async () => {
    render(<Blog />);

    const blogTitle = await screen.findAllByRole('heading', {level: 4 });
    expect(blogTitle).not.toHaveLength(0);
  });

  test('se ao clicar no blog exibe os comentários', async () => {
    render(<Blog />);

    const blog = await screen.findAllByRole('heading', {level: 4 });
    userEvent.click(blog[0]);
    const btnComentar = await screen.findByRole('button', { name: 'Comentar' });
    expect(btnComentar).toBeInTheDocument();
  });
});

