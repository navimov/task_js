// TASK_#1
// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min.apply( null, args);
    };
    
  }
// TASK_#2
// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
    return 2 * 3.141592653589793238 * circle.radius;
    }