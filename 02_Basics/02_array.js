let heros = new Array();


let marvelHeros = ["Thor", "Ironman", "Spiderman"];
let dcHeros = Array("Superman", "Batman", "Flash");
let indianHeros = Array.of("Shaktiman", "Nagraj", "Doga");

console.log(heros);
console.log(marvelHeros);
console.log(dcHeros);
console.log(indianHeros);

// heros = heros.concat(marvelHeros, dcHeros, indianHeros);

// alternet way to concat array
heros = [...marvelHeros, ...dcHeros, ...indianHeros];
console.log(heros); // it will return empty array because concat method doesn't change the existing array but instead returns a new array
