import { expect } from 'chai';
import { discover } from './08.js';

describe("treetop treehouse", () => {
    [
        { input: 'sample', expected: 21 },
        { input: 'input', expected: 1717 }
    ].forEach(({ input, expected }) =>
        it(`sees visible trees in ${input}`, () => {
            let forest = discover(input);
            let visible = 0;
            for (let y = 0; y < forest.length; y++) {
                visible += forest[y].reduce((s, c) => s + (c.visible ? 1 : 0), 0)
                if (expected < 100) {
                    console.log(forest[y].map(x => (x.visible ? '*' : 'o')).join(''));
                }
            }
            expect(visible).to.equal(expected);
        }));
})