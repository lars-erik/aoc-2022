import fs from "fs";

function getSums(path) {
    let data = fs.readFileSync(path, {encoding:'utf8', flag:'r'});
    let lines = data.replace('\r', '').split('\n');
    let sums = lines.reduce((elves, line) => {
        if (line.length === 1) {
            elves.push(0);
        } else {
            elves[elves.length - 1] += Number(line);
        }
        return elves;
    }, [0]);   
    return sums;
}

export default {
    heaviestElf(path) {
        let sums = getSums(path);
        let max = sums.reduce((max, cur) => cur > max ? cur : max, 0);
        return max;
    },
    threeHeaviestElves(path) {
        let sums = getSums(path);
        let threeTotal = sums
            .sort((a,b) => b - a)
            .slice(0, 3)
            .reduce((s, c) => s + c, 0);
        return threeTotal;
    }
}