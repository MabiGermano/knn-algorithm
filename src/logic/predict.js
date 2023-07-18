export function predictClass(kNeighbors) {
    const classCategories = kNeighbors.reduce((classTypes, element) => {
        const { classType } = element;
        classTypes[classType] = classTypes[classType]+1 || 1;
        return classTypes;
    }, {});

    const possibleClass = { quantity: 0, currentValue: '' };
    Object.entries(classCategories).forEach(([key, value]) => {
        if (value > possibleClass.quantity) {
            possibleClass.quantity = value;
            possibleClass.currentValue = key;
        }
    })

    return possibleClass.currentValue;
}