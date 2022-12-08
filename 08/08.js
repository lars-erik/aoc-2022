import { asLines } from './../common/parsing.js';
import { getData } from './../common/input.js';

export function discover(input) {
    let forest = asLines(getData(import.meta, input))
        .map(l => l.split('').map(t => { return { height: Number(t) } }));

    const update = (x, y, max) => {
        if (forest[y][x].height > max) {
            forest[y][x].visible = true;
            return forest[y][x].height;
        }
        return max;
    }
    let max;
    for (let x = 0; x < forest[0].length; x++) {
        // ttb
        max = forest[0][x].height;
        forest[0][x].visible = true;
        for (let y = 1; y < forest.length - 1; y++) {
            max = update(x, y, max);
        }
        // btt
        max = forest[forest.length - 1][x].height;
        forest[forest.length - 1][x].visible = true;
        for (let y = forest.length - 2; y > 0; y--) {
            max = update(x, y, max);
        }
    }

    for (let y = 0; y < forest.length; y++) {
        // ltr
        max = forest[y][0].height;
        forest[y][0].visible = true;
        for (let x = 1; x < forest[0].length - 1; x++) {
            max = update(x, y, max);
        }

        // rtl
        max = forest[y][forest[0].length - 1].height;
        forest[y][forest[0].length - 1].visible = true;
        for (let x = forest[0].length - 2; x > 0; x--) {
            max = update(x, y, max);
        }
    }
    return forest;
}