import { asLines } from './../common/parsing.js';

export function sumSmallFolders(data) {
    let lines = asLines(data);
    let root = {
        path: [],
        dirs: [],
        files: [],
        parent: null
    };
    let current = root;
    for(let i = 0; i<lines.length; i++) {
        let parts = lines[i].split(' ');
        if (parts[0] === '$') {
            switch(parts[1]) {
                case 'cd':
                    if (parts[2] === '..') {
                        current = current.parent;
                    } else if (parts[2] === '/') {
                        current = root;
                    } else {
                        current = current.dirs.filter(x => x.path[x.path.length-1] == parts[2])[0];
                    }
                    break;
                case 'ls': 
                    let count = 0;
                    for(let j = i + 1; j < lines.length && lines[j].indexOf("$") === -1; j++) {
                        let parts = lines[j].split(' ');
                        if (parts[0] === 'dir') {
                            current.dirs.push({
                                path: current.path.concat(parts[1]),
                                dirs: [],
                                files: [],
                                parent: current
                            });
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

    writeNode({dirs:[root], files:[]});

    return -1;
}

function writeNode(node, indent = '') {
    for(let j = 0; j<node.dirs.length; j++) {
        console.log(indent + '/' + node.dirs[j].path.join('/'));
        writeNode(node.dirs[j], indent + '  ');
    }
    for(let j = 0; j<node.files.length; j++) {
        let f = node.files[j];
        console.log(indent + f.size + " " + f.name);
    }
}