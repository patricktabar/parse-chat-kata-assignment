import parseStep1 from "../src/step1";

const input = '14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const output = [{
  date: '14:24:32',
  mention: '14:24:32 Customer : ',
  sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  type: 'customer'
}];

describe('step1 - single sentence', () => {
  it('should parse a single sentence', () => {
    expect(parseStep1(input)).toEqual(output);
  })
})