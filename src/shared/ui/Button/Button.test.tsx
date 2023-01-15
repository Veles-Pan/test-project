import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { Button } from 'shared';
import { ButtonThemes } from './Button';

describe('Button', () => {
  test('test render', () => {
    render(<Button>test</Button>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('test with theme param', () => {
    render(<Button theme={ButtonThemes.CLEAN}>test</Button>);
    expect(screen.getByText('test')).toHaveClass('clean');
  });
});
