var nombreM = 0;
var nombreF = 0;
var boucle = 1;
for (var i = 1; i <=boucle; i++){
    var sexe = prompt("Entrer le sexe M ou F");
    if (sexe.toUpperCase() === "M"){
        alert("Masculin");
        nombreM++;
        boucle++;
    }
    else if (sexe.toUpperCase() === "F"){
        alert("Feminin");
        nombreF++;
        boucle++;
    }
    else{
        alert("Nombre Masculin : " + nombreM + "\nNombre Feminin : " + nombreF);
    }
}