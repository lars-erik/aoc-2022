import { expect } from "chai"
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import day1 from './01.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

describe("day 1", () => {
    [
    {input:'sample', expected: 24000}, 
    {input:'input', expected: 68292}
    ].forEach(({input,expected}) => 
        it(`finds elf with most food in ${input}`, () => {
            let path = __dirname + `/${input}.txt`;
            let sums = day1.heaviestElf(path);
            expect(sums).to.equal(expected);
        })
    );
})