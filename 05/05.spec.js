import { expect } from 'chai';
import { getData } from './../common/input.js';
import { findTopBoxes } from './05.js';

describe.only('supply stacks', () => {
    [
    {input:'sample', expected: 'CMZ'},
    //{input:'debug', expected: 1},
    {input:'input', expected: 'FJSRQCFTN'}
    ].forEach(({input, expected}) =>
    it("executes moves for first task", () => {
        let result = findTopBoxes(getData(import.meta, input));
        console.log(result);
        expect(result).to.equal(expected);
    }));
});