export function asLines(data) {
    return data.replace(/\r/g, '').split('\n');
}
