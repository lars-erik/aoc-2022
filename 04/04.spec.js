import { expect } from "chai";
import { totalFullOverlaps } from './04.js';

describe("cleaning the beach", () => {
    [
    {input:'sample', expected: 2},
    {input:'debug', expected: 1},
    {input:'input', expected: 588}
    ].forEach(({input, expected}) =>
    it.only(`finds total full overlaps in ${input}`, () => {
        let result = totalFullOverlaps(input);
        expect(result).to.equal(expected);
    }));
});