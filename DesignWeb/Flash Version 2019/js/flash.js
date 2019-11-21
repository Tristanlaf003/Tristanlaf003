//On positionne Flash en relative pour accéder aux déplacements X et Y
//Par défaut un élément est statique
$('#flashID').css("position","relative");

$('#boutonGauche').click(function () {
    $('#flashID').css("left","-=100px");
});

$('#boutonDroite').click(function () {
    $('#flashID').css("left","+=100px");
});

$('#boutonChangerImage').click(function () {
    var src = $('#flashID').attr("src");
    if (src === "img/Flash1.png") {
        $('#flashID').attr("src", "img/Flash2.png");
    }
    else{
        $('#flashID').attr("src", "img/Flash1.png");
    }
});

$('#boutonEnleverImage').click(function () {
    $('#flashID').hide();
});
$('#boutonAjouterImage').click(function () {
    $('#flashID').show();
});

$('#boutonAjouterAttribut').click(function () {
    $('#flashID').attr('title', 'photo de Flash');
});

$('#boutonAjouterTitre').click(function () {
    $('h1').append('<h1>Flash<\h1>');
});

$('#boutonDupliquer').click(function () {
    $('h5').prepend('<img id="flashID" class="flashClass" src="img/Flash1.png" width="200px"/>');
});

$('#boutonRalentir').click(function () {
    $('.flashClass').first().remove();
});

var i =0;
$('#boutonTeleport').click(function () {

    if (i === 0){
        $('#flashID').hide();
        $('#flashID2').show();
        i++;
    }
    else if (i === 1){
        $('#flashID2').hide();
        $('#flashID').show();
        i--;
    }

});
var timer;

$('#boutonVitesseSupreme').click(function () {
   timer = setInterval(vitesseSuperieur, 500);
});

$('#boutonFinVitesseSupreme').click(function () {
    clearInterval(timer);
    $('#flashID').show()
});

function vitesseSuperieur() {
    $('#flashID').toggle();
}

$('#boutonNuke').click(function () {
    $('button').hide();
    $('#flashID').hide();
    $('#text').hide();
    $('#bg').css("background-image", "url('img/nuke.jpg')");
});

$(document).ready(function () {
    $('#boutonPerso1').click(function () {
        $('#flashID').animate({left: '1250px'});
        $('#flashID').animate({marginTop: '400px'});
        setTimeout(function () {
            $('#flashID').css('transform', 'scaleX(-1)');
        }, 600);

        $('#flashID').animate({left: '0px'});
        $('#flashID').animate({height: "500px", width:  "500px"},50);
        setTimeout(function () {
            $('#flashID').css('transform', 'scaleX(1)');
        }, 1200);
        setTimeout(function () {
            $('#flashID').css('margin-top', '150px');
        }, 1200);
        setTimeout(function () {
            $('#eclair').css('visibility', 'visible');
        },1600);
    });
});

$('#boutonPerso2').click(function () {
    for (var i = 0; i < 30; i++) {
        $('#flashID').animate({left: '1250px'});
        $('#flashID').animate({marginTop: '400px'});
        $('#flashID').animate({left: '0px'});
        $('#flashID').animate({marginTop: '0px'});
    }
    $('#flashID').animate({height: "700px", width:  "700px"},50);
});

