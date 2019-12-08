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

