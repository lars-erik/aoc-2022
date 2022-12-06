export function findPacketStart(input, distinctCount) {
    let startIndex = distinctCount - 1;
    for(let i = startIndex; i<input.length; i++) {
        let counts = Array.from(input
            .slice(i-startIndex, i+1))
            .reduce((g, c) => {
                g[c] = (g[c] || 0) + 1;
                return g;
            }, {});
        if (Object.keys(counts).length === distinctCount) {
            return i + 1;
        };
    }
    return -1;
}