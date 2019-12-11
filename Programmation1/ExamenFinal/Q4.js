class MonnaieVirtuelle {
    constructor(nomMonnaie,valeurEnUSD,actif){
        this.nomMonnaie = nomMonnaie;
        this.valeurEnUSD = valeurEnUSD;
        this.actif = actif;
        this.actifUSD = this.actif * this.valeurEnUSD;
    }
}
class Portefeuille {
    constructor(nomProprietaire,tableauMonnaies){
        this.nomProprietaire = nomProprietaire;
        this.tableauMonnaies = tableauMonnaies;
    }
    ValeurDuPortefeuille(){
        let total = 0;
            total = nomMonaie1.actifUSD + nomMonaie2.actifUSD + nomMonaie3.actifUSD;
        return total;
    }
}
let nomMonaie1 = new MonnaieVirtuelle('Bitcoin',9730,6);
let nomMonaie2 = new MonnaieVirtuelle('Ethereum', 194,20);
let nomMonaie3 = new MonnaieVirtuelle('Litecoin', 58,10);

let shany = new Portefeuille('Shany Carle', nomMonaie1, nomMonaie2, nomMonaie3);

document.write(shany.ValeurDuPortefeuille());
