import { expect } from "chai"
import day1 from './01.js';
import { getData } from './../common/input.js'

describe("day 1", () => {
    [
    {input:'sample', expected: 24000}, 
    {input:'input', expected: 68292}
    ].forEach(({input,expected}) => 
        it(`finds elf with most food in ${input}`, () => {
            let actual = day1.heaviestElf(getData(import.meta, input));
            expect(actual).to.equal(expected);
        })
    );

    [
    {input:'sample', expected: 45000}, 
    {input:'input', expected: 203203}
    ].forEach(({input,expected}) => 
        it(`finds three elves with most food in ${input}`, () => {
            let actual = day1.threeHeaviestElves(getData(import.meta, input));
            expect(actual).to.equal(expected);
        })
    );
})