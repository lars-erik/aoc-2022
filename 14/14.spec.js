import { getData } from './../common/input.js';
import { parse, fillSand } from './14.js';
import { expect } from 'chai';

describe.only('regolith reservoar', () => {
    [
        {input:'sample', expected: 24},
        {input:'input', expected: 638},
    ].forEach(({input, expected}) => {
        const data = getData(import.meta, input);

        it(`parses area from ${input}`, () => {
            let complex = parse(data);
            let cave = complex.cave;
            logMap(complex, 2);
            expect(cave.length).to.be.greaterThan(0);
            expect(cave[cave.length-1].length).to.be.greaterThan(0);
        });

        it(`fills sand in ${input}`, () => {
            let sim = fillSand(parse(data), false, 100000);
            logMap(sim.complex, 2);
            expect(sim.resting.length).to.equal(expected);
        });
    });

    [
        {input:'sample', expected: 93},
        {input:'input', expected: 31722},
    ].forEach(({input, expected}) => {
        const data = getData(import.meta, input);

        it(`parses area with floor from ${input}`, () => {
            let complex = parse(data, true);
            let cave = complex.cave;
            logMap(complex, 0, 15);
            expect(cave.length).to.be.greaterThan(0);
            expect(cave[cave.length-2].length).to.be.greaterThan(0);
        });

        it(`fills sand in ${input} with floor`, () => {
            let sim = fillSand(parse(data), true, 5000000);
            logMap(sim.complex, 0, 40);
            expect(sim.resting.length).to.equal(expected);
        });
    });
    
    function logMap(complex, removeY, addWidth = 5) {
        let map = complex.cave;
        let ascii = '';
        for(let y = -1; y<=complex.bounding.maxY+1-removeY; y++) {
            for(let x = complex.bounding.minX-addWidth; x<=complex.bounding.maxX+addWidth; x++) {
                if (!map[y]) map[y] = [];
                let c = map[y][x];
                if (y === 0 && x === 500 && c !== 'o') {
                    ascii += '+';
                } else if (c) {
                    ascii += c;
                } else {
                    ascii += '.';
                }
            }
            ascii += '\n';
        }
        console.log(ascii);
    }
});