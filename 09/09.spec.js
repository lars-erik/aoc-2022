import { expect } from 'chai';
import { getData } from './../common/input.js';
import { getTailVisits } from './09.js';

describe.only('rope bridge', () => {
    [
        {input:'sample', expected: 13},
        {input:'input', expected: 6391}
    ].forEach(({input, expected}) => 
        it(`counds tail points in ${input}`, () => {
            let data = getData(import.meta, input);
            let tailVisits = getTailVisits(data);
            console.log(tailVisits);
            expect(tailVisits.newPoints).to.equal(expected);
        }
    ))
})