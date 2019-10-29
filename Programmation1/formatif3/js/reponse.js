var lignes = 6;
var colonnes = 6;
var nb = 0;
var espace = 75;

for (var i = 0; i < lignes; i++){
    for (var z = 0; z < colonnes; z++){
        if (z === 0){
            for (var k = 0; k < espace; k++){
                document.write(".");
            }
            espace -= 15;
        }
        document.write(nb + " ");
        nb +=4;
    }
    document.write("<br>");
    nb -= 4;
    nb *= 3;
}