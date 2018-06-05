export default function(Component, props) {
  const { defaultProps = {} } = Component;

  if (props.as && props.as !== defaultProps.as) return props.as;
  return defaultProps.as || 'div';
}
