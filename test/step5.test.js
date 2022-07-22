import parseStep5 from "../src/step5";

const input = '14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Agent : I received it at 12:24:48, ut blandit lectus.';

const output = [{
  date: '14:24:32',
  mention: '14:24:32 Customer : ',
  sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  type: 'customer'
}, {
  date: '14:26:15',
  mention: '14:26:15 Agent : ',
  sentence: 'I received it at 12:24:48, ut blandit lectus.',
  type: 'agent'
}];

describe('step5 - ignore extra dates', () => {
  it('should parse an example with a date in the text of the Agent', () => {
    expect(parseStep5(input)).toEqual(output);
  })
})