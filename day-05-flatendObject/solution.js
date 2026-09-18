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


//Output
{
age: 21
characteristics.complexion: "dark"
characteristics.hair: "black"
characteristics.height: "6 feet"
name: "Manu"
techStack.framework.name: "Nextjs"
techStack.framework.version: "12"
techStack.language: "Javascript"
}
