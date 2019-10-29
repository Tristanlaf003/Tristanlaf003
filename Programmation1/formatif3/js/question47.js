var lignes = 8;
var colonnes = 10;
var nb = 2;
var espace = 0;

for (var i = 0; i < lignes; i++){
    for (var z = 0; z < colonnes ; z ++){
        if (z === 0){
            for (var k = 0; k < espace; k++){
                document.write(".")
            }
            espace += 5;
        }
        document.write(nb + " ");
        nb += 2;
    }
    document.write("<br>");
    nb +=3;

}