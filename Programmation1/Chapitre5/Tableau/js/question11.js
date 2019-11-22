var tabEnfant = [];
var nbEnfant = 0;
for (var i = 0; i < 10; i++){
    var nbEnfant = Number(prompt('Nombre de famille avec ' + (i+1) + ' enfant(s)'));
    tabEnfant.push(nbEnfant);
}
document.write("Nb d'enfant" + " .......... "+  " Nb de familles recensées" + '<br>' + '<br>')
for (var z = 0; z < 10; z++){
document.write('........' + (z+1) + '.......................................' + tabEnfant[z] + '<br>');
}