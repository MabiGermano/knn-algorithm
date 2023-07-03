import { trainingProcess, testProcess } from "./data-process.js";

const k = 3;
const dbTraining = trainingProcess('./assets/training-sample-minor');
const testList = testProcess('./assets/test-sample-minor');

function findDistance(testElement, dbElement) {
    if (testElement.length == dbElement.attributes.length)
        return {
            classType: dbElement.classType,
            distance: testElement.reduce((acc, currentValue, index) =>
                Math.abs(currentValue - dbElement.attributes[index]) + acc
                , 0)
        }
    else
        throw new Error("Test element is not as expected");
}

testList.forEach(testElement => {

    const distanceList = dbTraining.map(dbElement =>
        findDistance(testElement, dbElement)
    );

    distanceList.sort((aItem, bItem) => {
        if (aItem.distance > bItem.distance) return 1;
        if (aItem.distance < bItem.distance) return -1;
        return 0;
    });

    appointClass(distanceList.slice(0, k));

});

function appointClass(kNeighbors) {

    const classCategories = kNeighbors.reduce((classTypes, element) => {
        const { classType } = element;
        classTypes[classType.toString()] = classTypes[classType.toString()] ?? [];
        classTypes[classType.toString()].push(element);
        return classTypes;
    }, {});

    const possibleClass = { arr: [], value: '' };
    Object.entries(classCategories).forEach(([key, value]) => {
        if (value.length > possibleClass.arr.length) {
            possibleClass.arr = value;
            possibleClass.value = key;
        }
    })

    return possibleClass.value
}