var tab = ['1', '2', '3', '4', '5', '6', '7', '8','9', '10'];

for (var i = tab.length-1; i >=1; i--){
    var random = Math.floor(Math.random()*(i + 1));

    var tampon = tab[i];
    tab[i] = tab[random];
    tab[random]=tampon;
}
document.write(tab);