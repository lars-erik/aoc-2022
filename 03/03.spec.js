import { expect } from "chai";
import { sumPriorities, sumGroupPriorities } from './03.js';

describe("organizing rucksacks", () => {
    [
    {input:'sample', expected: 157},
    {input:'input', expected: 8085}
    ].forEach(({input, expected}) =>
    it(`sums misplaced types priority for ${input}`, () => {
        let result = sumPriorities(input);
        expect(result).to.equal(expected);
    }));

    [
    {input:'sample', expected: 70},
    {input:'input', expected: 2515}
    ].forEach(({input, expected}) =>
    it(`sums group types priority for ${input}`, () => {
        let result = sumGroupPriorities(input);
        expect(result).to.equal(expected);
    }));
});