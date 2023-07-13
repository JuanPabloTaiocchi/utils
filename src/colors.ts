/**
 * Check if an hexadecimal color string is Dark
 * @param color: in hexadecimal format
 * @returns True if color is dark
 */
const isColorDark = (color: string): boolean => {
  const stringToReplace = color.length < 5 ? /./g : '';
  const colorRegMatch = +(
    '0x' + color.slice(1).replace(stringToReplace, '$&$&')
  );
  /* tslint:disable:no-bitwise */
  const r = colorRegMatch >> 16;
  const g = (colorRegMatch >> 8) & 255;
  const b = colorRegMatch & 255;
  /* tslint:enable:no-bitwise */
  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
  // Using the HSP value, determine whether the color is light or dark
  if (hsp > 127.5) {
    return false;
  }
  return true;
}

export { isColorDark };