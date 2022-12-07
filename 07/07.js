import { asLines } from './../common/parsing.js';


export function sumSmallFolders(data) {
    let parsed = parse(data);

    let candidates = parsed.all.filter(x => x.totalSize() <= 100000);

    return candidates.reduce((s, c) => s + c.totalSize(), 0);
}

export function folderToDelete(data) {
    const totalSize = 70_000_000;
    const totalNeeded = 30_000_000;
    let parsed = parse(data);
    let used = parsed.root.totalSize();
    let free = totalSize - used;

    let candidates = parsed.all
        .filter(d => (free + d.totalSize()) >= totalNeeded)
        .sort((a, b) => a.totalSize() - b.totalSize());

    return {name:candidates[0].name, size:candidates[0].totalSize()};
}

export function parse(data) {
    return new Parser(data).parse();
}

class Parser
{
    constructor(data) {
        this.lines = asLines(data);
        this.root = new Directory();
        this.current = this.root;
        this.all = [this.root];
    }

    parse() {
        for (let i = 0; i < this.lines.length; i++) {
            let parts = this.lines[i].split(' ');
            if (parts[0] === '$') {
                i += this.execute(parts[1], parts[2], i);
            }
        }
        let parsed = { root:this.root, all:this.all };
        return parsed;
    }

    execute(command, args, i) {
        switch (command) {
            case 'cd': return this.cd(args);
            case 'ls': return this.ls(i + 1);
            default: throw new Error("No such command");
        }
    }

    ls(startAt) {
        let count = 0;
        for (let i = startAt; i < this.lines.length && this.lines[i].indexOf("$") === -1; i++) {
            this.parseLsLine(this.lines[i]);
            count++;
        }
        return count ? count - 1 : 0;
    }

    cd(name) {
        this.current = this.getDir(name);
        return 0;
    }

    getDir(dir) {
        switch(dir) {
            case '..': return this.current.parent;
            case '/': return this.root;
            default: return this.current.dirs.filter(x => x.name == dir)[0]
        }
    }

    parseLsLine(line) {
        let parts = line.split(' ');
        if (parts[0] === 'dir') {
            const newDir = new Directory(this.current, parts[1]);
            this.all.push(newDir);
            this.current.dirs.push(newDir);
        } else {
            this.current.files.push({
                name: parts[1],
                size: Number(parts[0])
            });
        }
    }
}

class Directory
{
    path = [];
    dirs = [];
    files = [];

    constructor(parent, name) {
        this.parent = parent;
        this.name = name || '/';
        this.path = parent ? parent.path.concat(name) : [];
    }

    localSize() {
        return this.files.reduce((s, f) => s + f.size, 0);
    }

    totalSize() {
        return this.localSize() + this.dirs.reduce((s, d) => s + d.totalSize(), 0);
    }

    writeTo(out, indent = '') {
        this.dirs.forEach(dir => {
            out(`${indent} + ${dir.name} (dir) (${dir.localSize()}) (${dir.totalSize()})`);
            dir.writeTo(out, indent + ' |');
        });
        this.files.forEach(file => {
            out(`${indent} + ${file.name} (${file.size})`);
        });
    }
}