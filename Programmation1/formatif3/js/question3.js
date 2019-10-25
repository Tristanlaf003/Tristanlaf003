
var bonneReponse = 0;
var mauvaiseReponse = 0;
var boucle = 1;
for (var i = 1; i <= boucle ; i++) {
    var nombre = Number(prompt("Entrer une valeur comprise entre 1 è 5" + "\n1 : « Album Enfants »" + "\n2 : « Album Rock »"
    + "\n3 : « Album Détente »" + "\n4 : « Album Populaire »" + "\n5 : « Album Jazz »"));
    if (nombre === 1) {
        bonneReponse++;
        alert("Album Enfants");
        boucle++;
    } else if (nombre === 2) {
        bonneReponse++;
        alert("Album Rock");
        boucle++;
    } else if (nombre === 3) {
        bonneReponse++;
        alert("Album Détente");
        boucle++;
    } else if (nombre === 4) {
        bonneReponse++;
        alert("Album Populaire");
        boucle++;
    } else if (nombre === 5) {
        bonneReponse++;
        alert("Album Jazz")
        boucle++;
    } else if (nombre === 0) {
        alert("Nombre de bonnes réponses : " + bonneReponse + "\nNombre de mauvaises réponses : " + mauvaiseReponse);
    } else {
        alert("Cette option n’est pas disponible");
        mauvaiseReponse++;
        boucle++;
    }
}