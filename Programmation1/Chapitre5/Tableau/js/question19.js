var str = prompt('Entrez un mot');
var tab = [];
var chars = str.split('');
var reponse = str;
var tab2 = [];
console.log(reponse);
for (var i = 0; i < str.length; i++){
    tab.push(chars[i]);
}

for (var t = tab.length-1; t >=1; t--){
    var random = Math.floor(Math.random()*(t + 1));

    var m = tab[t];
    tab[t] = tab[random];
    tab[random]=m;
}

var boucle = 1;
for (var y = 0; y < boucle; y++){
    var mot = prompt('Pour avoir la réponse écriver 1' + '\nEntrer votre réponse : ' + tab +'\n' + tab2);
    if (mot === str){
        alert('Félicitation, vous avez trouvé le mot : ' + mot);
    }
    else if (mot === '1'){
        alert('Mauvais joueur tabarnak!!' + '\n' + '\n' + '\n' + '\n' + '\n' + '\n' + '\n' + '\n' + '\n' + '\n' + '\n' + '\n' + '\n' + '\n' + '\n' + '\n' + '\n' + '\n' + reponse);
    }
    else {
        tab2.push(mot);
            boucle ++;

    }
}
