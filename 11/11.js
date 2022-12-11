import { asLines } from './../common/parsing.js';

class Monkey {
    items = [];
    inspections = 0;

    constructor(id) {
        this.id = id;
    }
}

export function monkeyBusiness(data, rounds = 20) {
    let lines = asLines(data);
    let monkey = null;
    let monkeys = [];
    for(let i = 0; i<lines.length; i++) {
        let line = lines[i];
        let pair = line.split(':');
        if (pair[0].indexOf("Monkey") === 0) {
            let id = Number(pair[0].split(' ')[1]);
            monkey = new Monkey(id);
            monkeys[id] = monkey;
        } else {
            switch(pair[0].trim()) {
                case 'Starting items':
                    monkey.items = pair[1].trim().split(',').map(x => Number(x.trim()));
                    break;
                case 'Operation':
                    monkey.op = (old) => {
                        let adj = 0;
                        eval(pair[1].trim().replace('new', 'adj'));
                        adj = Math.floor(adj / 3);
                        return adj;
                    }
                    break;
                case 'Test':
                    monkey.test = (n) => {
                        let num = Number(pair[1].split(' ').pop());
                        return n % num === 0;
                    }
                    break;
                case 'If true':
                    monkey.trueTarget = Number(pair[1].split(' ').pop());
                    break;
                case 'If false':
                    monkey.falseTarget = Number(pair[1].split(' ').pop());
                    break;
                }
        }
    }

    let maxRounds = 20;
    for(let round = 0; round<Math.min(maxRounds, rounds); round++) {
        for(let m = 0; m<monkeys.length; m++) {
            let monkey = monkeys[m];
            for(let i = 0; i<monkey.items.length; i++) {
                monkey.inspections++;
                let worry = monkey.items[i];
                let adjusted = monkey.op(worry);
                let ab = monkey.test(adjusted);
                if (ab) {
                    monkeys[monkey.trueTarget].items.push(adjusted);
                } else {
                    monkeys[monkey.falseTarget].items.push(adjusted);
                }
            }
            monkey.items = [];
        }
        console.log(round + 1, monkeys.map(x => x.id + ' ' + x.inspections + ' ' + x.items));

    }
 
    let mostActive = monkeys.sort((a, b) => b.inspections - a.inspections).slice(0, 2);

    console.log(mostActive);

    return mostActive.reduce((p, m) => p * m.inspections, 1);
}