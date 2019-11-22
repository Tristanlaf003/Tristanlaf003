var mise = Number(prompt('Entrez la mise initial'));
var banque2 = prompt("Montant d'argent");
var condition = prompt("Montant maximum");
var choix2 = Number(prompt('Choissier 0 ou 1'));
var tab3 = [];
for (var z = 0; z < 1000; z++){
    var miseInitial = mise;
    var banque = banque2;
    var conditionDeSortie = condition;
    var choix = choix2;
    var nbDefait = 0;
    var nbDefaitCon = 0;
    var miseActuelle = miseInitial;
    var tab = [];
    var tab2 = [];

    for (var i = 0; banque < conditionDeSortie; i++){
        var random  = Math.floor(Math.random()* 2);

        if (random === choix){
            tab.push('Victoire');
            nbDefait = 0;
            banque++;
            miseActuelle = miseInitial
        }
        else if (random != choix){
            tab.push('Défaite');
            nbDefait++;
            miseActuelle *= 2;
            tab2.push(miseActuelle);
        }
        if (nbDefait > nbDefaitCon){
            nbDefaitCon = nbDefait;
        }
    }
    document.write(tab +'<br>'+ "Nombre de défaite consécutif : " + nbDefaitCon + '<br>' +"Maximum d'argent mis sur la table :" + Math.max(...tab2) + '<br>' + "Montant : " + banque);
    document.write('<br>' + '<br>');
    tab3.push(Math.max(...tab2));
}

document.write('<br>' + 'La mise maximum : ' +Math.max(...tab3));