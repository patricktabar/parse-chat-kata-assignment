import parseStep2 from "../src/step2";

const input = '14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n14:26:15 Agent : Aliquam non cursus erat, ut blandit lectus.';
const output = [{
  date: '14:24:32',
  mention: '14:24:32 Customer : ',
  sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n',
  type: 'customer'
}, {
  date: '14:26:15',
  mention: '14:26:15 Agent : ',
  sentence: 'Aliquam non cursus erat, ut blandit lectus.',
  type: 'agent'
}];

describe('step2 - two sentences', () => {
  it('should parse two sentences divided by new line character', () => {
    expect(parseStep2(input)).toEqual(output);
  })
})