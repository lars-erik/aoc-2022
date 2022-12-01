import fs from "fs";

export default {
    heaviestElf(path) {
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
        let max = sums.reduce((max, cur) => cur > max ? cur : max, 0);
        return max;
    }
}