import { expect } from "chai"
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import day1 from './01.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathTo = (input) => __dirname + `/${input}.txt`;

describe("day 1", () => {
    [
    {input:'sample', expected: 24000}, 
    {input:'input', expected: 68292}
    ].forEach(({input,expected}) => 
        it(`finds elf with most food in ${input}`, () => {
            let actual = day1.heaviestElf(pathTo(input));
            expect(actual).to.equal(expected);
        })
    );

    [
    {input:'sample', expected: 45000}, 
    {input:'input', expected: 203203}
    ].forEach(({input,expected}) => 
        it(`finds three elves with most food in ${input}`, () => {
            let actual = day1.threeHeaviestElves(pathTo(input));
            expect(actual).to.equal(expected);
        })
    );
})