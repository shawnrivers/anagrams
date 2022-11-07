import * as fs from 'fs';
import * as path from 'path';

export function readWordList(
  pathname: string,
  options: Partial<{ ignoreCase: boolean }> = {}
): string[] {
  const { ignoreCase = false } = options;
  const file = fs.readFileSync(pathname, {
    encoding: 'utf-8',
  });
  const wordList = file.split('\n');
  return wordList.map((word) => (ignoreCase ? word.toLocaleLowerCase() : word));
}
