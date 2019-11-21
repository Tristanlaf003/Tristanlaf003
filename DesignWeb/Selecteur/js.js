$('#button').click(function () {
    $('#button').append('<form>' +
        '    <label>Select Country:</label>' +
        '    <select class="country">' +
        '        <option>United States</option>' +
        '        <option>India</option>' +
        '        <option>United Kingdom</option>' +
        '    </select>' +
        '</form>');
});



$(document).ready(function(){
    $("select.country").change(function(){
        var selectedCountry = $(this).children("option:selected").val();
        alert("You have selected the country - " + selectedCountry);
    });
});
