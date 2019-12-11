let tabChance = [];
let nombreUsager = Number(prompt('Entrez un chiffre ou un nombre entre 1 à 200'));
let nbTrouveTableau = 0;
for (let i = 0; i < 100; i++){
    tabChance.push(Math.round(Math.random() *199 + 1));
}

for (let a = 0; a < 100; a++){
   if (tabChance[a] === nombreUsager){
       nbTrouveTableau = 1;
   }
}

if (nbTrouveTableau === 1){
    alert('Votre nombre se trouve dans le tableau');
}
else{
    alert('Votre nombre ne se trouve pas dans le tableau');
}

