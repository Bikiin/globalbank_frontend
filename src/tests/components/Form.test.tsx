import { render, fireEvent, screen } from '@testing-library/react';

import { Form } from "../../components/Form/Form";
import { PostsProvider } from '../../providers/PostsProvides';

describe('Form Component', () => {
  it('submits the form data correctly', () => {
    render(
      <PostsProvider>
        <Form />
      </PostsProvider>
    );

    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    fireEvent.change(screen.getByLabelText(/nombre completo/i), {
      target: { value: 'John Doe' }
    });
    fireEvent.change(screen.getByLabelText(/fecha de nacimiento/i), {
      target: { value: '1990-01-01' }
    });
    fireEvent.change(screen.getByLabelText(/comentarios/i), {
      target: { value: 'Un comentario de ejemplo' }
    });

    fireEvent.submit(screen.getByRole('button', { name: /Guardar/i }));

    expect(setItemSpy).toHaveBeenCalled();
    expect(setItemSpy).toHaveBeenCalledWith('posts', expect.any(String));
    setItemSpy.mockRestore();
  });
});
