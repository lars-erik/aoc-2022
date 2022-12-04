import { asLines } from './../common/parsing.js';

class Segment {

    constructor(x1, x2) {
        this.x1 = x1[0] || x1;
        this.x2 = x1[1] || x2;
    }

    static fromString = (value) => new Segment(value.split('-').map(Number));

    isFullOverlap = (b) =>
        this.x1 >= b.x1
        && this.x1 <= b.x2
        && this.x2 >= b.x1
        && this.x2 <= b.x2;

    isOverlap = (b) =>
        this.x1 >= b.x1
        && this.x1 <= b.x2
        || this.x2 >= b.x1
        && this.x2 <= b.x2;
}

class Pair {

    constructor(a, b) {
        this.a = a[0] || a;
        this.b = a[1] || b;
    }

    static fromString = (value) => new Pair(value.split(',').map(Segment.fromString));

    hasFullOverlap = () =>
        this.a.isFullOverlap(this.b)
        || this.b.isFullOverlap(this.a);

    hasOverlap = () =>
        this.a.isOverlap(this.b)
        || this.b.isOverlap(this.a);

}

export const parse = (data) => asLines(data).map(Pair.fromString);

export const totalFullOverlaps = (data) => 
    parse(data)
        .filter(p => p.hasFullOverlap())
        .length;

export const totalOverlaps = (data) =>
    parse(data)
        .filter(p => p.hasOverlap())
        .length;