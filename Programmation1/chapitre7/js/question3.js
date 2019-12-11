class Guerrier {
    constructor(pointVie,force,agilite,change,precision){
        this.pointVie = pointVie;
        this.force = force;
        this.agilite = agilite;
        this.chance = chance;
        this.precision = precision;
    }
    Attaque(){
        let degats = ((this.force * this.precision + this.agilite) * this.chance);
        return degats;
        this.chance = (Math.random()*1)
    }
}

let guerrier1 = new Guerrier(
    this.pointVie = 100,
    this.force = Math.round((Math.random()*9)+1),
    this.precision = Math.round((Math.random()*9)+1),
    this.agilite = Math.round((Math.random()*9)+1),
    this.chance = (Math.random()*1),
);
let guerrier2 = new Guerrier(
    this.pointVie = 100,
    this.force = Math.round((Math.random()*9)+1),
    this.precision = Math.round((Math.random()*9)+1),
    this.agilite = Math.round((Math.random()*9)+1),
    this.chance = (Math.random()*1),
);
let g = 0;
let boucle = 0;
let guerrier11 = 0;
let guerrier22 = 0;

for (let c = 0; boucle < guerrier1.pointVie || boucle < guerrier2.pointVie ; c++){
    if (g === 0){
        guerrier2.pointVie -= guerrier1.Attaque();
        guerrier1.chance = (Math.random()*1);
        document.write('Attaque du guerrier 1 :' + Math.round(guerrier2.pointVie) + '<br>');
        g = 1;
        guerrier11 ++;
        if (0 >= guerrier2.pointVie){
            boucle = 200;
            alert('Victoire du guerrier 2' + '\nIl a attaqué ' + guerrier11 + ' fois' + '\nPoint de vie : ' + Math.round(guerrier1.pointVie));;
        }
    }
    else if (g === 1){
        guerrier1.pointVie -= guerrier2.Attaque();
        guerrier2.chance = (Math.random()*1);
        document.write('Attaque du guerrier 2 :' + Math.round(guerrier1.pointVie) + '<br>');
        g = 0;
        guerrier22++;
        if (0 >= guerrier1.pointVie){
            boucle = 200;
            alert('Victoire du guerrier 1' + '\nIl a attaqué ' + guerrier22 + ' fois' + '\nPoint de vie : ' + Math.round(guerrier2.pointVie));
        }
    }
}