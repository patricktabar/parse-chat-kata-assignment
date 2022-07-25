import parseStep1 from "../src/step1";
import { step1_IO } from "./desiredIO";

describe('step1 - single sentence', () => {
  it('should parse a single sentence', () => {
    expect(parseStep1(step1_IO.input)).toEqual(step1_IO.output);
  })
})