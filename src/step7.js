import { parseSmart, arrFromDateSmartNoColon, fillFullnameType } from "./utils";

// note: an example in which there is no colon after both Agent and Customer names

const parseStep7 = (t) => {
  const arr = arrFromDateSmartNoColon(t).map(el => parseSmart(el));
  return fillFullnameType(arr);
}

export default parseStep7;
