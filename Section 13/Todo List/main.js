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
        console.log(todo);
    }
    else
    {
        console.log("wrong input");
    }

    ans = prompt("What do you want to do?");
}