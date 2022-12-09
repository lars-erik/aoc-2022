import { asLines } from './../common/parsing.js';

const dirs = {
    R: {x:1,y:0},
    U: {x:0,y:1},
    L: {x:-1,y:0},
    D: {x:0,y:-1}
}

export function getTailVisits(data, log) {
    const lines = asLines(data).map(x => x.split(' '));
    const h = {x:0,y:0};
    const t = {x:0,y:0};
    const visited = [[true]];
    let newPoints = 1;

    lines.forEach((l, i) => {
        let dir = dirs[l[0]];
        for(let j = 0; j<l[1]; j++) {
            h.x += dir.x;
            h.y += dir.y;

            let xDist = h.x-t.x;
            let yDist = h.y-t.y;
            
            if (Math.abs(xDist) > 1 || Math.abs(yDist) > 1) {
                let xStep = Math.min(1, Math.max(xDist, -1));
                let yStep = Math.min(1, Math.max(yDist, -1));
        
                t.x += xStep;
                t.y += yStep;

                let beenThere = (visited[t.y] || [])[t.x];
                if (!beenThere) {
                    visited[t.y] = visited[t.y] || [];
                    visited[t.y][t.x] = true;
                    newPoints++;
                }
            }
        }
    });

    return {lines, h, t, newPoints};
}