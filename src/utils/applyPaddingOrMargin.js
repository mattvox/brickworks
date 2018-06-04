export default function(value) {
  switch (typeof value) {
    case 'number':
      return `${value}px`;
    case 'string':
      return value;
    default:
      return false;
  }
}
