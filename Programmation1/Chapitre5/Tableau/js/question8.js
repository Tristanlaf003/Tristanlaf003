var boucle = 1;
var moyenne = 0;
var tabNom = [];
var resultat = [];
for (var i = 0; i < 5; i++){
    var nom = prompt('Entez le nom');

    var moyenne2;
    if (nom === '0'){
        boucle = 0;
    }
    else {
        var note = Number(prompt('Entrez la note'));
        moyenne += note;
        tabNom.push(nom);
        resultat.push(note);
    }

}
moyenne2 = moyenne / 5;
document.write(moyenne2 + '<br>');

for (var b = 0; b < 5; b++){
    if (resultat[b] >= moyenne2){
        document.write(tabNom[b] + ' ' + resultat[b] + '<br>');
    }
}
