import parseStep7 from "../src/step7";
import { step1_IO, step2_IO, step3_IO, step4_IO, step5_IO, step6_IO, step7_IO } from "./desiredIO";


describe('step7 - missing colon after the names', () => {
  it('should parse a single sentence', () => {
    expect(parseStep7(step1_IO.input)).toEqual(step1_IO.output);
  })

  it('should parse two sentences divided by new line character', () => {
    expect(parseStep7(step2_IO.input)).toEqual(step2_IO.output);
  })

  it('should parse an example with two customer mentions as start', () => {
    expect(parseStep7(step3_IO.input)).toEqual(step3_IO.output);
  })

  it('should parse an example in which the sentences are not divided by the new line character', () => {
    expect(parseStep7(step4_IO.input)).toEqual(step4_IO.output);
  })

  it('should parse an example with a date in the text of the Agent', () => {
    expect(parseStep7(step5_IO.input)).toEqual(step5_IO.output);
  })

  it('should parse an example in which both the Agent and the Customer have full name', () => {
    expect(parseStep7(step6_IO.input)).toEqual(step6_IO.output);
  })
  it('should parse an example in which there is no colon after both Agent and Customer names', () => {
    expect(parseStep7(step7_IO.input)).toEqual(step7_IO.output);
  })
})