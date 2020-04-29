const objectKeysToArray = (obj) => {
  const arr = [];
  for (const property in obj) {
    arr.push(property);
  }
  return arr;
};

const objectKeys = (obj) => {
  const arr = [];
  for (let key in obj) {
    let value = obj[key];
    arr.push(value);
  }
  return arr;
};

export { objectKeysToArray, objectKeys };
