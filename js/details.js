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


    $("#render").load("./components/Overview.html");
    $('.tabs').click(function (e) {
        var tabid = (e.target.id)
 
        if (tabid == 'Overview') {
            $("#render").load("./components/Overview.html");
            $('.tabs .active').removeClass('active');
            $("#Overview").addClass('active');
        }

        else if (tabid == 'Discussion') {
            $("#render").load("./components/Discussion.html");
            $('.tabs .active').removeClass('active');
            $('#Discussion').addClass('active');
        }
        else if (tabid == 'Submission') {
            $("#render").load("./components/submission.html");
            $('.tabs .active').removeClass('active');
            $('#Submission').addClass('active');
        }
        else if (tabid == 'Members') {
            $("#render").html("<h2 class='empty'>Empty</h2>");
            $('.tabs .active').removeClass('active');
            $('#Members').addClass('active');
        }

    });
});