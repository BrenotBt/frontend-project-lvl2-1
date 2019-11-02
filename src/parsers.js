import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import ini from 'ini';

const getContent = file => fs.readFileSync(`${file}`, 'utf8');
const isEqual = (file, format) => path.extname(file) === format;

const fileParsers = [
  {
    name: 'json',
    check: file => isEqual(file, '.json'),
    parse: file => JSON.parse(getContent(file)),
  },
  {
    name: 'yml',
    check: file => isEqual(file, '.yml'),
    parse: file => yaml.safeLoad(getContent(file)),
  },
  {
    name: 'ini',
    check: file => isEqual(file, '.ini'),
    parse: file => ini.parse(getContent(file)),
  },
];

const getFileParser = file => fileParsers.find(({ check }) => check(file));

export default (file) => {
  const { parse } = getFileParser(file);
  return parse(file);
};
