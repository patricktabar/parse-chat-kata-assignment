import parseStep4 from "../src/step4";

const input = '14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Agent : Aliquam non cursus erat, ut blandit lectus.';

const output = [{
  date: '14:24:32',
  mention: '14:24:32 Customer : ',
  sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  type: 'customer'
}, {
  date: '14:26:15',
  mention: '14:26:15 Agent : ',
  sentence: 'Aliquam non cursus erat, ut blandit lectus.',
  type: 'agent'
}];

describe('step4 - date splitting', () => {
  it('should parse an example in which the sentences are not divided by the new line character', () => {
    expect(parseStep4(input)).toEqual(output);
  })
})