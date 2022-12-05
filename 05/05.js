import { asLines } from './../common/parsing.js';

function getPuzzle(data) {
    let lines = asLines(data);
    let stackCols = [];
    let i = 0;
    for(; i < lines.length; i++) {
        let line = lines[i];
        if (line.indexOf('[') === -1) break;
        for(let j = 0; j<line.length; j += 4) {
            let k = j / 4;
            if (!stackCols[k]) stackCols[k] = [];
            if (line[j + 1] !== ' ') {
                stackCols[k].splice(0, 0, line[j + 1]);
            }
        }
    }
    let moves = [];
    for(; i < lines.length; i++) {
        let line = lines[i];
        if (line === '' || line[0] === ' ') continue;
        let instr = line
            .replace('move ', '')
            .replace('from ', '')
            .replace('to ', '')
            .split(' ').map(Number);
        
        moves.push(instr);
    }
    let puzzle = {
        stackCols,
        moves
    }
    return puzzle;
}

export function findTopByToH(data) {
    let {stackCols, moves} = getPuzzle(data);

    for(let i = 0; i<moves.length; i++) {
        let inst = moves[i];
        let count = inst[0];
        let from = inst[1] - 1;
        let to = inst[2] - 1;

        for (let j = 0; j<count; j++) {
            let val = stackCols[from].pop();
            stackCols[to].push(val);
        }
    }

    return stackCols.map(c => c[c.length - 1]).join('');
}

export function findTopByEfficient(data) {
    let {stackCols, moves} = getPuzzle(data);

    for(let i = 0; i<moves.length; i++) {
        let inst = moves[i];
        let count = inst[0];
        let from = inst[1] - 1;
        let to = inst[2] - 1;

        const fromArr = stackCols[from];
        let things = fromArr.splice(fromArr.length - count, count);
        for(let j = 0; j < things.length; j++) {
            stackCols[to].push(things[j]);
        }
    }

    return stackCols.map(c => c[c.length - 1]).join('');
}