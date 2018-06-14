import applyFlex from '../applyFlex';

describe('Utility function - applyFlex', () => {
  it('should accept a number and return it as the flex css property', () => {
    expect(applyFlex(1)).toContain('1');
  });

  it('should accept an array and return it as the flex css property', () => {
    expect(applyFlex([1, 2, 3])).toContain('1');
    expect(applyFlex([1, 2, 3])).toContain('2');
    expect(applyFlex([1, 2, 3])).toContain('3%');
  });

  it('should return defaults if passed an array with missing values', () => {
    expect(applyFlex([])).toContain('0');
    expect(applyFlex([])).toContain('1');
    expect(applyFlex([])).toContain('auto');
  });

  it('should NOT accept an object and return invalid values as flex css property', () => {
    expect(applyFlex({ random: 'bad' })).not.toContain('bad');
    expect(applyFlex({ random: 'bad' })).toBe(0);
  });

  it('should return 0 when passed anything other than an array or number', () => {
    expect(applyFlex('this is bad')).toBe(0);
  });
});
