export const parse = (t) => {
  const dateLen = 'hh:mm:ss'.length;
  const date = t.slice(0, dateLen);
  const t2 = t.slice(dateLen + 1);
  const type = t2.slice(0, t2.indexOf(':')).trim().toLowerCase();
  const sentence = t2.slice(t2.indexOf(':') + 2);
  const mention = t.slice(0, t.indexOf(sentence));

  const res = { date, mention, sentence, type };

  return res;
}

export const arrFromString = (text, divider) => {
  const divide = text.split(divider);
  return divide.map((el, i) => i < divide.length - 1 ? el + divider : el);
}

export const arrFromRegExp= (text, re) => {
  const match = text.match(re);
  return match.map((el, i) => i < match.length - 1
    ? text.slice(text.indexOf(match[i]), text.indexOf(match[i + 1]))
    : text.slice(text.indexOf(match[i])))
}

export const arrFromDate = (text) => {
  const re = /([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]/g;
  return arrFromRegExp(text, re);
}

export const arrFromDateSmart = (text) => {
  const re = /([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]\s.+?\s[:]/g;
  return arrFromRegExp(text, re);
}