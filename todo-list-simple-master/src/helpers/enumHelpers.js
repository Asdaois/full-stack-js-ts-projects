export const getKeysFromObject = (object) => {

  const keys = []
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      keys.push(key);
    }
  }

  return keys;
}