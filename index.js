// Your code here
const sourceArray=[1,2,3,-9];
const mapToNegativize = sourceArray.map(x => x * -1);
console.log(mapToNegativize);
mapToNoChange(sourceArray);
mapToDouble(sourceArray);
mapToSquare(sourceArray);


reduceToTotal(sourceArray, startingPoint);
reduceToAllTrue(sourceArray);
reduceToAnyTrue(sourceArray);
