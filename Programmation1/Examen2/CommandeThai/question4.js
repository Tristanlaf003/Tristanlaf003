var entree = prompt("Voulez-vous des rouleaux impériaux en entrée: 3.50$ (o/n)");
var platPrincipal = prompt("Plats principaux" + "\n1. Makis : 10$" + "\n2.Nigiris : 11$" + "\n3. PadThai : 14$");
var dessert = prompt("Voulez-vous un dessert: 4.50$ (o/O/n/N)");
var prix = 0;

if (entree === "o"){
    prix += 3.50;
}
if (platPrincipal === "1"){
    prix += 10;
}
else if (platPrincipal === "2"){
    prix += 11;
}
else if (platPrincipal === "3"){
    prix += 14;
}
else {
    alert("Ce plat n’est pas disponible pour le moment, mais nous prenons votre demande en note.")
}
if (dessert.toUpperCase() === "O"){
    prix += 4.50;
}
document.write(prix);