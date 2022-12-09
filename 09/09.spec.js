import { expect } from 'chai';
import { getData } from './../common/input.js';
import { getTailVisits } from './09.js';

describe.only('rope bridge', () => {
    [
        {input:'sample', expected: 10}
    ].forEach(({input, expected}) => 
        it(`counds tail points in ${input}`, () => {
            let data = getData(import.meta, input);
            let tailVisits = getTailVisits(data);
            console.log(tailVisits);
            expect(tailVisits).to.equal(expected);
        }
    ))
})