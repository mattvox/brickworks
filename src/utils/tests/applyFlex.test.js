import applyFlex from '../applyFlex';

describe('Utility function - applyFlex', () => {
  it('should accept a number and return it as the value of the flex css property', () => {
    expect(applyFlex(1)).toContain('1');
  });

  it('should accept an object with the grow key and return it as the value of the flex css property', () => {
    expect(applyFlex({ grow: 1, shrink: 2, basis: '50%' })).toContain('1');
  });

  it('should accept an object with the shrink key and return it as the value of the flex css property', () => {
    expect(applyFlex({ grow: 1, shrink: 2, basis: '50%' })).toContain('2');
  });

  it('should accept an object with the basis key and return it as the value of the flex css property', () => {
    expect(applyFlex({ grow: 1, shrink: 2, basis: '50%' })).toContain('50%');
  });

  it('should accept an object but NOT return invalid values as flex css property', () => {
    expect(applyFlex({ random: 'bad' })).not.toContain('bad');
  });

  it('should return 0 when passed anything other than an object or number', () => {
    expect(applyFlex('this is bad')).toBe(0);
  });
});
