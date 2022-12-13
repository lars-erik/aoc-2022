import { expect } from 'chai';
import { getData } from './../common/input.js';
import { findCorrectIndices } from './13.js';

describe.only('distress signal', ()  => {
    [
        {input:'sample', expected: 13}
    ].forEach(({input, expected}) => 
        it(`calculates sum of correct indices for ${input}`, () => {
            let actual = findCorrectIndices(getData(import.meta, input));
            expect(actual).to.equal(expected);
        })
    );
})