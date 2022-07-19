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
      //Personalized Message
      function greet (name, owner) {
        if (name===owner) {
          return "Hello boss";
        } else  {
          return "Hello guest";
        };
        }