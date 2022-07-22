import parseStep6 from "../src/step6";

const input = '14:24:32 Luca Galasso : Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Emanuele Querzola : I received the package, ut blandit lectus.';

const output = [{
  date: '14:24:32',
  mention: '14:24:32 Luca Galasso : ',
  sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  type: 'customer'
}, {
  date: '14:26:15',
  mention: '14:26:15 Emanuele Querzola : ',
  sentence: 'I received the package, ut blandit lectus.',
  type: 'agent'
}];

describe('step6 - full name', () => {
  it('should parse an example in which both the Agent and the Customer have full name', () => {
    expect(parseStep6(input)).toEqual(output);
  })
})