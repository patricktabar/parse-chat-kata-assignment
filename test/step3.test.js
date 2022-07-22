import parseStep3 from "../src/step3";

const input = '14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n14:27:00 Customer : Pellentesque cursus maximus felis, pharetra porta purus aliquet viverra.\n14:27:47 Agent : Vestibulum tempor diam eu leo molestie eleifend.\n14:28:28 Customer : Contrary to popular belief, Lorem Ipsum is not simply random text.';

const output = [{
  date: '14:24:32',
  mention: '14:24:32 Customer : ',
  sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n',
  type: 'customer'
}, {
  date: '14:27:00',
  mention: '14:27:00 Customer : ',
  sentence: 'Pellentesque cursus maximus felis, pharetra porta purus aliquet viverra.\n',
  type: 'customer'
}, {
  date: '14:27:47',
  mention: '14:27:47 Agent : ',
  sentence: 'Vestibulum tempor diam eu leo molestie eleifend.\n',
  type: 'agent'
}, {
  date: '14:28:28',
  mention: '14:28:28 Customer : ',
  sentence: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
  type: 'customer'
}];

describe('step3 - two customer mentions as start', () => {
  it('should parse an example with two customer mentions as start', () => {
    expect(parseStep3(input)).toEqual(output);
  })
})