var tab = [];

for (var i = 0; i < 10; i++){
    var valeur = prompt('Entrez une valeur');
    tab.push(valeur);
}
tab.sort(function (a, b) {return a - b});

valeur = prompt('Entrez une nouvelle valeur');
tab.push(valeur);
tab.sort(function (a, b) {return a - b});
for (z = 0; z < 11; z++){
    document.write(tab[z] + ' ');
}