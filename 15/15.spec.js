import { expect } from 'chai';
import { getData } from './../common/input.js';
import { countNonBeacons } from './15.js';

describe.only('beacon exclusion zone', () => {
    [
        {input: 'sample', inY: 10, expected: 26},
        {input: 'input', inY: 2_000_000, expected: 4961647},
    ].forEach(({input, inY, expected}) => {
        it(`finds positions that cannot contain beacon in ${input}`, () => {
            let actual = countNonBeacons(getData(import.meta, input), inY);
            expect(actual).to.equal(expected);
        });
    });
});