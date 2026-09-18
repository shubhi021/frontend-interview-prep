const flattenObj = (obj, prefix = '') => {
  let result = {};
  for (let key in obj) {
    let newKey = prefix ? prefix + '.' + key : key;
    let value = obj[key];

    if (typeof value === 'object' && value != null) {
      let nested = flattenObj(value, newKey);
      result = { ...result, ...nested };
    } else {
      result[newKey] = value;
    }
  }
  return result;
};
console.log(flattenObj(response));
