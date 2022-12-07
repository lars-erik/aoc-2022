import { expect } from 'chai';
import { getData } from './../common/input.js';
import { sumSmallFolders, folderToDelete, parse } from './07.js';

describe("freeing up space", () => {
    [
    {input:'sample', expected: 48381165},
    ].forEach(({input, expected}) => 
    xit(`parses ${input}`, () => {
        let result = parse(getData(import.meta, input));
        result.root.writeTo(console.log);
        expect(result.root.totalSize()).to.equal(expected);
    }));

    [
    {input:'sample', expected: 95437},
    {input:'input', expected: 1297683},
    ].forEach(({input, expected}) => 
    it(`finds small candidates for deletion in ${input}`, () => {
        let result = sumSmallFolders(getData(import.meta, input));
        expect(result).to.equal(expected);
    }));
    
    [
    {input:'sample', expected: {name:'d',size:24933642}},
    {input:'input', expected: {name:'dscbfp',size:5756764}},
    ].forEach(({input, expected}) => 
    it(`finds directory to delete in ${input}`, () => {
        let result = folderToDelete(getData(import.meta, input));
        expect(result).to.eql(expected);
    }));
})