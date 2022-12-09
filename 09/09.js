import { asLines } from './../common/parsing.js';

const dirs = {
    R: {x:1,y:0},
    U: {x:0,y:1},
    L: {x:-1,y:0},
    D: {x:0,y:-1}
}

export function getTailVisits(data) {
    const lines = asLines(data).map(x => x.split(' '));
    const h = {x:0,y:0};
    const t = {x:0,y:0};

    lines.forEach((l, i) => {
        let dir = dirs[l[0]];
        for(let j = 0; j<l[1]; j++) {
            h.x += dir.x;
            h.y += dir.y;

            let xDist = h.x-t.x;
            let yDist = h.y-t.y;
            
            let xStep = xDist > 1 ? xDist - 1 : xDist < -1 ? xDist + 1 : 0;
            let yStep = yDist > 1 ? yDist - 1 : yDist < -1 ? yDist + 1 : 0;

            t.x += xStep;
            t.y += yStep;

            console.log(i, j, h, t);
        }

    });

    return {lines, h, t};
}