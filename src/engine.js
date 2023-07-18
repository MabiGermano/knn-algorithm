import { parseData } from "./data/parse.js";
import { comparableDistance, findDistance } from "./logic/core.js";
import { predictClass } from "./logic/predict.js";

const k = 9;
const dbTraining = parseData('./assets/training-sample.csv');
const testList = parseData('./assets/test-sample.csv');
const confusionMatrix = {};

testList.forEach(testElement => {
    const distanceList = dbTraining.map(dbElement =>
        findDistance(testElement.attributes, dbElement)
    ).sort(comparableDistance);
    const predictedClass = predictClass(distanceList.slice(0, k));
    const labelRealClass = `Real class ${testElement.classType}`;
    const labelPredictedClass =`Predicted class ${predictedClass}`
    if(confusionMatrix[labelRealClass]) 
        confusionMatrix[labelRealClass][labelPredictedClass] = 
            confusionMatrix[labelRealClass][labelPredictedClass]+1 || 1;
    else 
        confusionMatrix[labelRealClass] = {[labelPredictedClass]: 1};
    
});

 console.log("Sendo k = ", k);
 console.log(confusionMatrix);
