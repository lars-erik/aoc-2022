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

function cd(root, current, dir) {
    switch(dir) {
        case '..': return current.parent;
        case '/': return root;
        default: return current.dirs.filter(x => x.name == dir)[0]
    }
}

export function parse(data) {
    let lines = asLines(data);
    let root = new Directory();
    let current = root;
    let all = [root];
    for (let i = 0; i < lines.length; i++) {
        let parts = lines[i].split(' ');
        if (parts[0] === '$') {
            switch (parts[1]) {
                case 'cd':
                    current = cd(root, current, parts[2]);
                    break;
                case 'ls':
                    let count = 0;
                    for (let j = i + 1; j < lines.length && lines[j].indexOf("$") === -1; j++) {
                        let parts = lines[j].split(' ');
                        if (parts[0] === 'dir') {
                            const newDir = new Directory(current, parts[1]);
                            all.push(newDir);
                            current.dirs.push(newDir);
                        } else {
                            current.files.push({
                                name: parts[1],
                                size: Number(parts[0])
                            });
                        }
                        count++;
                    }
                    i += count ? count - 1 : 0;
                    break;
            }
        }
    }
    let parsed = { root, all };
    return parsed;
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