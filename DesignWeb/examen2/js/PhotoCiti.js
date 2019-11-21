var imageSRC;
var imageID;
var nouvelleImageSCR;
var nouvelleImageID;
var imageSRC1;
$('#button').click(function () {
        var longueur = $('#barre').val();
        if (longueur.length < 3){
            $('#error').html('mot top court');
            $('#error').css('visibility', 'visible');
        }
        else if (longueur.length > 12){
            $('#error').html('mot trop long');
            $('#error').css('visibility', 'visible');
        }
        else{
            $('#error').css('visibility', 'hidden');
            $('#image').empty();
            var nom = $('#barre').val();
            var colonne = 0;
            if (nom.length <= 3){
                colonne = 4;
            }
            else if (nom.length <= 4){
                colonne = 3;
            }
            else if (nom.length <= 5 || nom.length <=6){
                colonne = 2;
            }
            else if (nom.length >= 7 || nom.length <=12){
                colonne = 1;
            }

            for (var i = 0; i < nom.length; i++){
                if (nom[i] === '*'){
                    $('#image').append('<div class="col-'+ colonne +'">' +
                        '<img src="img/Letters/CS/CS1.jpg" class="img-fluid lettre" id="'+ i +'"/>' +
                        '</div>')

                }
                else{
                    $('#image').append('<div class="col-'+ colonne +'">' +
                        '<img src="img/Letters/' + nom.toUpperCase()[i] + '/'+ nom.toUpperCase()[i] + '1.jpg" class="img-fluid lettre" id="' + i +'"/>' +
                        '</div>')
                }

            }
            $(document).ready(function () {
                $(".lettre").on("click", function() {
                    $('#imagemodal').modal('show');
                        imageSRC = $(this).attr('src');
                });
            });
            $(document).ready(function () {
                $(".lettre").on("click", function() {
                    $('#imagemodal').modal('show');
                    imageSRC = $(this).attr('src');
                    imageID = $(this).attr('id');
                    imageSRC = imageSRC.replace('1.jpg','');
                    imageSRC = imageSRC.replace('2.jpg', '');
                    imageSRC = imageSRC.replace('3.jpg', '');
                    imageSRC = imageSRC.replace('4.jpg', '');
                    imageSRC = imageSRC.replace('5.jpg', '');
                    $('.slide-box').empty();
                    $('.slide-box1').empty();
                    for (var vari = 1; vari < 5; vari++){
                            $('.slide-box').append("<img src="+ "'"+ imageSRC + vari +".jpg'"+'class="change">');
                    }
                    $('.slide-box1').append("<img src="+ "'"+ imageSRC +"5.jpg'"+'class="change">');
                });
            });
        }
});



$(".lettre").on("click", function() {
        imageSRC = $(this).attr('src');
        imageID = $(this).attr('id');
        imageSRC = imageSRC.replace('1.jpg', '');
        imageSRC = imageSRC.replace('2.jpg', '');
        imageSRC = imageSRC.replace('3.jpg', '');
        imageSRC = imageSRC.replace('4.jpg', '');
        imageSRC = imageSRC.replace('5.jpg', '');

        $('#imagemodal').modal('show');
        $('.slide-box').empty();
        $('.slide-box1').empty();
        for (var sal = 1; sal < 5; sal++){
                $('.slide-box').append("<img src="+ "'"+ imageSRC + sal +".jpg'"+'class="change">');
        }
        $('.slide-box1').append("<img src="+ "'"+ imageSRC +"5.jpg'"+'class="change">');
});



$(document).on('click', '.change' ,function () {
    nouvelleImageSCR = $(this).attr('src');
    nouvelleImageID = $(this).attr('id');
});

$('#button3').click(function () {
    $('#' + imageID).attr('src', nouvelleImageSCR);
});

$(document).on('click', '.back', function () {
   var background = $(this).attr('src');
   $('.cardbg2').css('background-image', "url("+ background +")");
});

$('#barre').keypress(function(event) {
    if (event.keyCode == '13') {
        event.preventDefault();
    }
});

$('#barre').keydown(function(event){
    var keyCode = (event.keyCode ? event.keyCode : event.which);
    if (keyCode == 13) {
        $('#button').trigger('click');
    }
});