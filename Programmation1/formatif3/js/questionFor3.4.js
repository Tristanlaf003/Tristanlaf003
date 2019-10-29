var moyenne;
var boucle = 1;

for (var i = 1; i <= boucle; i++){
    var nom  = prompt("Nom du joueur");
    var nbPresence = Number(prompt("Le nombre de présence"));
    var nbCoupSure = Number(prompt("Le nombre de coup sûre"));
    moyenne = nbCoupSure / nbPresence * 1000;
    alert(nom + "\n" + moyenne);
    if (moyenne === 0){
        boucle = 0;
    }
    else {
        boucle++;
    }
}
