var tab = [];

for (i = 0; i < 12; i++){
    var nombre = Number(prompt('Enter un nombre'));
    tab.push(nombre);
}
for (j = 0; j < 12; j++){
    for (z = 0; z < 12; z++){
        var resultat = tab[z] + tab[j];
        if (resultat === 15){
        document.write(tab[z] + " " + tab[j] + '<br>');
        }
    }
}