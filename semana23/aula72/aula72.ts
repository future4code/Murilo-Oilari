/**Exercício 01 */
const isOneEdit = (
  source: string, 
  comparision: string
): boolean => {
  if (
    comparision.length > source.length + 1 ||
    comparision.length < source.length - 1
  ) {
    return false;
  };
  let communCharQuantity = 0;

  for (const char of comparision) {
    if (source.indexOf(char) !== -1) {
      communCharQuantity++;
    }
  }
  return (
    communCharQuantity <= source.length + 1 &&
    communCharQuantity >= source.length - 1
  );
};


/**Exercício 02 */
export const stringCompression = (
  input: string
  ): string => {
  const substrings: string[] = [];
  let lastChar = input[0];
  let charCount = 0;

  for (const char of input) {
    if (char !== lastChar) {
      substrings.push(lastChar + charCount);
      lastChar = char;
      charCount = 0;
    }
    charCount++;
  }

  substrings.push(lastChar + charCount);
  let result = "";
  for (const key of substrings) {
    result += key;
  }

  return result.length > input.length ? input : result;
};