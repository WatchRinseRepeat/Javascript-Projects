function my_Dictionary() {
    var Game = { //create dictionary
        Title:"Super Mario Bros.",
        Conosle:"NES",
        Release:"1985",
        Players:"1-2"
    }
    document.getElementById("Dictionary").innerHTML = Game.Title; //show value
}

function bad_Dictionary() {
    var Game = { //create dictionary
        Title:"Super Mario Bros.",
        Title: "Super Mario Bros. 2", //enter a duplicate key
        Conosle:"NES",
        Release:"1988",
        Players:"1"
    }
    document.getElementById("badDictionary").innerHTML = Game.Title;//show value
}

function del_Dictionary() {
        var Game = { //create dictionary
        Title:"Super Mario Bros.",
        Conosle:"NES",
        Release:"1985",
        Players:"1-2"
    }
    delete Game.Title; //delete a key
    document.getElementById("delDictionary").innerHTML = Game.Title; //show value
}