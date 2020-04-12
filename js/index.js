$(document).ready(function () {
    $('#profile').click(function (e) {

        if ($('#profile #drop').css("display") === 'block') {
            return $('#profile #drop').css("display", 'none');
        }
        return $('#profile #drop').css("display", 'block');
    });


    $("#items").load("./components/items.html");
    $('.tabs').click(function (e) {
        var tabid = (e.target.id)
        console.log(tabid)
        if (tabid == 'Challenges') {
            $("#items").load("./components/items.html");
            $('.tabs .active').removeClass('active');
            $("#Challenges").addClass('active');
        }

        else if (tabid == 'Labs') {
            $("#items").html("<h2 class='empty'>Empty</h2>");
            $('.tabs .active').removeClass('active');
            $('#Labs').addClass('active');
        }
        else if (tabid == 'Project') {
            $("#items").html("<h2 class='empty'>Empty</h2>");
            $('.tabs .active').removeClass('active');
            $('#Project').addClass('active');
        }

    });















});