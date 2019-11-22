var boucle  = 1000;
var vrai = 0;
var faux = 0;
var nbvrai = 0;
var vraiMax = 0;
var nbfaux = 0;
var fauxMax = 0;
var positionVrai = 0;
var position1 = 0;
var positionFaux = 0;
var position2 = 0;
for (var i = 0; i < boucle; i++){
    var aleadoir = Math.round(Math.random());
    if ( aleadoir === 1){
        document.write(i + ' : true' + '<br>');
        vrai++;
        nbfaux = 0;
        nbvrai++;
        positionVrai++;
        if (nbvrai > vraiMax){
            vraiMax = nbvrai;
            position1 = i - vraiMax + 1;
        }

    }
    else if (aleadoir === 0){
        document.write(i +' : false' + '<br>');
        faux++;
        nbvrai = 0;
        nbfaux++;
        positionFaux++;
        if (nbfaux > fauxMax){
            fauxMax = nbfaux;
            position2 = i - fauxMax + 1;
        }
    }

}

document.write('Le nombre de vrai :' + vrai + '<br>');
document.write('Le nombre de faux :' + faux + '<br>');
document.write('Nombre de vrai consécutif : ' +vraiMax + '<br>');
document.write('Nombre de faux consécutif : ' +fauxMax + '<br>');
document.write('Début de la séquence vrai : ' + position1 + '<br>');
document.write('Début de la séquence faux : ' + position2);