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

        this.inputToDo.addEventListener("keyup", this.newEntry.bind(this));
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
        if (event.keyCode === 13)
        {
            let li = document.createElement("li");
            let span = document.createElement("span");
            let icon = document.createElement("i");
            let entryText = this.inputToDo.value;
            this.inputToDo.value = "";

            span.addEventListener("click", this.deleteEntry);
            li.addEventListener("click", this.strikeText);

            icon.classList.add("fa");
            icon.classList.add("fa-trash");

            span.appendChild(icon);
            li.appendChild(span);
            li.appendChild(document.createTextNode(entryText));

            this.ulList.appendChild(li);
        }
    }
}

let app = new App();

app.init();