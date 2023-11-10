import { render, screen } from '@testing-library/react';
import { Card } from '../../components/Card/Card';
import { calculateAge } from '../../helpers/CardHelpers'
import '@testing-library/jest-dom'

describe('Card Component', () => {
  it('renders the card with name, formatted birth date, age, and comments', () => {
    const mockPost = {
      name: 'John Doe',
      birth: '1990-01-01',
      comments: 'Example comment'
    };
    const age = calculateAge(mockPost.birth)

    render(<Card {...mockPost} />);

    expect(screen.getByText(mockPost.name)).toBeInTheDocument();
    expect(screen.getByText(`02/01/1990, Edad: ${age} años.`)).toBeInTheDocument();
    expect(screen.getByText(`Comentarios: ${mockPost.comments}`)).toBeInTheDocument();
  });
});
