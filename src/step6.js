import { parse, arrFromDateSmart } from "./utils";

// note: an example with a date in the text of the Agent

const parseStep6 = (t) => {
  const arr = arrFromDateSmart(t);
  return arr.map(el => parse(el)).map((el, i) => i === 0 ? { ...el, type: 'customer' } : { ...el, type: 'agent' });
}

export default parseStep6;
