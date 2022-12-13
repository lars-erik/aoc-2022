import { expect } from "chai";
import { getData } from './../common/input.js';
import { findSteps } from './12.js';

describe.only("hill climbing", () => {
    [
        {input:'sample', expected: 31},
        {input:'input', expected: 468},
    ].forEach(({input, expected}) => {
        it(`finds steps in ${input}`, () => {
            let steps = findSteps(getData(import.meta, input));
            expect(steps).to.equal(expected);
        })
    });
})