var nb = 1;
var ligne = 5;
var nbcolonne = 4;
var espace = 4;
for (var i = 0; i <  ligne; i++){
    for (var k = 0; k < nbcolonne; k++){
        if (k === 0){
            for (var z = 0; z < espace; z++){
                document.write(".");
            }
            espace += 4;
        }
        document.write(nb + "..");
        nb++;

    }
    nb -= 1;
    document.write("<br>");
    nb *= 2;
}
