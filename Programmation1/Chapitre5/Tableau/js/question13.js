var tab = [];

for (i = 0; i < 12; i++){
    var nombre = Number(prompt('Enter un nombre'));
    tab.push(nombre);
}

for (z = 0; z < 11; z++){
    var resultat = tab[z] + tab[11];
    if (resultat === 15){
        document.write(tab[11] + " " + tab[z]);
    }
}