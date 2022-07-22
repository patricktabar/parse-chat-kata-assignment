// each piece of the chat is composed by hh:mm:ss, customer/agent name, : and sentence

const parseStep1 = (t) => {
  const dateLen = 'hh:mm:ss'.length;
  const date = t.slice(0, dateLen);
  const t2 = t.slice(dateLen + 1);
  const type = t2.slice(0, t2.indexOf(':')).trim().toLowerCase();
  const sentence = t2.slice(t2.indexOf(':') + 2);
  const mention = t.slice(0, t.indexOf(sentence));

  const res = [{ date, mention, sentence, type }];

  return res;
}

export default parseStep1;