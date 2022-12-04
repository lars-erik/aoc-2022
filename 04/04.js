import { asLines, getData, writeData } from './../common/input.js';

function isFullOverlap(a, b) {
    return a.x1 >= b.x1 
        && a.x1 <= b.x2
        && a.x2 >= b.x1
        && a.x2 <= b.x2;
}

function isOverlap(a, b) {
    return (a.x1 >= b.x1
        && a.x1 <= b.x2)
        || (a.x2 >= b.x1
        && a.x2 <= b.x2);
}

function createPair(line) {
    let pair = line.split(',')
        .map(segs => {
            let ids = segs.split('-');
            return {
                x1: Number(ids[0]),
                x2: Number(ids[1])
            }
        });
    let obj = {
        a: pair[0],
        b: pair[1],
        hasFullOverlap: isFullOverlap(pair[0], pair[1]) || isFullOverlap(pair[1], pair[0]),
        hasOverlap: isOverlap(pair[0], pair[1]) || isOverlap(pair[1], pair[0])
    }
    return obj;
}

export function totalFullOverlaps(input) {
    let lines = asLines(getData(import.meta, input));
    let pairs = lines.map(createPair);
    
    let pairsOfTotalOverlap = pairs.filter(p => {
        return p.hasFullOverlap;
    });

    return pairsOfTotalOverlap.length;
}

export function totalOverlaps(input) {
    let lines = asLines(getData(import.meta, input));
    let pairs = lines.map(createPair);
    
    let pairsOfOverlap = pairs.filter(p => {
        return p.hasOverlap;
    });

    return pairsOfOverlap.length;
}