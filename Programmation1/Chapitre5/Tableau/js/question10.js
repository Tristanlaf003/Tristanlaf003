var taboption = ['informatique', 'administration', 'histoire', 'génie', 'géographie', 'bureautique'];
var option = prompt('Entrez une option');

for (var i = 0; i < 7; i++){
    if (option === taboption[i]){
        alert('oui');
        i = 100;
    }
    else if (i === 6){
        alert('non');
    }
}