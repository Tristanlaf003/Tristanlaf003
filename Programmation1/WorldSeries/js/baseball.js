var moyenne;
var moyenne2 = 0;
var boucle = 1;
for (var i = 0; i < boucle ; i++){
    var nom = prompt('Nom du frappeur');
    var nbPresence = Number(prompt('Entrez le nombre de présences au bâton'));
    var nbCoupsSurs = Number(prompt('Entrez le nombre de coups sûrs'));
    if (nom === '0'){
        boucle = 0;

    }
    else {
        moyenne = (nbCoupsSurs / nbPresence) * 1000;
        document.write('La moyenne de ' + nom + ' est de : ' + moyenne + '<br>');
        moyenne2 += moyenne;

        boucle++;
    }

}
i --;
moyenne2 /= i;
document.write("La moyenne de l'équipe est de : " + moyenne2 + ' pour ' + i + ' joueur(s)');