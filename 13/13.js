import { asLines } from './../common/parsing.js';

function parse(data) {
    let lines = asLines(data);
    let pairs = [];
    for(let i = 0; i<lines.length; i+=3) {
        let pair = {
            a: JSON.parse(lines[i]),
            b: JSON.parse(lines[i+1])
        };
        pairs.push(pair);
    }
    return pairs;
}

function compare({a, b}) {
    return 0;
}

export function findCorrectIndices(data) {
    let pairs = parse(data);
    let correct = [];
    for(let i = 0; i<pairs.length; i++) {
        let pair = pairs[i];
        let comparison = compare(pair);
        if (comparison < 1) {
            correct.push(i);
        }
    }
    console.log(pairs);

    return correct.reduce((s, c) => s + c, 0);
}