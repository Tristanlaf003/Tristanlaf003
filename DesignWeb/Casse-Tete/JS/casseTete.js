var imageID1;
var imageID2;
var imageSrc1;
var imageSrc2;
var click = 1;
var victoire;

$('.img-fluid').click(function () {
    if (click === 1){
        imageID1 = $(this).attr('id');
        imageSrc1 = $(this).attr('src');
        click = 2;

    }
    else if (click === 2){
        imageID2 = $(this).attr('id');
        imageSrc2 = $(this).attr('src');

        $('#' + imageID1).attr('src', imageSrc2);
        $('#' + imageID2).attr('src', imageSrc1);
        click = 1;
    }



});

if ($('#image1') === (src = 'images/1.jpg')){
    $('.img-fluid').attr('src', 'images/victoire.jpg');
}
$('#boutonTricher').click(function () {
    for (var i = 1; i < 10; i++){
    $('#image' + i).attr('src', 'images/' + i + '.jpg');
}
});
var tableauRandom = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg', 'images/7.jpg', 'images/8.jpg', 'images/9.jpg'];

$('#boutonRecommencer').click(function () {
   for (var i = 0; i < 9; i++){
       var random = Math.floor(Math.random() * 8);
       var img;
       img = tableauRandom[i];
       tableauRandom[i] = tableauRandom[random];
       tableauRandom[random] = img;

   }
   for (var a = 0; a < 9 ; a++){
        $('#image' + (a+1)).attr('src', tableauRandom[a]);
    }
});
