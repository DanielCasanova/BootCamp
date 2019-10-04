/* */
let colorToGuess = document.getElementById("colorToGuess");
let newColors = document.getElementById("newColors");
let newColorsHover = document.getElementById("newColorsHover");

/* */
newColors.addEventListener("click", generateAndSetNewColor);
newColorsHover.addEventListener("hover", toggleHoverColor);

/* */
generateAndSetNewColor();

function generateAndSetNewColor()
{
    let colorR = Math.floor((Math.random() * 255) + 1);
    let colorG = Math.floor((Math.random() * 255) + 1);
    let colorB = Math.floor((Math.random() * 255) + 1);

    colorToGuess.innerHTML = `(${colorR}, ${colorG}, ${colorB})`;
}

function toggleHoverColor()
{
    newColorsHover.classList.toggle("red");
}