import { asLines } from './../common/parsing.js';

export function parse(data, enableFloor) {
    const minY = 0;
    let maxY = 0;
    let floorY;
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
    let rockCoords = [];
    for (let l = 0; l < lines.length; l++) {
        for (let ci = 0; ci < lines[l].length - 1; ci++) {
            let a = lines[l][ci];
            let b = lines[l][ci + 1];
            for (let y = Math.min(a[1], b[1]); y <= Math.max(a[1], b[1]); y++) {
                for (let x = Math.min(a[0], b[0]); x <= Math.max(a[0], b[0]); x++) {
                    map[y] = map[y] || [];
                    map[y][x] = '#';
                    rockCoords.push([x, y]);
                }
            }
        }
    }

    maxY += 2;
    floorY = maxY;
    map[maxY-1] = [];
    map[maxY] = [];
    for (let x = minX - 500; x <= maxX + 500; x++) {
        map[maxY][x] = '#';
        rockCoords.push([x, maxY]);
    }

    return {
        cave: map,
        rockCoords,
        bounding: {
            minY,
            maxY,
            minX,
            maxX,
            floorY
        }
    };
}

export class Simulation {
    i = 0; // Grain index
    resting = [];
    done = false;
    grain = [500, 0];

    constructor(complex, maxIter = 100) {
        this.complex = complex;
        this.maxIter = maxIter;
        this.map = complex.cave;
        if (!this.map[0]) this.map[0] = [];
    }

    enableFloor() {
        this.complex.bounding.maxY = this.complex.bounding.floorY;
    }

    disableFloor() {
        this.complex.bounding.maxY = this.complex.bounding.floorY - 2;
    }

    update() {
        let moreToDo = this.i++ < this.maxIter && !this.done;
        if (!moreToDo) return false;

        const map = this.map;
        let grain = this.grain;
        let y = grain[1] + 1;

        if (y > this.complex.bounding.maxY) {
            grain[1]++;
            if (grain[1] > this.complex.bounding.maxY + 10) {
                this.grain = [500, 0];
            }
            return true;
        }

        if (!map[y]) map[y] = [];

        if (!map[y][grain[0]]) {
            grain[1] = y;
            return true;
        }

        if (!map[y][grain[0] - 1]) {
            grain[1] = y;
            grain[0] = grain[0] - 1;
            return true;
        }

        if (!map[y][grain[0] + 1]) {
            grain[1] = y;
            grain[0] = grain[0] + 1;
            return true;
        }

        if (map[y][grain[0]] &&
            map[y][grain[0] - 1] &&
            map[y][grain[0] + 1]) {
            map[grain[1]][grain[0]] = 'o';
            this.resting.push(grain);
            if (grain[1] === 0 && grain[0] === 500) {
                this.done = true;
                return false;
            }

            this.grain = [500, 0];
            return true;
        }

        this.done = true;
        return false;
    }
}

export function fillSand(complex, enableFloor, maxIter = 100) {
    let j = -10;
    let sim = new Simulation(complex, maxIter);
    if (enableFloor) {
        sim.enableFloor();
    } else {
        sim.disableFloor();
    }
    while(sim.update() && j++ < maxIter) {}
    return sim;
}