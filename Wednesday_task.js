//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string)  {
    return string.split(" ");  
  };
  
  
  
  //https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
  function DNAtoRNA(dna) {
    return dna.replace(/T/g, "U");
    }

//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
    var min = function(list){
        let lowestNum=list[0];
         for (let i=0; i<list.length; i++)  {
           if (lowestNum > list[i]) {
             lowestNum=list[i];
           ;}
         };
          return lowestNum;
      }
      
      var max = function(list){
        let bigestNum=list[0];
         for (let i=0; i<list.length; i++)  {
           if (bigestNum < list[i]) {
             bigestNum=list[i];
           ;}
         };
          return bigestNum;
      }

      //https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
      function min(arr, toReturn) {
        let lowestNum=arr[0];
         let indexLowestNum=0;
      for (let i=0; i<arr.length; i++)  {
        if (lowestNum > arr[i]) {
          lowestNum=arr[i];
          indexLowestNum=i;
        };
      };
  return toReturn==="value" ? lowestNum : indexLowestNum;
}

//https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
function warnTheSheep(queue) {
    let queueReverse = queue.reverse();
   let wolfIndex = queue.indexOf("wolf");
   return wolfIndex > 0 ? "Oi! Sheep number " + wolfIndex + "! You are about to be eaten by a wolf!" : 
   "Pls go away and stop eating my sheep";
       };

       // https://www.codewars.com/kata/beginner-lost-without-a-map
       let arr=[1, 2, 3, 5];
       2	let resultArr=[];
       3	            function doubleNum (arr)      {
       4	                for (let i = 0; i < arr.length; i++)  {
       5	                resultArr[i] = arr[i] * 2;
       6	                };
       7	                return resultArr;
       8	            };

       // https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
       function firstNonConsecutive (arr) {
        let checkNum = arr[0];
        for (let i = 1; i < arr.length; i++)  {
          if ( Math.abs( arr[i] ) - Math.abs( checkNum ) != 1 )  {
            return arr[i];
          } else  {
            checkNum=arr[i];
            if  (i ===arr.length) {
              return null;
            };
          };
        };
      }