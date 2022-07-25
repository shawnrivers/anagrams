import * as fs from 'fs';
import * as path from 'path';

export function readWordList(pathname: string): string[] {
  const file = fs.readFileSync(pathname, {
    encoding: 'utf-8',
  });
  const wordList = file.split('\n');
  return wordList;
}
