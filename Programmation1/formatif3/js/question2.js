var nombre1 = 0;
var nombre2 =10;
var reponse;
var multiplaction = 10;

for (var i= 1; multiplaction <= 15; i++){
    document.write("La table de multiplaction de " + nombre2);
    document.write("<br>");
    for (var z= 1; z <=13; z++){
        reponse = nombre1 * nombre2;
        document.write(nombre1 + "*" + nombre2 + "=" + reponse);
        nombre1++;
        document.write("<br>");

    }
    nombre2++;
    multiplaction++;
    document.write("<br>");
    nombre1 = 0;


}