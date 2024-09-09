type IStartBoundary = '{{' | '<<' | '{{{';
type IEndBoundary = '}}' | '>>' | '}}}';

const boundariesMap: { [key in IStartBoundary]: IEndBoundary } = {
  '{{': '}}',
  '<<': '>>',
  '{{{': '}}}',
};

export const getHighlightedText = (
  text: string,
  options: {
    delimiter?: {
      start: IStartBoundary;
      end: IEndBoundary;
    };
    replaceWith: {
      start: string;
      end: string;
    };
  }
) => {
  const { delimiter = { start: '{{', end: '}}' }, replaceWith } = options;
  if (boundariesMap[delimiter.start] !== delimiter.end)
    throw new Error(`the closing boundary " ${delimiter.end} " does not match the opening " ${delimiter.start} " `);
  const getRegex = (value: string) => new RegExp(value, 'gi');
  if (!text || typeof text !== 'string') return text;
  const result = text
    .replace(getRegex(delimiter.start), replaceWith.start)
    .replace(getRegex(delimiter.end), replaceWith.end);
  return result;
};
