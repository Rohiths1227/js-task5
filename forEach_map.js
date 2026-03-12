
let games = ["cricket","vollyball","hockey","kabadi"];

// Print all games using forEach()
// forEach()

console.log("List of Games:");

games.forEach(function(game){
    console.log(game);
});

// Create a new array using map()
// map()

let gameList = games.map(function(game){
    return "Game : " + game;
});

console.log("New Game Array:");
console.log(gameList);