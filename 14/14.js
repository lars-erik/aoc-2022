import { asLines } from './../common/parsing.js';

export function parse(data) {
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
    for(let l = 0; l<lines.length; l++) {
        for(let ci = 0; ci<lines[l].length - 1; ci++) {
            let a = lines[l][ci];
            let b = lines[l][ci+1];
            for (let y = Math.min(a[1], b[1]); y<=Math.max(a[1], b[1]); y++) {
                for(let x = Math.min(a[0], b[0]); x<=Math.max(a[0], b[0]); x++) {
                    map[y] = map[y] || [];
                    map[y][x] = '#';
                }
            }
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

export function fillSand(complex) {
    let max = 1000;
    let i = 0;
    while(true && i++ < max) {
        
    }

    return 0;
}