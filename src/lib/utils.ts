export const cn = (classes: { [key: string]: string }, names: string) => {
  // filter out any undefined or null values in case a class name does not exist in the classes object
  return names
    .split(' ')
    .map((name) => classes[name])
    .filter(Boolean)
    .join(' ');
};
