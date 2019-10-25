var nb = 1;
var ligne = 5;
var nbcolonne = 1;
for (var i = 1; i <= 20; i++){
    document.write(nb + " ");
    nbcolonne++;
    if (nbcolonne === ligne){
        document.write("<br>");
        nbcolonne = 1;
        nb = nb * 2;

    }
    nb++;
}
