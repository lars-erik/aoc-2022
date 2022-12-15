import { asLines } from './../common/parsing.js';

function distance(a, b) {
    const xDist = a[0] - b[0];
    const yDist = a[1] - b[1];
    return {
        v: [xDist, yDist],
        a: [Math.abs(xDist), Math.abs(yDist)],
        d: Math.abs(xDist) + Math.abs(yDist)
    };
}

export function countNonBeacons(data, inY) {
    let minX = Number.MAX_VALUE;
    let maxX = Number.MIN_VALUE;
    let beacons = [];
    let sensors = asLines(data)
        .map(x => x.split(':'))
        .map(x => { return {s:x[0].substr(10), b:x[1].substr(22)}})
        .map(x => { return {
            s: x.s.split(', ').map(y => Number(y.substr(2))),
            b: x.b.split(', ').map(y => Number(y.substr(2)))
        }})
        .map(x => { 
            const bDist = distance(x.s, x.b);
            const yDist = distance(x.s, [x.s[0], inY]);
            if ((x.s[0] - bDist.d) < minX) minX = x.s[0] - bDist.d;
            if ((x.s[0] + bDist.d) > maxX) maxX = x.s[0] + bDist.d;
            if (beacons.filter(b => b[0] === x.b[0] && b[1] === x.b[1]).length === 0) {
                beacons.push(x.b);
            }

            return Object.assign(x, {
                bDist,
                yDist
            });
        });

    let candidates = sensors.filter(x => x.yDist.d <= x.bDist.d);
    
    let seenX = [];
    for(let x = minX; x<=maxX; x++) {
        let isBeacon = beacons.filter(b => b[0] === x && b[1] === inY).length;
        if (isBeacon) continue;
        let seenBy = candidates.filter(c => distance(c.s, [x, inY]).d <= c.bDist.d);
        let seen = seenBy.length;
        if (seen) {
            seenX.push([x, inY]);
        }
    }

    console.log(sensors);
    console.log(minX, maxX);

    return seenX.length;
}