import parseStep2 from "../src/step2";
import { step1_IO, step2_IO } from "./desiredIO";


describe('step2 - two sentences', () => {
  it('should parse a single sentence', () => {
    expect(parseStep2(step1_IO.input)).toEqual(step1_IO.output);
  })

  it('should parse two sentences divided by new line character', () => {
    expect(parseStep2(step2_IO.input)).toEqual(step2_IO.output);
  })
})

