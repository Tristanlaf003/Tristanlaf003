class Examen {
    constructor(questions){
       this.questions = questions;
    }
    GetNotes(){
        let somme = 0;
        for (let b = 0; b < 5; b++){
            somme += this.questions[b];
        }
        return somme;
    }
}

class Etudiant {
    constructor(nom,prenom,examen){
        this.nom = nom;
        this.prenom = prenom;
        this.examen = examen;
    }
}
let tabEtudiant = [];
for (let i = 0; i < 10; i++){
    let tabQuestion = [];
    for (let z = 0; z < 5; z++){
        tabQuestion.push(Math.round(Math.random()*20) + 1);
    }
    let examen = new Examen(tabQuestion);
    let nom = prompt('Entrez votre nom');
    let prenom = prompt('Entez votre prénom');
    tabEtudiant[i] = new Etudiant(nom,prenom,examen);
}

for (let m = 0; m < 10; m++){
   let n = tabEtudiant[m].examen.GetNotes();
   if (n >= 60){
       document.write('Réussi : ' + tabEtudiant[m].nom + tabEtudiant[m].prenom + ' ' + n + '<br>');
   }
   else if (n < 60){
       document.write('Échec : ' + tabEtudiant[m].nom + tabEtudiant[m].prenom + ' ' + n + '<br>');
   }
}


