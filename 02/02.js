import { asLines } from './../common/input.js'

const ROCK = 1;
const PAPER = 2;
const SCISSOR = 3;

function identity(letter) {
    switch (letter) {
        case 'A': case 'X': return 1;
        case 'B': case 'Y': return 2;
        case 'C': case 'Z': return 3;
    }
}

const ME = 1;
const OPPONENT = -1;
const DRAW = 0;
function winner(a, b) {
    if (a === ROCK && b === PAPER) {
        return ME;
    } else if (a === ROCK && b === SCISSOR) {
        return OPPONENT;
    } else if (a === PAPER && b === SCISSOR) {
        return ME;
    } else if (a === PAPER && b == ROCK) {
        return OPPONENT;
    } else if (a === SCISSOR && b === ROCK) {
        return ME;
    } else if (a === SCISSOR && b === PAPER) {
        return OPPONENT;
    } else {
        return DRAW;
    }
}

function identify(line) {
    let parts = line.split(' ').map(identity);
    return parts;
}

function turnScore(choice) {
    let result = winner(choice[0], choice[1]);
    let chScore = choice[1];
    switch(result) {
        case OPPONENT: return chScore;
        case DRAW: return chScore + 3;
        case ME: return chScore + 6;
    }
}

export function identifyEach(data) {
    return asLines(data).map(identify);
}

export function score(data) {
    let choices = identifyEach(data);
    let scores = choices.map(turnScore);
    return scores.reduce((s, c) => s + c, 0);
}