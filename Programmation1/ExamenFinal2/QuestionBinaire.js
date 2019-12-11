let octet = [];
let motPasseInvalides = [];
let motDePasseUsager = '123';

function LireOctet() {
    for (let i = 0; i <8; i++){
        octet[i] = prompt('Entrez true or false');
    }
}

function AfficherOctet() {
    document.write(octet[i]);
}

function TraduireOctet() {
    let position = 7;
    let total = 0;
    for (let a = 0; a < 8; a++){
        if (octet[a] === true){
            total +=Math.pow(2,position);
        }
        position--;
    }
    return total;
}

for (let i = 0; i < 4; i++){
    if (motPasseInvalides.length === 3){
        alert('Mot de passe invalide, le progrramme va fermer' + '\n' +motPasseInvalides[0] + '\n' + motPasseInvalides[1] + '\n' + motPasseInvalides[2]);
        i = 5;
    }
    else{
        let motDePasse = prompt('Entrez le mot de passe');
        if (motDePasse != motDePasseUsager){
            motPasseInvalides.push(motDePasse);
        }
        else{
            i = 5;
            function AfficherMenu() {
                let z = "1: Lire un octet \n2: Afficher un octet \n3: Traduire l'octet en décimal \n4: Quitter";
                return z;
            }
            let ok = prompt(AfficherMenu());
            if (ok === '1'){
                LireOctet();
            }
            else if (ok === '2'){
                AfficherOctet();
            }
            else if (ok === '3'){
                TraduireOctet();
            }
            else if (ok === '4'){

            }
        }
    }
}
