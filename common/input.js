import fs from "fs";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

function fullPath(meta, input) {
    const __dirname = dirname(fileURLToPath(meta.url));
    return __dirname + `/${input}.txt`;
};

export function getData(meta, input) {
    let data = fs.readFileSync(fullPath(meta, input), {encoding:'utf8', flag:'r'});
    return data;
}

export function asLines(data) {
    return data.replace(/\r/g, '').split('\n');
}