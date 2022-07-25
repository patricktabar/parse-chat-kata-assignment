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

export const isRole = (mention) => {
  if ((/(customer)/gi).test(mention)) return 'customer';
  if ((/(agent)/gi).test(mention)) return 'agent';
  return '';
}

export const parseSmart = (t) => {
  const re_date = /([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]/g;

  const re_role = /([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]\s(customer|agent)\s/gi;
  const re_fullname = /([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]\s.+?\s.+?\s/g;

  const re_role_colon = /([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]\s(customer|agent)\s[:]\s/gi;
  const re_fullname_colon = /([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]\s.+?\s.+?\s[:]\s/g;

  const hasRole = t.match(re_role);
  const hasColon = t.match(re_role_colon) || t.match(re_fullname_colon);

  let mention;

  if (hasRole) {
    if (hasColon) {
      mention = t.match(re_role_colon)[0];
    } else {
      mention = t.match(re_role)[0];
    }
  } else {
    if (hasColon) {
      mention = t.match(re_fullname_colon)[0];
    } else {
      mention = t.match(re_fullname)[0];
    }
  }

  const date = mention.match(re_date)[0];
  const type = isRole(mention);
  const sentence = t.replace(mention, '');

  return { date, mention, sentence, type }
}



export const arrFromString = (text, divider) => {
  const divide = text.split(divider);
  return divide.map((el, i) => i < divide.length - 1 ? el + divider : el);
}

export const arrFromRegExp = (text, re) => {
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

export const arrFromDateSmartNoColon = (text) => {
  const re = /([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]\s.+?\s/g;
  return arrFromRegExp(text, re);
}