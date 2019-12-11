let boucle = 1;
let tabSecret = [];
let tab = [
    ['a', 97], ['b', 98],['c', 99],['d', 100],['e', 101],['f', 102],['g', 103],['h', 104],['i', 105],['j', 106],['k', 107],['l', 108],['m', 109],
    ['n', 110],['o', 111],['p', 112],['q', 113],['r', 114],['s', 115],['t', 116],['u', 117],['v', 118],['w', 119],['x', 120],['y', 121],['z', 121]
];
while (0 < boucle){
    let motSecret = Number(prompt('Entrez le nombre'));
    if (motSecret != -1){
        boucle++;
        tabSecret.push(motSecret);
    }
    else if (motSecret === -1){
        boucle = -1;
    }
    function AfficherCredits() {
        let al = "Algorithme d'encryption / décryption réalisé par Tristan Lafontaine";
        return al;

    }

    alert(AfficherCredits());
}
let somme =2;
for (let i = 0; i < tabSecret.length; i++){
    let reponse = tabSecret[i]/somme;
    tabSecret.splice(i,1,reponse);
    somme*=2
}
for (let z = 0; z < tabSecret.length; z++){
    for (let a = 0; a <26; a++){
        if (tabSecret[z] === tab[a][1]){
            document.write(tab[a][0]);
        }
    }
    function AfficherCredits() {
        let al = "Algorithme d'encryption / décryption réalisé par Tristan Lafontaine";
        return al;

    }

    alert(AfficherCredits());
}
