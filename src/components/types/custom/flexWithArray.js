const message = (prop, component) => `Invalid prop ${prop} on ${component}`;

const regex = /^(auto|0)$|^[+-]?[0-9]+.?([0-9]+)?(px|em|rem|vh|vw|vmin|ex|%|in|cm|mm|pt|pc)$/i;

export default (propValue, key, componentName, location, propFullName) => {
  if (propValue.length > 3) {
    return new Error(message(propFullName, componentName));
  }

  if (typeof propValue[key] !== 'number') {
    if (key !== 2) {
      return new Error(message(propFullName, componentName));
    } else if (!regex.test(propValue[key])) {
      return new Error(message(propFullName, componentName));
    }
  }

  return null;
};
