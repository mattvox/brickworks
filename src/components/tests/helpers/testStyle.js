export default (wrapper, style, value) =>
  it(`should have style - ${style}: ${value}`, () => {
    expect(wrapper.find('div')).toHaveStyleRule(style, value);
  });
