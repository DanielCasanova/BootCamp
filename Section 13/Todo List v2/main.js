var todo = [];
var ans = prompt("What do you want to do?");

while(ans != "quit")
{
    if(ans == "new")
    {
        todo.push( prompt("what is the new todo?") );
    }
    else if(ans == "list")
    {
        todo.forEach(function(element, index)
        {
            console.log(index + ": " + element);
        }
        );

        console.log(todo);
    }
    else if(ans == "delete")
    {
        var delIndex = prompt("What is the index you wish to delete?");

        delete todo[delIndex];
    }
    else
    {
        console.log("wrong input");
    }

    ans = prompt("What do you want to do?");
}