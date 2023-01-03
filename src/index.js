export function deepClone(value) {
  if (typeof value !== 'object') {
    return value;
  }

  let target;
  if (Array.isArray(value)) {
    target = [];
    for (let i = 0; i < value.length; i++) {
      target[i] = deepClone(value[i]);
    }
  } else {
    target = {};
    for (const prop in value) {
      if (Object.prototype.hasOwnProperty.call(value, prop)) {
        target[prop] = deepClone(value[prop]);
      }
    }
  }

  return target;
}
