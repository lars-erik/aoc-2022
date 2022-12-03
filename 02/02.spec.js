import { expect } from 'chai';
import { getData } from './../common/input.js';
import { identifyEach, score, scoreByStrategy } from './02.js';

describe("scoring rps", () => {
    [
    {input:'sample', expected: 15}
    ].forEach(({input, expected}) =>
    it(`identifies each side ${input}`, () => {
        let data  = getData(import.meta, input);
        let score = identifyEach(data);
        expect(score).to.eql([ [ 1, 2 ], [ 2, 1 ], [ 3, 3 ] ]);
    })
    );

    [
    {input:'sample', expected: 15},
    {input:'input', expected: 12794},
    ].forEach(({input, expected}) =>
    it(`scores each side ${input}`, () => {
        let data  = getData(import.meta, input);
        let myScore = score(data);
        expect(myScore).to.equal(expected);
    })
    );

    [
    {input:'sample', expected: 12},
    {input:'input', expected: 14979},
    ].forEach(({input, expected}) =>
    it(`scores each side for b requirement${input}`, () => {
        let data  = getData(import.meta, input);
        let myScore = scoreByStrategy(data);
        expect(myScore).to.equal(expected);
    })
    );
    });