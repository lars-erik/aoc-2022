import { asLines, getData } from './../common/input.js'

function findCommonItem(line) {
    let partA = line.substring(0, line.length / 2);
    let partB = line.substring(line.length / 2);
    for(let i = 0; i<partA.length; i++) {
        if (partB.indexOf(partA[i]) > -1) {
            return partA[i];
        }
    }
    return null;
}

function priority(letter) {
    if (letter.charCodeAt(0) >= 97) {
        return letter.charCodeAt(0) - 97 + 1;
    } else {
        return letter.charCodeAt(0) - 65 + 1 + 26;
    }
}

export function sumPriorities(input) {
    let lines = asLines(getData(import.meta, input));
    let commonItems = lines.map(findCommonItem);
    let priorities = commonItems.map(priority);
    let sum = priorities.reduce((a, b) => a + b, 0);
    return sum;
}