export const sum = (a, b) => {
  if (!isNaN(a) && !isNaN(b)) {
    return a + b;
  }
  return 0;
}