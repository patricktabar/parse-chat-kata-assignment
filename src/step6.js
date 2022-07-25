import { parse, arrFromDateSmart, fillFullnameType } from "./utils";

// note: an example with a date in the text of the Agent

const parseStep6 = (t) => {
  const arr = arrFromDateSmart(t).map(el => parse(el));
  return fillFullnameType(arr);
}

export default parseStep6;