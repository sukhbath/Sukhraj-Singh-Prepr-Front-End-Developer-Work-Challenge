$(document).ready(function () {

    









    $('#profile').click(function (e) {

        if ($('#profile #drop').css("display") === 'block') {
            return $('#profile #drop').css("display", 'none');
        }
        return $('#profile #drop').css("display", 'block');
    });


    $("#explore .show").click(function (e) {
        var display = $("#explore .show #drop").css("display");
        if (display == "none") {
            return $("#explore .show #drop").css("display", "block")
        }
        $("#explore .show #drop").css("display", "none")

    });


    $("#items").load("./components/items.html");
    $('.tabs').click(function (e) {
        var tabid = (e.target.id)
        console.log(tabid)
        if (tabid == 'my') {
            $("#items").load("./components/items.html");
            $('.tabs .active').removeClass('active');
            $("#my").addClass('active');
        }

        else if (tabid == 'invited') {
            $("#items").html("<h2 class='empty'>When you’re invited to other projects that you’re collaborating on, they will appear here. <a href='#'>Start your first project now.</a></h2>");
            $('.tabs .active').removeClass('active');
            $('#invited').addClass('active');
        }
        else if (tabid == 'favourites') {
            $("#items").html("<h2 class='empty'>No favourite item</h2>");
            $('.tabs .active').removeClass('active');
            $('#favourites').addClass('active');
        }

    });
    
});