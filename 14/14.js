import { asLines } from './../common/parsing.js';

export function parse(data, addFloor) {
    const minY = 0;
    let maxY = 0;
    let minX = Number.MAX_VALUE;
    let maxX = 0;
    let lines = asLines(data)
        .map(l => {
            return l
                .split(' -> ')
                .map(x => {
                    const coord = x.split(',').map(Number);
                    maxY = Math.max(maxY, coord[1]);
                    minX = Math.min(minX, coord[0]);
                    maxX = Math.max(maxX, coord[0]);
                    return coord
                })
        });

    let map = [];
    for (let l = 0; l < lines.length; l++) {
        for (let ci = 0; ci < lines[l].length - 1; ci++) {
            let a = lines[l][ci];
            let b = lines[l][ci + 1];
            for (let y = Math.min(a[1], b[1]); y <= Math.max(a[1], b[1]); y++) {
                for (let x = Math.min(a[0], b[0]); x <= Math.max(a[0], b[0]); x++) {
                    map[y] = map[y] || [];
                    map[y][x] = '#';
                }
            }
        }
    }

    if (addFloor) {
        maxY += 2;
        map[maxY-1] = [];
        map[maxY] = [];
        for (let x = minX - 500; x <= maxX + 500; x++) {
            map[maxY][x] = '#';
        }
    }

    return {
        cave: map,
        bounding: {
            minY,
            maxY,
            minX,
            maxX
        }
    };
}

export function fillSand(complex, max = 100) {
    let i = 0;
    let map = complex.cave;
    let resting = [];
    let withinBounds = true;
    if (!map[0]) map[0] = [];
    while (i++ < max && withinBounds) {
        let grain = [500, 0];
        for (let y = 1; y <= complex.bounding.maxY; y++) {
            if (!map[y]) map[y] = [];

            if (!map[y][grain[0]]) {
                grain[1] = y;
                continue;
            }

            if (!map[y][grain[0] - 1]) {
                grain = [grain[0] - 1, y];
                continue;
            }

            if (!map[y][grain[0] + 1]) {
                grain = [grain[0] + 1, y];
                continue;
            }

            if (map[y][grain[0]] &&
                map[y][grain[0] - 1] &&
                map[y][grain[0] + 1]) {
                map[grain[1]][grain[0]] = 'o';
                resting.push(grain);
                if (grain[1] === 0 && grain[0] === 500) {
                    withinBounds = false;
                    break;
                }

                grain = [500, 0];
                break;
            }


            withinBounds = false;
            break;
        }

    }

    console.log(i);
    complex.resting = resting;
    return complex;
}