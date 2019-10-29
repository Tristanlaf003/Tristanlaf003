var lignes = 7;
var colonnes = 6;
var nb = 0;
var espaces = 5;

for (var i = 0; i < lignes; i++){
    for (var j = 0; j < colonnes; j++ ){
        if (j === 0){
            for (var k = 40 ; k < espaces; k--){
                document.write(".");
            }
            espaces +=5;
        }
        document.write(nb + " ");
        nb += 10;
    }
    document.write("<br>");
    nb -= 10;
    nb *= 2;
}
