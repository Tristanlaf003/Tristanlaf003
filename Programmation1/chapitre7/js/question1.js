class Cylindre{

    constructor(hauteur, rayon){
        this.hauteur = hauteur;
        this.rayon = rayon;
    }
    GetVolume(){
        return Math.PI * Math.pow(this.rayon,2)*this.hauteur;
    }
}


let tab = [];
let cylindre1 = new Cylindre(2,12);
let cylindre2 = new Cylindre(10, 15);
let cylindre3 = new Cylindre(9, 5);
let cylindre4 = new Cylindre(2, 6);
let cylindre5 = new Cylindre(6, 7);

tab.push(cylindre1);
tab.push(cylindre2);
tab.push(cylindre3);
tab.push(cylindre4);
tab.push(cylindre5);




class Boite {

    constructor(tabcylindre){
        this.tabcylindre = tabcylindre;
    }

    GetVolumeBoite(){
        let somme = 0;
        for (let i = 0; i < this.tabcylindre.length; i++) {
            somme += this.tabcylindre[i].GetVolume();

        }
        return somme;
    }
}

let boite = new Boite(tab);

document.write(boite.GetVolumeBoite());