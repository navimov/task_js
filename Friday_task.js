// TASK_#1
// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min.apply(null, args);
  };

}
// TASK_#2
// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
  return 2 * 3.141592653589793238 * circle.radius;
}

//TASK_#3
//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
  const arrResult = [];
  for (let key in obj) {
    if (key.length === 5) {
      arrResult.push(key);
    };
    if (obj[key].length === 5) {
      arrResult.push(obj[key]);
    };
  };
  return arrResult;
}