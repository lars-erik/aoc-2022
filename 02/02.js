import { asLines } from './../common/parsing.js'

const ROCK = 1;
const PAPER = 2;
const SCISSOR = 3;

const LOSE = -1;
const DRAW = 0;
const WIN = 1;

const winMatrix = [
    [0, 1, -1],
    [-1, 0, 1],
    [1, -1, 0]
];

const strategies = [
    LOSE,
    DRAW,
    WIN
];

const modulo = (n, d) => ((n % d) + d) % d;

function identity(letter) {
    switch (letter) {
        case 'A': case 'X': return ROCK;
        case 'B': case 'Y': return PAPER;
        case 'C': case 'Z': return SCISSOR;
    }
}

function winner(a, b) {
    return winMatrix[a-1][b-1];
}

function chooseByStrategy(a, b) {
    let strategy = strategies[b-1];
    let choice = modulo((a-1+strategy),3)+1;
    return choice;
}

function identify(line) {
    let parts = line.split(' ').map(identity);
    return parts;
}

function turnScore(choice) {
    let result = winner(choice[0], choice[1]);
    let chScore = choice[1];
    switch(result) {
        case LOSE: return chScore;
        case DRAW: return chScore + 3;
        case WIN: return chScore + 6;
    }
}

function turnScoreByStrategy(choice) {
    let myChoice = chooseByStrategy(choice[0], choice[1]);
    return turnScore([choice[0], myChoice]);
}

export function identifyEach(data) {
    return asLines(data).map(identify);
}

export function score(data) {
    let choices = identifyEach(data);
    let scores = choices.map(turnScore);
    return scores.reduce((s, c) => s + c, 0);
}

export function scoreByStrategy(data) {
    let choices = identifyEach(data);
    let scores = choices.map(turnScoreByStrategy);
    return scores.reduce((s, c) => s + c, 0);
}