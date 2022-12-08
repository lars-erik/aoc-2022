import { asLines } from './../common/parsing.js';

class Forest {
    constructor(trees) {
        this.trees = trees;
    }

    updateVisibility() {
        let visible = 0;
        for (let y = 0; y < this.trees.length; y++) {
            for (let x = 0; x < this.trees[0].length; x++) {
                visible += this.trees[y][x].updateVisibility(this.trees);
            }
        }
        this.visibleTrees = visible;
    }
}

class Tree {
    constructor(x, y, height) {
        this.x = x;
        this.y = y;
        this.height = height;
    }

    updateDirection(from, to, limit, dir, getTree) {
        let seen = 0;
        for (let i = from; limit(i); i += dir) {
            const tree = getTree(i);
            const notMe = tree !== this;
            if (notMe) {
                seen++;
            }
            if (notMe && tree.height >= this.height) {
                break;
            }
            if (i === to) {
                this.visible = true;
            }
        }
        this.visibleTrees.push(seen);
    }

    updateVisibility(trees) {
        this.visibleTrees = [];
        this.visible = false;

        const vertical = y => trees[y][this.x];
        const horizontal = x => trees[this.y][x];

        // Look north
        this.updateDirection(this.y, 0, y => y >= 0, -1, vertical);
        // Look south
        this.updateDirection(this.y, trees.length - 1, y => y < trees.length, 1, vertical);

        // Look west
        this.updateDirection(this.x, 0, x => x >= 0, -1, horizontal);
        // Look east
        this.updateDirection(this.x, trees[0].length - 1, x => x < trees[0].length, 1, horizontal);
 
        this.scenicScore = this.visibleTrees.reduce((t, c) => t * c, 1);

        return this.visible ? 1 : 0;
    }
}

export function discover(data) {
    let trees = asLines(data)
        .map((l, y) => l.split('').map((t, x) => new Tree(x, y, Number(t))));
    let forest = new Forest(trees);
    forest.updateVisibility();
    return forest;
}