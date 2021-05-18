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


function roll() {
    //get dice face value
    const rbs = document.querySelectorAll('input[name="options"]');
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
            
    var faceNumber = selectedValue;

    console.log(faceNumber);
    //get number of dice
    var numberOfDice = document.getElementById("diceNumberInput").value;

    //get number of modifier
    var modifierValue =  document.getElementById("modifierInput").value;


    //rollDice
    rollDice(faceNumber, numberOfDice, modifierValue);
    
}

function modifier(upDown) {
    var x = document.getElementById("modifierInput");
    var currentVal = x.value;
    var newValue;

    if(upDown)
    {
        //increment
       
         newValue = 1+ Number(currentVal)
      
    }
    else
    {
        //decrement
        
        newValue = Number(currentVal) - 1;
       

    }
    document.getElementById("modifierInput").value = newValue;
    
}

function diceNumberSet(upDown) {
    var x = document.getElementById("diceNumberInput");
    var currentVal = x.value;
    var newValue;

    if(upDown)
    {
        //increment
       
         newValue = 1+ Number(currentVal)

    }
    else
    {
        //decrement
        newValue = Number(currentVal) - 1;
    }
    document.getElementById("diceNumberInput").value = newValue;
    
}