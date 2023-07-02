import * as fs from 'fs';
import * as path from 'path';

const _regex = { newLine: /\r?\n/ }

export function processData(trainingSamplePath) {
    const fileLoaded = fs.readFileSync(path.resolve(trainingSamplePath), 'utf-8');
    return fileLoaded.split(_regex.newLine).map((line) => {
        const attributeList = line.split(',');
        return {
            classType: attributeList.shift(),
            attributes: attributeList
        }
    });
}

// console.log(memorize());