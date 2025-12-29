const getAcronym = (entityString: string): string => {
  if (!entityString) {
    return '';
  }
  const entitySplitted = entityString.split(' ');
  if (entitySplitted.length === 1) {
    return entityString.substring(0, 2);
  }
  const result = entityString
    .split(/\s/)
    .reduce(
      (accumulator: string, word: string) =>
        accumulator + word.charAt(0).toLocaleUpperCase(),
      ''
    )
    .substring(0, 2);
  return result;
};

const isAllInUpperCase = (str): boolean => {
  return str === str.toUpperCase();
}


export { getAcronym, isAllInUpperCase };