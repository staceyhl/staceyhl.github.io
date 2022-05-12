var numbers = ["2,", "3,", "4,", "5,", "6,", "7,", "8,", "9,", "10,", "jack,", "queen,", "king,", "ace,"];

var numRules = ["the next player skips a turn", "reverse directions", "do jazz hands", "laugh", "say your middle name", "high five the next player", "make a fart noise", "do the cup song"];

var suits = ["a heart,", "a spade,", "a diamond,", "clubs,"];

var suitRules = ["announce card and suit (eg 3 of clubs)", "honk", "make a spock hand", "tell the next player you love them"];

function getItem1(){
    if(numbers.length == 0 || numRules.length == 0){
        return;
    }
    var ind = Math.floor(Math.random() * numbers.length);
    var indRule = Math.floor(Math.random() * numRules.length);
    newText = document.createElement("div");
    newText.classList.add("rule");
    newText.innerHTML = "whenever you play " + numbers[ind] + " " + numRules[indRule] + "\n";
    numbers.splice(ind, 1);
    numRules.splice(indRule, 1);
    document.getElementById("block").appendChild(newText);
}

function getItem2(){
    if(suits.length == 0 || suitRules.length == 0){
        return;
    }
    var ind = Math.floor(Math.random() * suits.length);
    var indRule = Math.floor(Math.random() * suitRules.length);
    newText = document.createElement("div");
    newText.classList.add("rule");
    newText.innerHTML = "whenever you play " + suits[ind] + " " + suitRules[indRule] + "\n";
    suits.splice(ind, 1);
    suitRules.splice(indRule, 1);
    document.getElementById("block").appendChild(newText);
}

function reset(){
    numbers = ["2,", "3,", "4,", "5,", "6,", "7,", "8,", "9,", "10,", "jack,", "queen,", "king,", "ace,"];

    numRules = ["the next player skips a turn", "reverse directions", "do jazz hands", "laugh", "say your middle name", "high five the next player", "make a fart noise", "do the cup song"];

    suits = ["a heart,", "a spade,", "a diamond,", "clubs,"];

    suitRules = ["announce card and suit (eg 3 of clubs)", "honk", "make a spock hand", "tell the next player you love them"];

    document.getElementById("block").innerHTML = "";
}