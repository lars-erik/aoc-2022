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

function compareItem({a, b}) {
    if (typeof(a) === 'number' && typeof(b) === 'number') {
        return a < b ? -1 : b < a ? 1 : 0;
    }
    if (typeof(a) === 'number') a = [a];
    if (typeof(b) === 'number') b = [b];
    return compareArray(a, b);
}

export function compareArray(a, b) {
    for(let i = 0; i<Math.min(a.length, b.length); i++) {
        const subPair = { a: a[i], b: b[i] };
        let current = compareItem(subPair);
        //console.log(subPair, current);
        if (current !== 0) {
            return current;
        }
    }
    return compareItem({a:a.length, b:b.length});
}

export function findCorrectIndices(data) {
    let pairs = parse(data);
    let correct = [];
    for(let i = 0; i<pairs.length; i++) {
        let pair = pairs[i];
        let comparison = compareArray(pair.a, pair.b);
        if (comparison < 1) {
            correct.push(i);
        }
    }
    //console.log(pairs.map(JSON.stringify));
    //console.log(correct);

    return correct.reduce((s, c) => s + c + 1, 0);
}

export function findDecoderKey(data) {
    const two = [[2]];
    const six = [[6]];
    let packets = parse(data)
        .reduce((all, c) => all.concat([c.a, c.b]), [])
        .concat([two, six]);
    packets.sort((a, b) => compareArray(a, b));
    let indexOfTwo = packets.indexOf(two) + 1;
    let indexOfSix = packets.indexOf(six) + 1;
    return indexOfTwo * indexOfSix;
}