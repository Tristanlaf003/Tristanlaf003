var reponse = ['vrai', 'vrai', 'vrai', 'faux', 'vrai', 'faux', 'faux', 'vrai', 'faux', 'vrai'];
var resltat = 0;

for (var i = 0; i < 10; i++){
    var a = prompt('Entrez la réponse : ' + (i+1));
    if (reponse[i] === a){
        resltat++;
        alert('Félicitations');
    }
    else{
        alert('Maivaise réponse');
    }
}
alert('Votre résultat est de ' + resltat + '/10');