let personne3 = {
    prenom:"Tristan",
    nom:"Lafontaine",
    age:"19"
};
document.write(personne3.prenom + ' ' + personne3.nom + ' ' + personne3.age);


let personne4 = {};
personne4.prenom = "Yolo";
personne4.nom = "Lol";
personne4.age = 400;
document.write('<br>' + personne4.prenom + ' ' + personne4.nom + ' ' + personne4.age);

let cartePokemon1 = {
    nom:'Pikachu',
    hp:50,
    nomAttaque1:'Agility',
    nomAttaque2:'Thundershock',
    degatsAttaque1:0,
    degatsAttaque2:20
};

document.write('<br>' + cartePokemon1.nom + ' ' + cartePokemon1.hp + ' ' + cartePokemon1.nomAttaque1 + ' ' + cartePokemon1.nomAttaque2 + ' ' + cartePokemon1.degatsAttaque1 + ' ' + cartePokemon1.degatsAttaque2);

let cartePokemon2 = {};

cartePokemon2.nom = 'Greninja';
cartePokemon2.hp = '230';
cartePokemon2.nomAttaque1 = 'Haze Slash';
cartePokemon2.nomAttaque2 = 'Shadowy_Hunter_GX';
cartePokemon2.degatsAttaque1 = 110;
cartePokemon2.degatsAttaque2 = 130;

document.write('<br>' + cartePokemon2.nom + ' ' + cartePokemon2.hp + ' ' + cartePokemon2.nomAttaque1 + ' ' + cartePokemon2.nomAttaque2 + ' ' + cartePokemon2.degatsAttaque1 + ' ' + cartePokemon2.degatsAttaque2 + '<br>');

let personne = {
    prenom:"Tristan",
    nom:"Lafontaine",
    age:"19"
};

for (let lol in personne){
    document.write(lol + ': '); // Affiche: prenom nom age
    document.write(personne[lol] + '<br>'); //Affiche: Tristan Lafontaine 19
}

function personne5(prenom,nom,age) {
    this.prenom = prenom;
    this.nom = nom;
    this.age = age;
}

let Tristan = new personne5('Tristan', 'Lafontaine', 19);
let hey = new personne5('Lol', 'Yolo', 400);
let kndvo = new personne5('msokd', 'nfej', 600);

for (let z in hey){
    document.write(z + ': ');
    document.write(kndvo[z] + '<br>');
}
document.write('<br>');

function personne6(prenom,nom,age) {
    this.prenom = prenom;
    this.nom = nom;
    this.age = age;
    this.salutation = function () {
        alert('Bonjour ! Je m\'appelle ' + this.prenom + " " + this.nom + '.');
    }
}
let Tristan1 = new personne6('Tristan', 'Lafontaine', 19);
let hey1 = new personne6('Lol', 'Yolo', 400);
let kndvo1 = new personne6('msokd', 'nfej', 600);

for (let b in hey1){
    document.write(b + ': ');
    document.write(Tristan1.salutation + '<br>');
}
