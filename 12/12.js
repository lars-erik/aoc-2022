import { asLines } from './../common/parsing.js';

const a = "a".charCodeAt(0);

function neighbours(matrix, pos) {
    let them = [];
    if (pos.y > 0) them.push(matrix[pos.y - 1][pos.x]);
    if (pos.y < matrix.length - 1) them.push(matrix[pos.y+1][pos.x]);
    if (pos.x > 0) them.push(matrix[pos.y][pos.x - 1]);
    if (pos.x < matrix[0].length - 1) them.push(matrix[pos.y][pos.x + 1]);
    return them;
}

export function findSteps(data) {
    let start, end;
    let matrix = asLines(data)
        .map((l, y) => l
            .split('')
            .map((c, x) => {
                let val = {x, y};
                if (c === "S") {
                    start = val;
                    c = "a";
                }
                if (c === "E") {
                    end = val;
                    c = "z";
                }
                val.h = c.charCodeAt(0) - a;
                if (val !== start) {
                    val.d = Number.MAX_VALUE;
                }
                return val;
            })
        )
        ;
    start.d = 0;

    //console.log(matrix, start, end);

    let ways = [];
    let candidates = [];
    let from = start;
    let tries = 0;
    let maxX = 0;
    let maxH = 0;
    neighbours(matrix, start)
        .filter(n => Math.abs(n.h - from.h) <= 1)
        .forEach(n => {
            n.d = 1;
            n.from = from;
            candidates.push(n);
        });
    while(candidates.length && tries++ < 1000000) {
        let candidate = candidates.pop();
        if (candidate === end) {
            ways.push(candidate);
            continue;
        }
        maxX = Math.max(maxX, candidate.x);
        maxH = Math.max(maxH, candidate.h);

        neighbours(matrix, candidate)
            .filter(n => {
                const notStart = n !== start;
                const canClimb = (n.h - candidate.h) <= 1;
                const distance = candidate.d + 1;
                const isShorter = distance < n.d;

                return notStart && isShorter && canClimb;
            })
            .forEach(n => {
                n.d = candidate.d + 1;
                n.from = candidate;
                candidates.push(n)
            });
    }

    ways.sort((a, b) => a.d - b.d);
    let best = ways[0];
    console.log('best', best);

    return best.d;
}