import flexWithArray from '../flexWithArray';

describe('Custom prop type - flexWithArray', () => {
  it('should accept a valid array and return null', () => {
    const props = [1, 2, '50%'];

    expect(flexWithArray(props, 0, 'Mock', 'location', 'flex')).toBe(null);
    expect(flexWithArray(props, 1, 'Mock', 'location', 'flex')).toBe(null);
    expect(flexWithArray(props, 2, 'Mock', 'location', 'flex')).toBe(null);
  });

  it('should return a new error if the array has invalid flex basis element', () => {
    const props = [1, 1, 'dinosaur'];
    const errorMessage = 'Invalid prop flex on Mock';

    expect(flexWithArray(props, 2, 'Mock', 'location', 'flex')).toEqual(
      new Error(errorMessage),
    );
  });

  it('should return a new error if the array has a length greater than three', () => {
    const props = [1, 1, 'auto', 1, 5];
    const errorMessage = 'Invalid prop flex on Mock';

    expect(flexWithArray(props, 0, 'Mock', 'location', 'flex')).toEqual(
      new Error(errorMessage),
    );
  });

  it('should return a new error if the array contains anything but a number in first two indexes', () => {
    const props = ['bad', 1, 'auto'];
    const errorMessage = 'Invalid prop flex on Mock';

    expect(flexWithArray(props, 0, 'Mock', 'location', 'flex')).toEqual(
      new Error(errorMessage),
    );
  });
});
