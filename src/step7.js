import { parseSmart, arrFromDateSmartNoColon } from "./utils";

// note: an example in which there is no colon after both Agent and Customer names

const parseStep7 = (t) => {
  const arr = arrFromDateSmartNoColon(t);
  return arr.map(el => parseSmart(el));
}

export default parseStep7;
