function innerGetCharCombinations(
  input: string,
  length: number,
  currStr: string
): string[] {
  if (currStr.length === length) return [currStr];

  const result: string[] = [];

  for (let i = 0; i < input.length; i++) {
    const newCurrStr = currStr + input[i];

    const inputChars = [...input];
    inputChars.splice(i, 1);
    const newInput = inputChars.join('');

    result.push(...innerGetCharCombinations(newInput, length, newCurrStr));
  }

  return result;
}

export function getCharCombinations(input: string): string[] {
  return innerGetCharCombinations(input, input.length, '');
}
