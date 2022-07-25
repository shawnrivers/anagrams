import { readWordList } from './utils/readWordList';
import * as path from "path"

const wordList = readWordList(path.join(__dirname, '../data/wordlist.txt'));

console.log(wordList);
