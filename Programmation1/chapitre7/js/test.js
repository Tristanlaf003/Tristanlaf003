let montant = Number(prompt('Entrez un montant'));
let terme = Number(prompt('Entrez le nombre d’année'));
let taux = Number(prompt('Entrez un taux d’intérêt'));

for(let i = 0; i < terme; i++){
    montant += montant * (taux / 100);
}
document.write(Math.round(montant));

