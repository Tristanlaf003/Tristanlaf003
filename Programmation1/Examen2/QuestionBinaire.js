let global = [true,false,true,true,true,false,false,true];
let motPasseInvalides = [];
let motDePasseUsager = '123';
for (let i = 0; i < 3; i++){
    if (motPasseInvalides.length === 3){
        i = 5;
        alert('Mot de passe invalide, le progrramme va fermer' + '\n' +motPasseInvalides[0] + '\n' + motPasseInvalides[1] + '\n' + motPasseInvalides[2]);
    }
    else{
        let motDePasse = prompt('Entrez le mot de passe');
        if (motDePasse != motDePasseUsager){
            motPasseInvalides.push(motDePasse);
        }
        else{
            alert('Bon mot de passe');
        }
    }
}
