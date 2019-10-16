class App
{
    constructor()
    {
        this.liItems = document.getElementsByTagName("li");
        this.spanItems = document.getElementsByTagName("span");
        this.inputToDo = document.getElementById("inputToDo");
        this.ulList = document.getElementById("list");
    }

    init()
    {
        for (let i = 0; i < this.liItems.length; i++)
        {
            this.liItems[i].addEventListener("click", this.strikeText);
        }

        for (let i = 0; i < this.spanItems.length; i++)
        {
            this.spanItems[i].addEventListener("click", this.deleteEntry);
        }

        this.inputToDo.addEventListener("keyup", this.newEntry);
    }

    strikeText()
    {
        this.classList.toggle("todoStrike");
    }

    deleteEntry(event)
    {
        event.stopPropagation();
        
        // this == <span> 
        let liElement = this.parentNode;

        liElement.classList.add("hidden");

        let ulElement = liElement.parentNode;
        setTimeout(function() { ulElement.removeChild(liElement); }, 550);
    }

    newEntry(event)
    {
        if(event.keyCode === 13)
        {
            let entryText = this.value;
            this.value = "";

            let li = document.createElement("li");
            li.appendChild(document.createTextNode(entryText));
            //
        }
    }
}

let app = new App();

app.init();