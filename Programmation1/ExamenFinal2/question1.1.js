let mot = prompt('Entrez un mot');

if (mot.toUpperCase() === 'NOEL' || mot.toUpperCase() === 'NOËL') {
    function Noel() {
        let tab = [
            [],
            [],
            [],
            [],
            []
        ];

        tab[2][13] = '*';
        tab[2][14] = '*';

        for (let z = 0; z < tab.length; z++) {
            for (let a = 0; a < 5; a++) {
                tab[a][a] = '*';
            }
            for (let g = 0; g < 5; g++) {
                tab[g][0] = '*';
                tab[g][4] = '*';
                tab[g][6] = '*';
                tab[g][10] = '*';
                tab[g][12] = '*';
                tab[g][18] = '*';
            }
            let boucle = 3;
            let nombre = 7;
            for (let f = 0; f < boucle; f++) {
                tab[0][nombre] = '*';
                tab[4][nombre] = '*';
                nombre++;
                if (f === 2) {
                    boucle = 7;
                    nombre = 13;

                }
            }
            let nombre2 = 19;
            for (let p = 0; p < 4; p++) {
                tab[4][nombre2] = '*';
                nombre2++;
            }
        }
        for (let y = 0; y < 5; y++) {
            for (let t = 0; t < 23; t++) {
                if (tab[y][t] != '*') {
                    tab[y][t] = '_';
                }
            }
        }
        let reponse = tab[0] + '<br>' + tab[1] + '<br>' +tab[2] + '<br>' + tab[3] + '<br>' + tab[4];
      return reponse;
    }

}
else {
    let etoile = '';
    for (let i = 0; i < mot.length; i++){
        etoile += '*';
    }
    document.write(mot + ' = ' + etoile);
}

document.write(Noel());