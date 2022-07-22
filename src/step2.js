import { parse } from "./utils";

// note: an example with two sentences divided by new line character

const parseStep2 = (t) => {
  const divider = '\n';
  const divide = t.split(divider);
  divide[0] += divider;

  return divide.map(el => parse(el));
}

export default parseStep2;