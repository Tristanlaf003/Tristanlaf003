var tabNombre = [];
for (var i = 0; i < 10; i++){
    var nombre = Number(prompt('Entrez un nombre'));
    tabNombre.push(nombre);
}
document.write('La valeur maximun est de ' + Math.max(...tabNombre) + '<br>' + 'La valeur minimum est de ' + Math.min(...tabNombre));
