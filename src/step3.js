import { parse, arrFromString } from "./utils";

// note: an example with two sentences divided by new line character

const parseStep3 = (t) => {
  const arr = arrFromString(t, '\n');
  return arr.map(el => parse(el));
}

export default parseStep3;
