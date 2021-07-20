import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Commentpopup from './Commentpopup';

describe('<Commentpopup />', () => {
  test('it should mount', () => {
    render(<Commentpopup />);
    
    const commentpopup = screen.getByTestId('Commentpopup');

    expect(commentpopup).toBeInTheDocument();
  });
});