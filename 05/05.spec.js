import { expect } from 'chai';
import { getData } from './../common/input.js';
import { findTopByToH, findTopByEfficient } from './05.js';

describe.only('supply stacks', () => {
    [
    {input:'sample', expected: 'CMZ'},
    //{input:'debug', expected: 1},
    {input:'input', expected: 'FJSRQCFTN'}
    ].forEach(({input, expected}) =>
    it("executes moves for first task", () => {
        let result = findTopByToH(getData(import.meta, input));
        console.log(result);
        expect(result).to.equal(expected);
    }));

    [
    {input:'sample', expected: 'MCD'},
    //{input:'debug', expected: 1},
    {input:'input', expected: 'CJVLJQPHS'}
    ].forEach(({input, expected}) =>
    it("executes moves for first task", () => {
        let result = findTopByEfficient(getData(import.meta, input));
        console.log(result);
        expect(result).to.equal(expected);
    }));
});