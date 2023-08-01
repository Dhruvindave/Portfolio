// HOme page section

$("body").prepend('<div id="loaderDiv"><img src="assets/image/loader.gif" style="display: block;" id="loader" alt=""></div>')

$(document).ready(function () {
    $("#loaderDiv").hide();
    setTimeout(() => {
        typeWriter();
    }, 1000);
});

$(".dropdown-of-theme").mouseenter(function () {
    $("#theme-menu").css("margin", "8px 0px 0px -84px");
    $("#theme-menu").css("cursor", "pointer");
    $(".dropdown-of-theme").html('<i class="fa-solid fa-moon"></i><i class="fa-solid fa-angle-up"></i>')
    $("#theme-menu").show();
});

$(".nav-links").mouseleave(function () {
    $("#theme-menu").hide();
    $(".dropdown-of-theme").html('<i class="fa-solid fa-moon"></i><i class="fa-solid fa-angle-down"></i>')
})

$(".nav-li-a").click(function () {
    $(this).parent().siblings().children().removeClass("active")
    $(this).addClass("active");

    $("#about").fadeIn();
})


$(".get-resume-btn").hover(
    function () {
        $(this).animate({ width: '125px' }, "slow");
        setTimeout(() => {
            $(this).html('Resume <img src="../assets/image/download-git.gif" alt="" style="height:11px;">')
        }, 1000);
    },
    function () {
        $(this).html('<i class="fa-solid fa-file"></i>');
        $(this).animate({ width: '45px' }, "slow");
    }
);

$(".hireme-btn").hover(
    function () {
        $(this).animate({ width: '125px' }, "slow");
        setTimeout(() => {
            $(this).text();
            $(this).text('Hire Me');
        }, 1000)
    },
    function () {
        $(this).html('<i class="fa-solid fa-phone"></i>');
        $(this).animate({ width: '45px' }, "slow");
    }

)

var i = 0;
var txt = 'Software Developer | Web Developer';
var speed = 100;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typedeffect").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}


// about section

$("#about").mouseenter(function () {
    $("#about").fadeIn();
});


$("#skill-show-btn").click(function () {

    $(".hidden-content-about-div").css({"display":"flex"});
    $(".hidden-content-about-div").show();
    $(this).hide();
})

$("#skill-show-btn").hover(function () {
    console.log('::::::: $("#progress-div-2").prop(display)::::::::>> ', );
    $(this).animate({ 'width': '150px' }, 'fast')
        setTimeout(() => {
            $(this).html('View More <i class="fa-solid fa-angle-down"></i>');
        }, 0500);
   
});
