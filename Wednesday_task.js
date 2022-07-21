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