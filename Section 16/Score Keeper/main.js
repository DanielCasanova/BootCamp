var playerOneButton = document.getElementById("playerOne");
var playerTwoButton = document.getElementById("playerTwo");
var resetButton = document.getElementById("reset");
var numGamesInput = document.getElementById("numGamesInput");
var numGamesPara = document.getElementById("numGames");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");

var playerOnePoints = 0;
var playerTwoPoints = 0;
var totPoints = 5;

playerOneButton.addEventListener("click", function()
{ 
    if(canPlay())
    {
        playerOnePoints++; 
    }

    updateView();
});

playerTwoButton.addEventListener("click", function()
{ 
    if(canPlay())
    {
        playerTwoPoints++; 
    }
    
    updateView();
});

numGamesInput.addEventListener("change", function()
{ 
    totPoints = Number(numGamesInput.value); 
    reset();
    updateView(); 
});

resetButton.addEventListener("click", reset);

function reset()
{
    playerOnePoints = 0;
    playerTwoPoints = 0;
    updateView();
}

function updateView()
{
    p1.innerHTML = playerOnePoints;
    p2.innerHTML = playerTwoPoints;

    if(playerOnePoints === totPoints)
        p1.classList.add("winner");
    else
        p1.classList.remove("winner");

    if(playerTwoPoints === totPoints)
        p2.classList.add("winner");
    else
        p2.classList.remove("winner");

    numGamesPara.innerHTML = "Playing to: " + totPoints;
}

function canPlay()
{
    if(playerOnePoints < totPoints &&
        playerTwoPoints < totPoints )
        {
            return true;
        }
        else
        {
            return false;
        }
}
