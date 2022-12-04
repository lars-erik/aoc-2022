import { expect } from "chai";
import { totalFullOverlaps, totalOverlaps } from './04.js';
import { getData } from './../common/input.js';

const getInput = (input) => getData(import.meta, input);

describe("cleaning the camp", () => {
    [
    {input:'sample', expected: 2},
    {input:'debug', expected: 1},
    {input:'input', expected: 588}
    ].forEach(({input, expected}) =>
    it(`finds total full overlaps in ${input}`, () => {
        let result = totalFullOverlaps(getInput(input));
        expect(result).to.equal(expected);
    }));

    [
    {input:'sample', expected: 4},
    {input:'input', expected: 911}
    ].forEach(({input, expected}) =>
    it(`finds total overlaps in ${input}`, () => {
        let result = totalOverlaps(getInput(input));
        expect(result).to.equal(expected);
    }));
});