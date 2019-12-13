$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
        trigger: 'hover',
        html: true,
        content: function () {
            return '<img class="img-fluid" src="'+$(this).data('img') + '" />';
        },
        title: 'Toolbox'
    })
});

$(document).ready(function () {
    $(window).on('load',function(){
        $('#myModal22').modal('show');
    });
});

$(document).ready(function () {
    AOS.init({duration : 1200});
});

let click = 1;
let imageID1;
let imageID2;
let imageSrc1;
let imageSrc2;

$('.change').click(function () {
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

