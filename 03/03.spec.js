import { expect } from "chai";
import { sumPriorities } from './03.js';

describe("organizing rucksacks", () => {
    [
    {input:'sample', expected: 157},
    {input:'input', expected: 157}
    ].forEach(({input, expected}) =>
    it(`sums misplaced types priority for ${input}`, () => {
        let result = sumPriorities(input);
        expect(result).to.equal(157);
    }));
});