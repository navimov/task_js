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
        let lowestNum=0;
         for (let i=0; i<list.length; i++)  {
           if (lowestNum > list[i]) {
             lowestNum=list[i];
           ;}
         };
          return lowestNum;
      }
      
      var max = function(list){
        let bigestNum=0;
         for (let i=0; i<list.length; i++)  {
           if (bigestNum < list[i]) {
             bigestNum=list[i];
           ;}
         };
          return bigestNum;
      }