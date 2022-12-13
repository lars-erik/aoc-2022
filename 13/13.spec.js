import { expect } from 'chai';
import { getData } from './../common/input.js';
import { findCorrectIndices, findDecoderKey, compareArray } from './13.js';

describe('distress signal', ()  => {
    [
        {input:'sample', expected: 13},
        {input:'input', expected: 5557}
    ].forEach(({input, expected}) => 
        it(`calculates sum of correct indices for ${input}`, () => {
            let actual = findCorrectIndices(getData(import.meta, input));
            expect(actual).to.equal(expected);
        })
    );

    [
        {input:'sample', expected: 140},
        {input:'input', expected: 22425}
    ].forEach(({input, expected}) => 
        it(`calculates decoder key for ${input}`, () => {
            let actual = findDecoderKey(getData(import.meta, input));
            expect(actual).to.equal(expected);
        })
    );
})