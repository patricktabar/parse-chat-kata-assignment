import parseStep6 from "../src/step6";
import { step1_IO, step2_IO, step3_IO, step4_IO, step5_IO, step6_IO } from "./desiredIO";


describe('step6 - full name', () => {
  it('should parse a single sentence', () => {
    expect(parseStep6(step1_IO.input)).toEqual(step1_IO.output);
  })

  it('should parse two sentences divided by new line character', () => {
    expect(parseStep6(step2_IO.input)).toEqual(step2_IO.output);
  })

  it('should parse an example with two customer mentions as start', () => {
    expect(parseStep6(step3_IO.input)).toEqual(step3_IO.output);
  })

  it('should parse an example in which the sentences are not divided by the new line character', () => {
    expect(parseStep6(step4_IO.input)).toEqual(step4_IO.output);
  })

  it('should parse an example with a date in the text of the Agent', () => {
    expect(parseStep6(step5_IO.input)).toEqual(step5_IO.output);
  })

  it('should parse an example in which both the Agent and the Customer have full name', () => {
    expect(parseStep6(step6_IO.input)).toEqual(step6_IO.output);
  })
})
