var tab = [];

for (var i = 0; i < 10; i++){
    var nom = prompt('Entrez un nom');
    tab.push(nom);
}

tab.sort();

for (var z = 0; z < 10; z++){
    document.write(tab[z].charAt(0).toUpperCase(1) + tab[z].substring(1).toLowerCase() + '<br>');
}