/* */
let titleCol = document.getElementById("colorToGuess");
let newColors = document.getElementById("newColors");
let newColorsHover = document.getElementById("newColorsHover");
let easyDiffHover = document.getElementById("easyDiff");
let hardDiffHover = document.getElementById("hardDiff");

let colorButtons = document.getElementsByName("colorButton");

//
let correctButtonPos = -1;
let correctColorR = 0;
let correctColorG = 0;
let correctColorB = 0;

let numButtons = 6;

/* */
newColors.addEventListener("click", generateAndSetNewColor);

newColorsHover.addEventListener("mouseover", hoverON);
newColorsHover.addEventListener("mouseout", hoverOFF);
easyDiffHover.addEventListener("mouseover", hoverON);
easyDiffHover.addEventListener("mouseout", hoverOFF);
hardDiffHover.addEventListener("mouseover", hoverON);
hardDiffHover.addEventListener("mouseout", hoverOFF);

easyDiffHover.addEventListener("click", selectEasyDiff);
hardDiffHover.addEventListener("click", selectHardDiff);

colorButtons.forEach(function(button)
{
    button.addEventListener("click", buttonClicked);
});
/* */

generateAndSetNewColor();
hardDiffHover.classList.add("selectedColor");

function generateAndSetNewColor()
{
    let correctColorR = Math.floor((Math.random() * 255) + 1);
    let correctColorG = Math.floor((Math.random() * 255) + 1);
    let correctColorB = Math.floor((Math.random() * 255) + 1);

    colorToGuess.innerHTML = `(${correctColorR}, ${correctColorG}, ${correctColorB})`;

    correctButtonPos = Math.floor((Math.random() * numButtons));

    for(let i=0; i<numButtons; i++)
    {
        if(i === correctButtonPos)
        {
            let col = "RGB(" + correctColorR + ", " + correctColorG + ", " + correctColorB + ")";
            colorButtons[i].style.backgroundColor = col;
        }
        else
        {
            let colorR = Math.floor((Math.random() * 255) + 1);
            let colorG = Math.floor((Math.random() * 255) + 1);
            let colorB = Math.floor((Math.random() * 255) + 1);

            let col = "RGB(" + colorR + ", " + colorG + ", " + colorB + ")";
            colorButtons[i].style.backgroundColor = col;
        }

        colorButtons[i].style.visibility = "visible";
    }
}

function hoverON()
{
    this.classList.add("hoverColor");
}

function hoverOFF()
{
    this.classList.remove("hoverColor");
}

function selectEasyDiff()
{
    easyDiffHover.classList.add("selectedColor");
    hardDiffHover.classList.remove("selectedColor");

    numButtons = 3;

    for(let i=3; i<6; i++)
    {
        colorButtons[i].style.visibility = "hidden";
    }

    generateAndSetNewColor();
}

function selectHardDiff()
{
    easyDiffHover.classList.remove("selectedColor");
    hardDiffHover.classList.add("selectedColor");

    numButtons = 6;
    generateAndSetNewColor();
}

function buttonClicked()
{
    for(let i=0; i<6; i++)
    {
        if(colorButtons[i] === this)
        {
            if(i===correctButtonPos)
            {
                window.alert("YOU GOT IT!");
                generateAndSetNewColor();
            }
            else
            {
                colorButtons[i].style.visibility = "hidden";
            }
        }
    }
}
