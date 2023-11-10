import { isValidInput, isValidName } from '../../helpers/FormHelpers';

describe('form helpers', () => {
  it('should return true for HTMLInputElement', () => {
    const inputElement = document.createElement('input');
    expect(isValidInput(inputElement)).toBe(true);
  });

  it('should return true for HTMLTextAreaElement', () => {
    const textAreaElement = document.createElement('textarea');
    expect(isValidInput(textAreaElement)).toBe(true);
  });

  it('should return false for other element types', () => {
    const divElement = document.createElement('div');
    expect(isValidInput(divElement)).toBe(false);
  });

  it('should return false for null', () => {
    expect(isValidInput(null)).toBe(false);
  });

  it('should return true for valid names', () => {
    expect(isValidName('John Doe')).toBe(true);
    expect(isValidName('María José')).toBe(true);
  });

  it('should return false for invalid names', () => {
    expect(isValidName('John123')).toBe(false);
    expect(isValidName('María@José')).toBe(false);
  });

  it('should return false for empty strings', () => {
    expect(isValidName('')).toBe(false);
  });

  it('should return false for strings with only spaces', () => {
    expect(isValidName('   ')).toBe(false);
  });
});