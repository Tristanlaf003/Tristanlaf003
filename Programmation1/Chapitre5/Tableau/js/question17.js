var tab = [];

for (var i = 0; i < 5; i++){
    var valeur = prompt('Entrez une valeur');
    tab.push(valeur);
}
tab.sort(function (a, b) {return b - a});
for (var z = 0; z < 5; z++){
    document.write(tab[z] + ' ');
}