import parseStep4 from "../src/step4";
import { step1_IO, step2_IO, step3_IO, step4_IO } from "./desiredIO";


describe('step4 - date splitting', () => {
  it('should parse a single sentence', () => {
    expect(parseStep4(step1_IO.input)).toEqual(step1_IO.output);
  })

  it('should parse two sentences divided by new line character', () => {
    expect(parseStep4(step2_IO.input)).toEqual(step2_IO.output);
  })

  it('should parse an example with two customer mentions as start', () => {
    expect(parseStep4(step3_IO.input)).toEqual(step3_IO.output);
  })

  it('should parse an example in which the sentences are not divided by the new line character', () => {
    expect(parseStep4(step4_IO.input)).toEqual(step4_IO.output);
  })
})