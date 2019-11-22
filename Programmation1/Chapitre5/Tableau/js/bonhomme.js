var mot = prompt('Entrez un mot');
var tab = [];
var caractere = mot.split('');
var boucle = 2;
var reponse = " ";

for (var i = 0; i < mot.length; i++){
    tab.push(caractere[i]);
}
var tab2 = [];
for (var z = 0; z < mot.length; z++){
    tab2.push('_');
}
var end = 0;
var tab3 = [];
for (var t = 0; t < boucle; t++){
    reponse =prompt(tab2 + '\n' + tab3);

    for (var c = 0; c < tab.length; c++){
        if (tab.length === end){
        t = 100000;
        c = 10000000;
        alert('Félicitation');
    }
        else if (reponse === tab[c]){
            tab2[c] = reponse;
            end++;

        }


    }
    if (reponse !=tab3){
        tab3.push(reponse);
    }

    boucle ++;
}


