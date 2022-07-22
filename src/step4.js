import { parse, arrFromDate } from "./utils";

// note: an example in which the sentences are not divided by the new line character

const parseStep4 = (t) => {
  const arr = arrFromDate(t);
  return arr.map(el => parse(el));
}

export default parseStep4;
