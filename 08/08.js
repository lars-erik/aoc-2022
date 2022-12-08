import { asLines } from './../common/parsing.js';
import { getData } from './../common/input.js';

class Forest {
    constructor(trees) {
        this.trees = trees;
    }

    updateVisibility() {
        for (let y = 0; y < this.trees.length; y++) {
            for (let x = 0; x < this.trees[0].length; x++) {
                this.trees[y][x].updateVisibility(this.trees);
            }
        }
    }
}

class Tree {
    constructor(x, y, height) {
        this.x = x;
        this.y = y;
        this.height = height;
    }

    updateVisibility(trees) {
        this.visibleTrees = [];
        this.visible = false;

        // Look north
        let seen = 0;
        if (this.y === 0) {
            this.visible = true;
        } else {
            for (let y = this.y - 1; y >= 0; y--) {
                if (trees[y][this.x].height < this.height) {
                    seen++;
                    if (y === 0) {
                        this.visible = true;
                    }
                } else {
                    seen++;
                    break;
                }
            }
        }
        this.visibleTrees.push(seen)

        // Look south
        seen = 0;
        if (this.y === trees.length - 1) {
            this.visible = true;
        } else {
            for (let y = this.y + 1; y < trees.length; y++) {
                if (trees[y][this.x].height < this.height) {
                    seen++;
                    if (y === trees.length - 1) {
                        this.visible = true;
                    }
                } else {
                    seen++;
                    break;
                }
            }
        }
        this.visibleTrees.push(seen)

        // Look west
        seen = 0;
        if (this.x === 0) {
            this.visible = true;
        } else {
            for (let x = this.x - 1; x >= 0; x--) {
                if (trees[this.y][x].height < this.height) {
                    seen++;
                    if (x === 0) {
                        this.visible = true;
                    }
                } else {
                    seen++;
                    break;
                }
            }
        }
        this.visibleTrees.push(seen);

        // Look east
        seen = 0;
        if (this.x === trees[0].length - 1) {
            this.visible = true;
        } else {
            for (let x = this.x + 1; x < trees[0].length; x++) {
                if (trees[this.y][x].height < this.height) {
                    seen++;
                    if (x === trees[0].length - 1) {
                        this.visible = true;
                    }
                } else {
                    seen++;
                    break;
                }
            }
        }
        this.visibleTrees.push(seen);
 
        this.scenicScore = this.visibleTrees.reduce((t, c) => t * c, 1);
    }
}

export function discover(input) {
    let trees = asLines(getData(import.meta, input))
        .map((l, y) => l.split('').map((t, x) => new Tree(x, y, Number(t))));
    let forest = new Forest(trees);
    forest.updateVisibility();
    return forest.trees;
}