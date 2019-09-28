var body = document.querySelector("body");
var button = document.getElementById("mainButton");

button.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor()
{
    if(body.style.background == "pink")
    {
        body.style.background = "white";
    }
    else
    {
        body.style.background = "pink";
    }
}