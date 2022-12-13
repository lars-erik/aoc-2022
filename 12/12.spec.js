import { expect } from "chai";
import { getData } from './../common/input.js';
import { asLines } from './../common/parsing.js';
import { findSteps } from './12.js';

describe("hill climbing", () => {
    [
        {input:'sample', expected: 31},
        {input:'input', expected: 468},
    ].forEach(({input, expected}) => {
        it(`finds steps in ${input}`, () => {
            let steps = findSteps(getData(import.meta, input));
            expect(steps).to.equal(expected);
        })
    });

    [
        {input:'sample', expected: 29},
        {input:'input', expected: 459},
    ].forEach(({input, expected}) => {
        it(`finds best start in ${input}`, function() {
            this.timeout(5000);
            let steps = [];
            let data = getData(import.meta, input);
            let lines = asLines(data).length;
            for(let i = 0; i<lines; i++) {
                steps.push(findSteps(data, i));
            }
            steps.sort();
            expect(steps[0]).to.equal(expected);
            //done();
        })
    });
})