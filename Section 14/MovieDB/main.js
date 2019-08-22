var movies =
    [
        { title: "Avengers", rating: 5, hasWatched: true},
        { title: "Logan", rating: 4.5, hasWatched: false},
        { title: "Gifted", rating: 4, hasWatched: true},
        { title: "Bumblebee", rating: 4, hasWatched: false},
    ];

movies.forEach(
    function(element)
    {
        if(element.hasWatched)
        {
            console.log("You have watched \"" + element.title + "\" - " + element.rating + " stars");
        }
        else
        {
            console.log("You have not watched \"" + element.title + "\" - " + element.rating + " stars");
        }

        /*ALTERNATIVE*/
        var result = "You have ";

        if(element.hasWatched)
        {
            result += "watched ";
        }
        else
        {
            result += "not watched ";
        }

        result += "\"" + element.title + "\" - ";
        result += element.rating + " stars";

        console.log(result);
        /*End alternative*/
    }
);