import { asLines } from './../common/parsing.js';

class AddX {
    constructor(value) {
        this.value = Number(value);
        this.timeLeft = 2;
    }

    execute(cpu) {
        this.timeLeft--;
        if (this.timeLeft === 0) {
            cpu.x = cpu.x + this.value;
        }
        return this.timeLeft;
    }
}

class Noop {
    execute() {
        return 0;
    }
}

const instructions = {
    'addx': AddX,
    'noop': Noop  
}

function parse(data) {
    return asLines(data)
        .map(l => {
            let parts = l.split(' ');
            return new instructions[parts[0]](parts.slice(1));
        });
}

export default class {
    clock = 0;
    instruction = 0;
    x = 1;

    constructor(data) {
        this.program = parse(data);
        this.current = this.program[this.instruction];
    }

    update() {
        this.clock++;
        let timeLeft = this.current.execute(this);
        if (timeLeft === 0) {
            this.instruction++;
            this.current = this.program[this.instruction];
        }
        return this.current !== undefined;
    }
}