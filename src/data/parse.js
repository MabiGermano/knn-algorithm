import * as fs from 'fs';
import * as path from 'path';

const _regex = { newLine: /\r?\n/ }

export function parseData(trainingSamplePath) {
    const fileLoaded = fs.readFileSync(path.resolve(trainingSamplePath), 'utf-8');
    return fileLoaded.split(_regex.newLine).map((line) => {
        const attributeList = _retrieveAttributes(line);
        return {
            classType: attributeList.shift().toString(),
            attributes: attributeList
        }
    });
}

export function testProcess(testSamplePath) {
    const fileLoaded = fs.readFileSync(path.resolve(testSamplePath), 'utf-8');
    return fileLoaded.split(_regex.newLine).map((line) => {
        return _retrieveAttributes(line);
    });
}

function _retrieveAttributes(line, charDelimiter = ',') {
    return line.split(charDelimiter);
}
