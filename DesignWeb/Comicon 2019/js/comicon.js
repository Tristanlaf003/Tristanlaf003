var monde = "";
var personnage = "";
$('input[id=starwars]').change(function () {
        $('#starwars23').append('<select class="form-control selecteur1" id="selecteur1">' +
            '<option selected="selected">Yoda</option>' +
            '<option>Obiwan</option>' +
            '<option>Darth Vader</option>' +
            '</select>');
    $('#starwars24').append('<img src="img/yoda.jpg" height="100" width="125"/>');
        personnage = 'Yoda';
        $('#marvel23').empty();
        $('#marvel24').empty();
        $('#dc23').empty();
        $('#dc24').empty();
        monde = 'Starwars';
    $(document).ready(function () {
        $('#selecteur1').change(function () {
            var selecteur =
                $(this).children('option:selected').val();
            if (selecteur === 'Yoda'){
                $('#starwars24').empty();
                $('#starwars24').append('<img src="img/yoda.jpg" height="100" width="125"/>');
                personnage = selecteur;
            }
            else if (selecteur === 'Obiwan'){
                $('#starwars24').empty();
                $('#starwars24').append('<img src="img/obiwan.jpg" height="100" width="125"/>');
                personnage = selecteur;
            }
            else if (selecteur === 'Darth Vader'){
                $('#starwars24').empty();
                $('#starwars24').append('<img src="img/darthvader.jpg" height="100" width="125"/>');
                personnage = selecteur;;
            }
        });
    });
});
$('input[id=marvel]').change(function () {
        $('#marvel23').append('<select class="form-control selecteur2" id="selecteur2">' +
            '<option selected="selected">Spiderman</option>' +
            '<option>Thor</option>' +
            '<option>Hulk</option>' +
            '</select>');
        $('#marvel24').append('<img src="img/spiderman.0.0.jpg" height="100" width="125"/>');
        personnage = 'Spiderman';
        $('#starwars23').empty();
        $('#starwars24').empty();
        $('#dc23').empty();
        $('#dc24').empty();
        monde = 'Marvel';
    $(document).ready(function () {
        $('#selecteur2').change(function () {
            var selecteur2 =
                $(this).children('option:selected').val();
            if (selecteur2 === 'Spiderman'){
                $('#marvel24').empty();
                $('#marvel24').append('<img src="img/spiderman.0.0.jpg" height="100" width="125"/>');
                personnage = selecteur2;
            }
            else if (selecteur2 === 'Thor'){
                $('#marvel24').empty();
                $('#marvel24').append('<img src="img/thor.jpg" height="100" width="125"/>');
                personnage = selecteur2;
            }
            else if (selecteur2 === 'Hulk'){
                $('#marvel24').empty();
                $('#marvel24').append('<img src="img/hulk.jpeg" height="100" width="125"/>');
                personnage = selecteur2;
            }
        });
    });
});
$('input[id=dc]').change(function () {
        $('#dc23').append('<select class="form-control selecteur3" id="selecteur3">' +
            '<option selected="selected">Batman</option>' +
            '<option>Superman</option>' +
            '<option>Flash</option>' +
            '<option>Arrow</option>' +
            '</select>');
        $('#dc24').append('<img src="img/batman.jpg" height="100" width="125"/>');
         personnage = 'Batman';
        $('#marvel23').empty();
        $('#marvel24').empty();
        $('#starwars23').empty();
        $('#starwars24').empty();
        monde = 'DC';
    $(document).ready(function () {
        $('#selecteur3').change(function () {
            var selecteur1 =
                $(this).children('option:selected').val();
            if (selecteur1 === 'Batman'){
                $('#dc24').empty();
                $('#dc24').append('<img src="img/batman.jpg" height="100" width="125"/>');
                personnage = selecteur1;
            }
            else if (selecteur1 === 'Superman'){
                $('#dc24').empty();
                $('#dc24').append('<img src="img/superman.jpg" height="100" width="125"/>');
                personnage = selecteur1;
            }
            else if (selecteur1 === 'Flash'){
                $('#dc24').empty();
                $('#dc24').append('<img src="img/flash.jpg" height="100" width="125"/>');
                personnage = selecteur1;
            }
            else if (selecteur1 === 'Arrow'){
                $('#dc24').empty();
                $('#dc24').append('<img src="img/arrow.jpg" height="100" width="125"/>');
                personnage = selecteur1;
            }

        });
    });
});
$(document).ready(function () {
    $('#textNom').keyup(function () {
        var nom = $('#textNom').val();
        if (nom === 'SLAY' || nom === 'Test'){
            $('#errerUser').css('visibility', 'visible');
            $('#errerUser').css('color', 'red');
            $('#errerUser').html("Nom d'utilisateur non disponible");
        }
        else {
            $('#errerUser').css('visibility', 'visible');
            $('#errerUser').css('color', 'green');
            $('#errerUser').html("Nom d'utilisateur disponible");

        }
    });
});
$(document).ready(function () {
   $('#inputPassword4').keyup(function () {
       var password = $('#inputPassword4').val();
       if (password.length < 6){
           $('#errerPassword').css('visibility', 'visible');
           $('#errerPassword').css('color', 'red');
           $('#errerPassword').html('Faible');
       } else if (password.length >= 9){
           $('#errerPassword').css('visibility', 'visible');
           $('#errerPassword').css('color', 'green');
           $('#errerPassword').html('Fort');
       }
       else if (password.length >= 6 || password.length < 9){
           $('#errerPassword').css('visibility', 'visible');
           $('#errerPassword').css('color', 'yellow');
           $('#errerPassword').html('Moyen');
       }

   });
});
$(document).ready(function () {
    $('#inputPassword5').keyup(function () {
        var password3 = $('#inputPassword4').val();
        var password2 = $('#inputPassword5').val();
        if (password3 === password2) {
            $('#errerPassword2').html('Mot de passe identique');
            $('#errerPassword2').css('color', 'green');
            tab.push($('#inputPassword5').val());
        } else {
            $('#errerPassword2').html('Mot de passe ne sont pas identique');
            $('#errerPassword2').css('color', 'red');
        }
    });
});
$(document).ready(function () {
    $('#inputEmail').keyup(function () {
        var address = $('#inputEmail').val();
        if (address.includes('@') && address.includes('.')) {
            $('#errerEmail').css('visibility', 'visible');
            $('#errerEmail').css('color', 'green');
            $('#errerEmail').html('Adresse couriel valide');
        }
        else {
            $('#errerEmail').css('color', 'red');
            $('#errerEmail').html('Adresse couriel invalide');
        }
    });
});

$('#button').click(function () {
        alert("Nom d'utilisateur : " + $('#textNom').val() + '\nMot de passe : ' + $('#inputPassword4').val() + '\nEmail : ' + $('#inputEmail').val() + '\nUnivers : ' + monde + '\nPersonnage : ' + personnage);
});