import { parse } from "./utils";

// note: an example with two sentences divided by new line character

const parseStep2 = (t) => {
  const divider = '\n';
  const divide = t.split(divider);
  divide.length > 1 ? divide[0] += divider : divide;

  return divide.map(el => parse(el));
}

export default parseStep2;