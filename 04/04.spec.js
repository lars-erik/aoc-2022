import { expect } from "chai";
import { totalFullOverlaps, totalOverlaps } from './04.js';

describe.only("cleaning the beach", () => {
    [
    {input:'sample', expected: 2},
    {input:'debug', expected: 1},
    {input:'input', expected: 588}
    ].forEach(({input, expected}) =>
    it(`finds total full overlaps in ${input}`, () => {
        let result = totalFullOverlaps(input);
        expect(result).to.equal(expected);
    }));

    [
    {input:'sample', expected: 4},
    {input:'input', expected: 911}
    ].forEach(({input, expected}) =>
    it(`finds total overlaps in ${input}`, () => {
        let result = totalOverlaps(input);
        expect(result).to.equal(expected);
    }));
});