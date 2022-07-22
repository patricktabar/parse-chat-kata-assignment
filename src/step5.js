import { parse, arrFromDateSmart } from "./utils";

// note: an example with a date in the text of the Agent

const parseStep5 = (t) => {
  const arr = arrFromDateSmart(t);
  return arr.map(el => parse(el));
}

export default parseStep5;
