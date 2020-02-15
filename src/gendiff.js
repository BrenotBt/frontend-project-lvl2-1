import parse from './parsers';
import getPropertyAction from './utils';
import buildAst from './build-ast';
import formatRegular from './formatters/formatter-regular';
import formatPlain from './formatters/formatter-plain';
import formatJson from './formatters/formatter-json';


const formaters = [
  {
    name: 'regular',
    formatDiff: (ast) => formatRegular(ast),
  },
  {
    name: 'plain',
    formatDiff: (ast) => formatPlain(ast),
  },
  {
    name: 'json',
    formatDiff: (ast) => formatJson(ast),
  },
];

const gendiff = (file1, file2, { format = 'regular' }) => {
  const obj1 = parse(file1);
  const obj2 = parse(file2);
  const { formatDiff } = getPropertyAction(formaters, 'name', format);
  const ast = buildAst(obj1, obj2);
  const result = formatDiff(ast);

  // console.log(result);
  return result;
};

export default gendiff;
