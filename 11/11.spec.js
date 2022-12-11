import { expect } from "chai";
import { getData } from './../common/input.js';
import { monkeyBusiness } from './11.js';

describe.only('monkey in the middle', () => {
    [
        {input:'sample', expected: 10605},
        {input:'input', expected: 58786},
    ].forEach(({input, expected}) => {
        it(`calculates level of monkey business for ${input}`, () => {
            let actual = monkeyBusiness(getData(import.meta, input));
            expect(actual).to.equal(expected);
        });
    });
});