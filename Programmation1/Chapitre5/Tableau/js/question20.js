var mise = 1;
var montant = 0;
var montanttotal =0;
var victoire = 0;
var defaite = 0;
var boucle = 1000000;
var nombre = Number(prompt('Entrez un 0 ou 1'));
var montantMax = [];
for (var i = 0; i < boucle; i++){
    var random  = Math.floor(Math.random()* 2);

    if (random === nombre){
        victoire++;
        montant += mise;
        mise = 1;
        montanttotal += mise;
    }
    else if (random != nombre){
        defaite++;
        mise *= 2;
        montant -= mise;
        montanttotal+= mise;
        montantMax.push(mise);
    }
}
document.write('Victoire : ' + victoire + '<br>' + 'Défaite : ' + defaite + '<br>' + 'Montant : ' + montant + '<br>' + 'Argent dépensé : ' + montanttotal);
document.write('<br>' + 'Montant maximal de la mise : ' + Math.max(...montantMax));