function isValid(value) {
  switch (typeof value) {
    case 'undefined':
    case 'number':
      return true;
    case 'string': {
      const regex = /^(auto|0)$|^[+-]?[0-9]+.?([0-9]+)?(px|em|rem|vh|vw|vmin|ex|%|in|cm|mm|pt|pc)$/i;
      switch (value) {
        case 'auto':
          return true;
        case 'initial':
          return true;
        case 'inherit':
          return true;
        default:
          return value.match(regex);
      }
    }
    default:
      return false;
  }
}

export default function(props, prop, component) {
  return isValid(props[prop])
    ? null
    : new Error(`Invalid prop ${prop} on ${component}`);
}
