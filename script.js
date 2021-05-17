//generates random value up to max
function random(max)
{
    return Math.floor(Math.random()* max) + 1; 
}

//Paces in the faceAmount the user wishes to role. and will return the outcome of the dice with amount and modifier added
function rollDice(faceAmount, amountRolled, modifier)
{
    //role dice x amount of times
    var diceRolledArray = new Array();
    var diceOutcome = 0;
    for(var i = 0; i < amountRolled; i = i+1)
    {
        diceRolledArray.push(random(faceAmount));
        diceOutcome += diceRolledArray[i];
    }
    console.log(diceRolledArray);
    return diceOutcome + modifier;
}
