for (var c = 0; c < 10; c++){
    var tab = [];
    var tab2 = [];
    var tab3 = ['0','1', '2','3','4', '5','6','7', '8','9','10', '11',];
    var resultat = 0;
    for (var i = 0; i < 12; i++){
        tab.push(Math.floor(Math.random()*2));
    }
    for (var y = 11; y >= 0; y--){
        document.write(tab[y] + " ");
    }
    document.write('<br>');
    var addition2 = 0;
    for (var t = 11; t >= 0; t--){
        if (tab[t] === 0){
            document.write(' 0 ');
            addition2 ++;
        }
        else {
            document.write('2 exp ' + tab3[t]);
            addition2++;
        }
        if (addition2 < 12){
            document.write(' + ');
        }

    }
    document.write('<br>');

    var addition = 0;
    for (var z = 11; z >= 0; z--){
        if (tab[z] === 0){
            document.write('0');
            addition++;
        }
        else {
            document.write(Math.pow(2, z));
            tab2.push(Math.pow(2, z));
            addition++;
        }
        if (addition < 12){
            document.write(' + ');
        }
        else {

            for (var m = 0; m < tab2.length; m++){
                resultat+= tab2[m];
            }
            document.write(' = ' + resultat);
        }

    }
    document.write('<br>');
    document.write('<br>');
}