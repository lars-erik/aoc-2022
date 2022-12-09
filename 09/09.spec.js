import { expect } from 'chai';
import { getData } from './../common/input.js';
import { getTailVisits } from './09.js';

describe('rope bridge', () => {
    [
        {input:'sample', expected: 13},
        {input:'input', expected: 6391}
    ].forEach(({input, expected}) => 
        it(`counds tail points in ${input}`, () => {
            let data = getData(import.meta, input);
            let tailVisits = getTailVisits(data, 1);
            console.log(tailVisits);
            expect(tailVisits.newPoints).to.equal(expected);
        }
    ));

    [
        {input:'sample', expected: 1},
        {input:'largersample', expected: 36},
        {input:'input', expected: 2593}
    ].forEach(({input, expected}) => 
        it(`counds long tail points in ${input}`, () => {
            let data = getData(import.meta, input);
            let tailVisits = getTailVisits(data, 9);
            console.log(tailVisits);
            expect(tailVisits.newPoints).to.equal(expected);
        }
    ))
})