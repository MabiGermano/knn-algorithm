import * as fs from 'fs';
import * as path from 'path';

const _regex = { newLine: /\r?\n/ }

export function trainingProcess(trainingSamplePath) {
    const fileLoaded = fs.readFileSync(path.resolve(trainingSamplePath), 'utf-8');
    return fileLoaded.split(_regex.newLine).map((line) => {
        const attributeList = retrieveAttributes(line);
        return {
            classType: attributeList.shift(),
            attributes: attributeList
        }
    });
}

export function testProcess(testSamplePath) {
    const fileLoaded = fs.readFileSync(path.resolve(testSamplePath), 'utf-8');
    return fileLoaded.split(_regex.newLine).map((line) => {
        return retrieveAttributes(line);
    });
}

export function retrieveAttributes(line) {
    return line.split(',');
}

// console.log(memorize());