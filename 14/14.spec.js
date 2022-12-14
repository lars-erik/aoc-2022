import { getData } from './../common/input.js';
import { parse, fillSand } from './14.js';
import { expect } from 'chai';

describe.only('regolith reservoar', () => {
    [
        {input:'sample', expected: 24}
    ].forEach(({input, expected}) => {
        const data = getData(import.meta, input);

        it(`parses area from ${input}`, () => {
            let complex = parse(data);
            console.log(complex);
            let cave = complex.cave;
            expect(cave.length).to.be.greaterThan(0);
            expect(cave[4].length).to.be.greaterThan(0);
        });

        xit(`fills sand in ${input}`, () => {
            let state = fillSand(parse(data));
            expect(state.sand).to.equal(expected);
        });

    });
});