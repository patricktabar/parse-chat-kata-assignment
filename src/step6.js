import { parse, arrFromDateSmart, isRole } from "./utils";

// note: an example with a date in the text of the Agent

const parseStep6 = (t) => {
  const arr = arrFromDateSmart(t);
  const parsed = arr.map(el => parse(el));

  return parsed.map((el, i) => (isRole(el.mention))
    ? el
    : i === 0
      ? { ...el, type: 'customer' }
      : { ...el, type: 'agent' });
}

export default parseStep6;
