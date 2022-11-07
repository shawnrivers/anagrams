import { readWordList } from './utils/readWordList';
import * as path from 'path';
import { getAnagrams } from './utils/getAnagrams';
import { benchmark } from './utils/benchmark';

const wordList = readWordList(path.join(__dirname, '../data/wordlist.txt'));

console.log(
  benchmark(
    () =>
      wordList
        .map((word) => getAnagrams(word, wordList))
        .filter((anagrams) => anagrams.length > 0).length
  )
);
