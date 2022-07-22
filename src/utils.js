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