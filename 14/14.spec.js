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
            logMap(complex);
            expect(cave.length).to.be.greaterThan(0);
            expect(cave[cave.length-2].length).to.be.greaterThan(0);
        });

        it(`fills sand in ${input}`, () => {
            let complex = fillSand(parse(data), 10000);
            logMap(complex);
            expect(complex.resting.length).to.equal(expected);
        });

        function logMap(complex) {
            let map = complex.cave;
            let ascii = '';
            for(let y = -1; y<=complex.bounding.maxY+1; y++) {
                for(let x = complex.bounding.minX-1; x<=complex.bounding.maxX+1; x++) {
                    if (!map[y]) map[y] = [];
                    let c = map[y][x];
                    if (c) {
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
});