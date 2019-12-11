let typePokemonAdverse = prompt('Entrez le type de Pokemon adverse');
let dommage1 = 0;
let dommage2 = 0;
let dommageTotal;
let reponse1 = Math.round(Math.random() * 1);
let reponse2 = Math.round(Math.random() * 1);
let reponse3 = '';
let reponse4 = '';

if (reponse1 === 1){
    dommage1 = 100;
    reponse3 = 'face';
}
else if (reponse1 === 0){
    dommage1 = 0;
    reponse3 = 'pile';
}

if (reponse2 === 1){
    dommage2 = 100;
    reponse4 = 'face';
}
else if (reponse2 === 0){
    dommage2 = 0;
    reponse4 = 'pile';
}
if (typePokemonAdverse.toLowerCase() === 'eau'){
    dommage1 *= 2;
    dommage2 *= 2;
}
dommageTotal = dommage1 + dommage2;
document.write('type = ' + typePokemonAdverse + ' ' + reponse3 + ' ' + reponse4 + ' = ' + dommageTotal + ' de dégâts');