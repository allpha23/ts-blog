import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../test-utils';
import BlogItem from '../components/BlogItem';
import { blog, users } from './mocks/index';

describe('Testando Header', () => {
  test('se contem 2 links, Login e Resgistrar', () => {
    render(<BlogItem blog={blog} users={users} commentsOn={() => { }}/>);
  
    const title = screen.getByRole('heading', { level: 4 });
    const owner = screen.getByText('Bret');
    expect(title).toBeInTheDocument();
    expect(owner).toBeInTheDocument();
  });
});