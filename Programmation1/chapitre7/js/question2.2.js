class Examen {
    constructor(questions){
        this.questions = questions;
    }
    GetNotes(){
        let somme = 0;
        for (let i = 0; i < 5; i++){
            somme += this.questions;
        }
        return somme;
    }
}

class Etudiant {
    constructor(nom, prenom, examen){
        this.nom = nom;
        this.prenom = prenom;
        this.examen = examen;
    }
}

let tabEtudiant = [];
for (let a = 0; a < 10; a++){
    let tabQuestion = [];
    for (let k = 0; k < 5; k++){
        tabQuestion.push(Math.round(Math.random()*20));
    }
    let examen = new Examen(tabQuestion);
    let nom = prompt('Entrez votre nom');
    let prenom = prompt('Entrez votre prénom');
    let etudiant = new Etudiant(nom,prenom,examen);
}

for (let x = 0; x < 10; x++){
    let n = tabEtudiant[x].examen.GetNotes();
    if (n >= 60){
        document.write(tabEtudiant[x].nom + tabEtudiant[x].prenom + n);
    }
}