/* */
let colorToGuess = document.getElementById("colorToGuess");
let newColors = document.getElementById("newColors");
let newColorsHover = document.getElementById("newColorsHover");
let easyDiffHover = document.getElementById("easyDiff");
let hardDiffHover = document.getElementById("hardDiff");

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
/* */

generateAndSetNewColor();
hardDiffHover.classList.add("selectedColor");

function generateAndSetNewColor()
{
    let colorR = Math.floor((Math.random() * 255) + 1);
    let colorG = Math.floor((Math.random() * 255) + 1);
    let colorB = Math.floor((Math.random() * 255) + 1);

    colorToGuess.innerHTML = `(${colorR}, ${colorG}, ${colorB})`;
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

    // TODO: Change game to easy
}

function selectHardDiff()
{
    easyDiffHover.classList.remove("selectedColor");
    hardDiffHover.classList.add("selectedColor");

    // TODO: Change game to hard
}
