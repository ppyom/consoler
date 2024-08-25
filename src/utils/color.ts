const hexRegExp = /^#(([a-f0-9]{6}([a-f0-9]{2})?)|([a-f0-9]{3}([a-f0-9])?))$/i;

const isHexColor = (hex: string): boolean => {
  return hexRegExp.test(hex);
};

export { hexRegExp, isHexColor };
