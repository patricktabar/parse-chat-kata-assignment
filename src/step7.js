import { parseSmart, arrFromDateSmartNoColon } from "./utils";

// note: an example in which there is no colon after both Agent and Customer names

const parseStep7 = (t) => {
  const arr = arrFromDateSmartNoColon(t);
  const parsed = arr.map(el => parseSmart(el));

  return parsed.map((el, i) => {
    if (!el.type) {
      if (i === 0) return { ...el, type: 'customer' }
      else return { ...el, type: 'agent' }
    } return el
  })
}


export default parseStep7;
