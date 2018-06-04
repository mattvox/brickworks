export default function(value, unit = 'px') {
  switch (typeof value) {
    case 'number':
      return `${value}${unit}`;
    case 'string':
      return value;
    default:
      return false;
  }
}
