import applyCssWithUnit from '../applyCssWithUnit';

describe('Utility function - applyCssWithUnit', () => {
  it('should accept a number and return it with a unit of px', () => {
    expect(applyCssWithUnit(10)).toBe('10px');
  });

  it('should accept a number and return it with a unit of em', () => {
    expect(applyCssWithUnit(10, 'em')).toBe('10em');
  });

  it('should accept a string and simply return it', () => {
    expect(applyCssWithUnit('50px')).toBe('50px');
  });

  it('should return false when passed anything other than a string or number', () => {
    expect(applyCssWithUnit({})).toBe(false);
  });
});
