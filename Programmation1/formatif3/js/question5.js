var i=1, z=5, Nombre=3;
var Nom="Maison";
var affiche ="";
        1
while (i<5){
    Nombre = Nombre * 2;
    if (Nombre > 24)
        console.log("YA");

    i=i+1;
}

affiche += ("I:"+ i + " Nombre:= "+ Nombre + "\n");

for (i=50; i>=40; i-=2){
    if (z<0)
        console.log("toto");

    affiche += ("I:"+ i + " " + Nom + " Z=" + z + "\n");
    z=z-5;
}

affiche += ("I:" + i);
console.log(affiche);
}
