import { expect } from 'chai';
import { getData } from './../common/input.js';
import { sumSmallFolders } from './07.js';

describe.only("freeing up space", () => {
    [
    {input:'sample', expected: 0}
    ].forEach(({input, expected}) => 
    it(`finds small candidates for deletion in ${input}`, () => {
        let result = sumSmallFolders(getData(import.meta, input));
        expect(result).to.equal(expected);
    }));
})