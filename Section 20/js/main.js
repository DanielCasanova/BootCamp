class App
{
    constructor()
    {
        this.liItems = document.getElementsByTagName("li");
    }

    init()
    {
        for(let i=0; i<this.liItems.length; i++)
        {
            this.liItems[i].addEventListener("click",this.strikeText);
        }
    }

    strikeText()
    {
        this.classList.contains("todoStrike") ? this.classList.remove("todoStrike") : this.classList.add("todoStrike");
    }
}

let app = new App(); 

app.init();
