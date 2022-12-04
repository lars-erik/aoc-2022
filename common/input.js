import fs from "fs";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { asLines } from './parsing.js';

function fullPath(meta, input) {
    const __dirname = dirname(fileURLToPath(meta.url));
    return __dirname + `/${input}.txt`;
};

export function getData(meta, input) {
    let data = fs.readFileSync(fullPath(meta, input), {encoding:'utf8', flag:'r'});
    return data;
}

export function writeData(meta, name, data) {
    fs.writeFileSync(fullPath(meta, name), data, {encoding: 'utf8'});
}