class Pokemon{
    constructor(nom,type,hp,niveau,espece,hauteur,poid,faiblesse,resistance,retreatCost,flavor,attack1,attack2){
        this.nom = nom;
        this.type = type;
        this.hp = hp;
        this.niveau = niveau;
        this.espece = espece;
        this.hauteur = hauteur;
        this.poid = poid;
        this.faiblesse = faiblesse;
        this.resistance = resistance;
        this.retreatCost = retreatCost;
        this.flavor = flavor;
        this.attack1 = attack1;
        this.attack2 = attack2;

    }
}

$('#nom').keyup(function () {
    let nom = $('#nom').val();
    if (nom.length <= 9){
        $('.h4nom').html(nom);
    }
    else {
        alert('Le mot est trop long');
    }
});

$('#HP').keyup(function () {
    let hp = $('#HP').val();
    if (hp.length <= 3){
        $('.hp').html(hp + ' HP');
    }
    else {
        alert('Nombre de HP trop élevé');
    }
});


$('#type').click(function () {
    let n = $('#type').val();
    $('.bg').css('background-image', "url('img/" + n + ".jpg')");
    if (n === 'Dark'){
        $('.h4nom').css('color','white');
    }
    else{
        $('.h4nom').css('color','black');
    }
});

$('#stage').click(function () {
   let stage = $('#stage').val();
    $('.stage').html('Stage : ' +stage);
});
$('#species').keyup(function () {
    let species = $('#species').val();
    $('.species').html(species);
});
$('#lenght').keyup(function () {
    let species = $('#lenght').val();
    $('.species').html(species);
});
$('#image').click(function () {
   let image = $('#image').val();
    $('.pokemon').html('<img src="img/'+ image +'.jpg" class="img-fluid"/>')
});

$('#attack1nom').keyup(function () {
   let attack1 = $('#attack1nom').val();
   $('.attack1nom').html(attack1);
});

$('#attack1dommage').keyup(function () {
    let attack1dommage = $('#attack1dommage').val();
    $('.attack1degats').html(attack1dommage);
});

$('#attack2nom').keyup(function () {
    let attack2 = $('#attack2nom').val();
    $('.attack2nom').html(attack2);
});

$('#attack2dommage').keyup(function () {
    let attack2dommage = $('#attack2dommage').val();
    $('.attack2degats').html(attack2dommage);
});