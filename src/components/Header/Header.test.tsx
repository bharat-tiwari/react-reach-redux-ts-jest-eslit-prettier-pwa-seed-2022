import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

it('renders app header', () => {
    render(<Header />);
    expect(screen.getByText('App Header')).toBeInTheDocument();
});
