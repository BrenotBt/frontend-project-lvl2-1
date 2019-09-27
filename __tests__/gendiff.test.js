import gendiff from '../src';
import result from '../__fixtures__/result';

test('gendiff', () => {
  expect(gendiff('./__fixtures__/before.json', './__fixtures__/after.json')).toBe(result);
  expect(gendiff(`${__dirname}/../__fixtures__/before.json`, `${__dirname}/../__fixtures__/after.json`)).toBe(result);
});