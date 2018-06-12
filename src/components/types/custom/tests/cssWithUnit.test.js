import cssWithUnit, { isValid } from '../cssWithUnit';

describe('Custom prop type - cssWithUnit', () => {
  describe('isValid function', () => {
    it('should accept a number and return true', () => {
      expect(isValid(10)).toBe(true);
    });

    it('should accept undefined and return true', () => {
      expect(isValid(undefined)).toBe(true);
    });

    it('should accept "auto" and return true', () => {
      expect(isValid('auto')).toBe(true);
    });

    it('should accept "initial" and return true', () => {
      expect(isValid('initial')).toBe(true);
    });

    it('should accept "inherit" and return true', () => {
      expect(isValid('inherit')).toBe(true);
    });

    it('should return false for any invalid type', () => {
      expect(isValid({ invalid: 'type' })).toBe(false);
    });

    it('should accept a valid px value ("10px") and return truthy', () => {
      expect(isValid('10px')).toBeTruthy();
    });

    it('should accept a valid em value with a space ("12 em") and return truthy', () => {
      expect(isValid('12 em')).toBeTruthy();
    });

    it('should accept a valid value with additional spaces ("  12 em") and return null', () => {
      expect(isValid(' 12 em')).toBe(null);
    });

    it('should accept an invalid value ("bad input") and return null', () => {
      expect(isValid('bad input')).toBe(null);
    });
  });

  const mockProps = {
    validProp: '10px',
    invalidProp: 'dinosaur',
  };

  const errorMessage = 'Invalid prop invalidProp on Mock';

  it('should accept a valid prop ("20px") and return null', () => {
    expect(cssWithUnit(mockProps, 'validProp', 'Mock')).toBe(null);
  });

  it('should accept an invalid prop ("dinosaur") and return an error', () => {
    expect(cssWithUnit(mockProps, 'invalidProp', 'Mock')).toEqual(
      new Error(errorMessage),
    );
  });
});

export default function(props, prop, component) {
  return isValid(props[prop])
    ? null
    : new Error(`Invalid prop ${prop} on ${component}`);
}
