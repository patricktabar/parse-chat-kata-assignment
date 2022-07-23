import parseStep7 from "../src/step7";

const input = '14:24:32 Customer Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Agent I received it at 12:24:48, ut blandit lectus.';

const output = [{
  date: '14:24:32',
  mention: '14:24:32 Customer ',
  sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  type: 'customer'
}, {
  date: '14:26:15',
  mention: '14:26:15 Agent ',
  sentence: 'I received it at 12:24:48, ut blandit lectus.',
  type: 'agent'
}];

describe('step7 - missing colon after the names', () => {
  it('should parse an example in which there is no colon after both Agent and Customer names', () => {
    expect(parseStep7(input)).toEqual(output);
  })
})