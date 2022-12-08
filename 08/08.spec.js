import { expect } from 'chai';
import { discover } from './08.js';

describe("treetop treehouse", () => {
    [
        { input: 'sample', expected: 21 },
        { input: 'input', expected: 1717 }
    ].forEach(({ input, expected }) =>
        it(`sees visible trees in ${input}`, () => {
            let forest = discover(input);
            if (expected < 100) {
                for (let y = 0; y < forest.trees.length; y++) {
                    console.log(forest.trees[y].map(x => (x.visible ? '*' : 'o')).join(''));
                }
            }
            expect(forest.visibleTrees).to.equal(expected);
        }));

    [
        { input: 'sample', expected: 8 },
        { input: 'input', expected: 321975 }
    ].forEach(({ input, expected }) =>
        it(`finds most scenic tree in ${input}`, () => {
            let forest = discover(input);
            let max = 0;
            for (let y = 0; y < forest.trees.length; y++) {
                for(let x = 0; x < forest.trees[0].length; x++) {
                    const score = forest.trees[y][x].scenicScore;
                    if (score > max) {
                        max = score;
                    }
                }
            }
            expect(max).to.equal(expected);
        }));
})