import { expect } from "chai";
import { getData } from './../common/input.js';
import { monkeyBusiness } from './11.js';

describe.only('monkey in the middle', () => {
    [
        {input:'sample', expected: 10605},
        //{input:'input', expected: 58786},
    ].forEach(({input, expected}) => {
        it(`calculates level of monkey business for ${input}`, () => {
            let actual = monkeyBusiness(getData(import.meta, input), 20, 3);
            expect(actual).to.equal(expected);
        });
    });
    
    [
        {input:'sample', expected: 2713310158},
        //{input:'input', expected: 0},
    ].forEach(({input, expected}) => {
        it(`calculates level of heavily worryful monkey business for ${input}`, () => {
            let actual = monkeyBusiness(getData(import.meta, input), 10000, 1);
            expect(actual).to.equal(expected);
        });
    });
});