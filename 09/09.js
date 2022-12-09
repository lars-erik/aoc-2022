import { asLines } from './../common/parsing.js';

const dirs = {
    R: {x:1,y:0},
    U: {x:0,y:1},
    L: {x:-1,y:0},
    D: {x:0,y:-1}
}

export function getTailVisits(data, ubound, log) {
    const lines = asLines(data).map(x => x.split(' '));
    const r = [{x:0,y:0}];
    const visited = [[true]];
    let newPoints = 1;

    for(let j = 0; j<ubound; j++) {
        r.push({x:0, y:0});
    }

    lines.forEach((l) => {
        let dir = dirs[l[0]];
        let h = r[0];
        
        for(let j = 0; j<l[1]; j++) {

            h.x += dir.x;
            h.y += dir.y;
            let f = h;

            for(let k = 1; k<=ubound; k++) {
                let n = r[k];
                let moved = moveIfPulled(f, n);

                if (moved && k === ubound) {
                    newPoints += updateLastKnot(visited, n);
                }

                f = n;
                n = r[k + 1];
            }
        }
    });

    return {lines, r, newPoints};
}

function updateLastKnot(visited, n) {
    let add = 0;
    let beenThere = (visited[n.y] || [])[n.x];
    if (!beenThere) {
        visited[n.y] = visited[n.y] || [];
        visited[n.y][n.x] = true;
        add = 1;
    }
    return add;
}

function moveIfPulled(f, n) {
    let moved = false;

    let xDist = f.x - n.x;
    let yDist = f.y - n.y;

    if (Math.abs(xDist) > 1 || Math.abs(yDist) > 1) {
        let xStep = Math.min(1, Math.max(xDist, -1));
        let yStep = Math.min(1, Math.max(yDist, -1));

        n.x += xStep;
        n.y += yStep;

        moved = true;
    }
    return moved;
}
