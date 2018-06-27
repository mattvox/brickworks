import media from '../mediaTemplate';

describe('Utility function - mediaTemplate', () => {
  const defaultBreakpoints = {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  };

  const mockBreakpoints = {
    sm: '200px',
    md: '400px',
    lg: '600px',
    xl: '800px',
    ham: 'sandwich',
  };

  const testMediaCss = breakpointsObj =>
    Object.keys(breakpointsObj).forEach(key => {
      expect(media(breakpointsObj)[key]``[0]).toContain('@media', 'min-width');
      expect(media(breakpointsObj)[key]``).toEqual(
        expect.arrayContaining([breakpointsObj[key]])
      );
    });

  it('should take no arguments, use default breakpoints, return object with keys sm, md, lg, xl', () => {
    expect(media()).toHaveProperty('sm');
    expect(media()).toHaveProperty('md');
    expect(media()).toHaveProperty('lg');
    expect(media()).toHaveProperty('xl');
  });

  it('should take no arguments, use default breakpoints, return correct css', () => {
    Object.keys(defaultBreakpoints).forEach(key => {
      expect(media()[key]``[0]).toContain('@media', 'min-width');
      expect(media()[key]``).toEqual(
        expect.arrayContaining([defaultBreakpoints[key]])
      );
    });
  });

  it('should accept breakpoints object, "ignore" invalid keys, return correct css', () => {
    testMediaCss(mockBreakpoints);
  });
});
