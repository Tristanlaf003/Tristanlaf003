var boucle = 1;
for (var i = 0; i <= boucle ; i++){
    var position = prompt("Entrez une valeur de 1 à 9");
    if (position === "1"){
        alert("Le joueur est un lanceur");
        boucle++;
    }
    else if (position === "2"){
        alert("Le joueur est un receveur");
        boucle++;
    }
    else if (position === "3"){
        alert("Le joueur est un premier but");
        boucle++;
    }
    else if (position === "4"){
        alert("Le joueur est un deuxième but");
        boucle++;
    }
    else if (position === "5"){
        alert("Le joueur est un troisième but");
        boucle++;
    }
    else if (position === "6"){
        alert("Le joueur est un arrêt-court");
        boucle++;
    }
    else if (position === "7" || position === "8" || position === "9"){
        alert("Le joueur est un voltigeur");
        boucle++;
    }
    else {
        alert("Cette position n’existe pas.")
    }
}
