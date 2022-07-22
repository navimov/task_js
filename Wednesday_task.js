//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
    return string.split(" ");
};

//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
    return dna.replace(/T/g, "U");
}

//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function (list) {
    let lowestNum = list[0];
    for (let i = 0; i < list.length; i++) {
        if (lowestNum > list[i]) {
            lowestNum = list[i];
            ;
        }
    };
    return lowestNum;
}

var max = function (list) {
    let bigestNum = list[0];
    for (let i = 0; i < list.length; i++) {
        if (bigestNum < list[i]) {
            bigestNum = list[i];
            ;
        }
    };
    return bigestNum;
}

//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
    let lowestNum = arr[0];
    let indexLowestNum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (lowestNum > arr[i]) {
            lowestNum = arr[i];
            indexLowestNum = i;
        };
    };
    return toReturn === "value" ? lowestNum : indexLowestNum;
}

//https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
function warnTheSheep(queue) {
    let queueReverse = queue.reverse();
    let wolfIndex = queue.indexOf("wolf");
    return wolfIndex > 0 ? "Oi! Sheep number " + wolfIndex + "! You are about to be eaten by a wolf!" :
        "Pls go away and stop eating my sheep";
};

// https://www.codewars.com/kata/beginner-lost-without-a-map
let arr = [1, 2, 3, 5];
let resultArr = [];
function doubleNum(arr) {
    for (let i = 0; i < arr.length; i++) {
        resultArr[i] = arr[i] * 2;

    };
    return resultArr;

};

// https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
function firstNonConsecutive(arr) {
    let checkNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (Math.abs(arr[i]) - Math.abs(checkNum) != 1) {
            return arr[i];
        } else {
            checkNum = arr[i];
            if (i === arr.length) {
                return null;
            };
        };
    };
}

// https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    return i * 2;
}

//  https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
function yearInCentury(year) {
    return Math.ceil(year / 100);
};

// https://www.codewars.com/kata/523b66342d0c301ae400003b/train/javascript
function multiply(num1, num2) {
    return num1 * num2;
}

//  https://www.codewars.com/kata/58261acb22be6e2ed800003a/train/javascript
class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length * width * height;
    }
}

//  https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
    if (num > 0) {
        return -num;
    } else {
        return num;
    }
};

//  https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
function cockroachSpeed(s) {
    return Math.floor(s * 100000 / 3600);
}
//  https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
function otherAngle(a, b) {
    return 180 - a - b;
}

//  https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
    if (dadYearsOld - sonYearsOld < sonYearsOld) {
        return sonYearsOld - (dadYearsOld - sonYearsOld);
    } else if (dadYearsOld - sonYearsOld > sonYearsOld) {
        return (dadYearsOld - sonYearsOld) - sonYearsOld;
    }
    return 0;
}

//  https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
function nthEven(n) {
    return n * 2 - 2;
}

// https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
function getRealFloor(n) {
    return n < 13 ? n - 1 : n - 2;
}

//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
function past(h, m, s) {
    return (h * 3600 + m * 60 + s) * 1000;
}

//  https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
function isDivisible(n, x, y) {
    return (n % x === 0) && (n % y === 0);
}