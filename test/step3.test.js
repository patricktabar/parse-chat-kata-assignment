import parseStep3 from "../src/step3";
import { step1_IO, step2_IO, step3_IO } from "./desiredIO";

describe('step3 - two customer mentions as start', () => {
  it('should parse a single sentence', () => {
    expect(parseStep3(step1_IO.input)).toEqual(step1_IO.output);
  })

  it('should parse two sentences divided by new line character', () => {
    expect(parseStep3(step2_IO.input)).toEqual(step2_IO.output);
  })

  it('should parse an example with two customer mentions as start', () => {
    expect(parseStep3(step3_IO.input)).toEqual(step3_IO.output);
  })
})