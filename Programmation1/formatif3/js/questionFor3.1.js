var lignes  = 5;
var colonnes = 3;
var nbSpectateur = 0;
var prixBillet = 3;
var reponse;
var q = 23;

for (var i = 0; i < q; i++){
    document.write("#")
}
document.write("<br>");
document.write("# Revenus des assistances #");
document.write("<br>");
for (var z = 0; z < q; z++){
    document.write("#")
}
document.write("<br>");
document.write("<br>");
document.write("Nb spectateurs" + "....." + "Prix Billet" + "....." + "Revenus");
document.write("<br>");
document.write("<br>");

for (var t = 0; t < lignes; t++){
    for (var b = 0; b < colonnes; b++){
        reponse = nbSpectateur * prixBillet;
        document.write(nbSpectateur + "......" + prixBillet + "......" + reponse);
        nbSpectateur += 10;
        document.write("<br>");

    }

}
