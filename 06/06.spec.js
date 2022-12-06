import { expect } from 'chai';
import { findPacketStart } from './06.js';
import { getData } from './../common/input.js';

describe('elf data packets', () => {

    [
    { input: "mjqjpqmgbljsphdztnvjfqwrcgsmlb", expected: 7 },
    { input: "bvwbjplbgvbhsrlpgdmjqwftvncz", expected: 5 },
    { input: "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", expected: 10 },
    { input: "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", expected: 11 },
    { input: getData(import.meta, 'input'), expected: 1912 }
    ].forEach(({input, expected}) => {
    it(`start-of-packet at ${expected} in ${input.substr(0, 10)}...`, () => {
        expect(findPacketStart(input, 4)).to.equal(expected);
    });
    });

    [
    { input: "mjqjpqmgbljsphdztnvjfqwrcgsmlb", expected: 19 },
    { input: "bvwbjplbgvbhsrlpgdmjqwftvncz", expected: 23 },
    { input: "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", expected: 29 },
    { input: "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", expected: 26 },
    { input: getData(import.meta, 'input'), expected: 2122 }
    ].forEach(({input, expected}) => {
    it(`start-of-message at ${expected} in ${input.substr(0, 10)}...`, () => {
        expect(findPacketStart(input, 14)).to.equal(expected);
    });
    });
    
});