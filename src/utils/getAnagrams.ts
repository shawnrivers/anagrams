import { getCharCombinations } from './getCharCombinations';

export function getAnagrams(input: string, wordList: string[]): string[] {
  const charCombinations = getCharCombinations(input);
  return charCombinations.filter((combination) =>
    wordList.includes(combination)
  );
}
