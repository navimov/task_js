// Make Negative 
function makeNegative(num) {
    if (num>0)  {
      return num-=(num*2);
    } else {
      return num;
    }
    }
    //Messi goals
    function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
        return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
      }
      //Game move
      function move (position, roll) {
        return position+=roll*2; 
      }
      //Personalized Message variant 1
      function greet (name, owner) {
        if (name===owner) {
          return "Hello boss";
        } else  {
          return "Hello guest";
        };
        }
        //Personalized Message variant 2
        function greet (name, owner) {
            switch (name===owner) {
                case true:
                return "Hello boss";
                default:
                return "Hello guest";
            };
            }
        // Keep Hydrated
        function litres(time) {
            return Math.floor(time/2);
          }    
        // Opposites Attract
        function lovefunc(flower1, flower2){
            if ((flower1+flower2) % 2===1)  {
              return true;
            } else  {
              return false;
            };
            }  
