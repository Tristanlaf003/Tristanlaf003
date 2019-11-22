var cours = ["Programmation 1", "Design Web", "Fonctionnement ordinateur", "Outils"];

for(var i = 0;i < cours.length;i++){
    document.write(cours[i]);
}

var pokemons = ["Pikachu", "Salamèche", "Bulbizar"];
pokemons.push("Dracaufeu");
//Les indices 3-4-5-6-7 deviennent Undefined

document.write(pokemons[3]); //Undefined