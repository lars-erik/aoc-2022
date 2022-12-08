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
                forest.trees.forEach(row =>
                    console.log(row.map(x => (x.visible ? '*' : 'o')).join(''))
                )
            }
            expect(forest.visibleTrees).to.equal(expected);
        }));

    [
        { input: 'sample', expected: 8 },
        { input: 'input', expected: 321975 }
    ].forEach(({ input, expected }) =>
        it(`finds most scenic tree in ${input}`, () => {
            let forest = discover(input);
            let max = forest.trees.reduce((max, row) => 
                row.reduce((max, tree) => 
                    tree.scenicScore > max
                        ? tree.scenicScore
                        : max
                , max)
            , 0);
            expect(max).to.equal(expected);
        }));
})