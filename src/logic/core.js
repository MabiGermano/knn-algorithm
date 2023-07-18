export function findDistance(testAttributes, dbElement) {
    if (testAttributes.length == dbElement.attributes.length)
        return {
            classType: dbElement.classType,
            distance: testAttributes.reduce((acc, currentValue, index) =>
                Math.abs(currentValue - dbElement.attributes[index]) + acc
                , 0)
        }
    else
        throw new Error("Test element is not as expected");
}

export function comparableDistance(aItem, bItem) {
    if (aItem.distance > bItem.distance) return 1;
    if (aItem.distance < bItem.distance) return -1;
    return 0;
}
