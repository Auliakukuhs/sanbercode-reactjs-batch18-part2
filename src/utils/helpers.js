export function capitalize(string) {
  if (typeof string !== 'string') {
    return string;
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function convertKilogram(num) {
  let number = Number(num);
  return number/1000 + ' kg'
}