import { expect } from 'chai';
import { getData } from './../common/input.js';
import Cpu from './10.js';

describe("communicator cpu", () => {
    [
        {input:'simple', expected: -1},
        {input:'sample', expected: 13140},
        {input:'input', expected: 13520},
    ].forEach(({input, expected}) => {
        it(`calculates signal strength for ${input}`, () =>{
            let data = getData(import.meta, input);
            let cpu = new Cpu(data);
            let strength = 0;
            while(cpu.update()) {
                if ((cpu.clock - 19) % 40 === 0) {
                    strength += (cpu.clock + 1) * cpu.x;
                }
            }

            if (cpu.clock < 10) {
                expect(cpu.x).to.equal(expected);
            } else {
                expect(strength).to.equal(expected);
            }
        });
    });

    [
        {input:'sample', expected: `
##..##..##..##..##..##..##..##..##..##..
###...###...###...###...###...###...###.
####....####....####....####....####....
#####.....#####.....#####.....#####.....
######......######......######......####
#######.......#######.......#######.....`},
        {input:'input', expected: 
`
###...##..###..#..#.###..####..##..###..
#..#.#..#.#..#.#..#.#..#.#....#..#.#..#.
#..#.#....#..#.####.###..###..#..#.###..
###..#.##.###..#..#.#..#.#....####.#..#.
#....#..#.#....#..#.#..#.#....#..#.#..#.
#.....###.#....#..#.###..####.#..#.###..`},
    ].forEach(({input, expected}) => {
        it(`renders output on screen for ${input}`, () =>{
            let data = getData(import.meta, input);
            let cpu = new Cpu(data);
            while(cpu.update()) {
            }
            expected = expected.replace(/\r/g, '').trim();
            console.log(cpu.screen);

            expect(cpu.screen).to.equal(expected);
        });
    });
})