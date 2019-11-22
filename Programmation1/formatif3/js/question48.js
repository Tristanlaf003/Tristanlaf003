var lignes = 200;
var colonnes = 1;
var nb = 1;
var espace = 200;

for (var i = 0; i < lignes; i++){
    for (var k = 0; k < colonnes; k++){
        if (k === 0){
            for (var z = 0; z < espace; z++){
                document.write("-");
            }
            espace--;
        }
        if (nb === 1){
            nb = 0;
        }
        else if (nb === 0){
            nb = 1;
        }
        document.write(nb + ' ');
    }
    document.write('<br>');
    colonnes++;
}