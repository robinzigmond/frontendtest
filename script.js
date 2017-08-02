$(".carousel").carousel({
    interval: 4000
});

$(window).on("load", function() {
    $(".blog-image").hover(function(event) {
        $(this).children(".fa").show();
        event.preventDefault(); // to stop touching the popup being trigger on touch-screen devices
    }, function(event) {
        $(this).children(".fa").hide();
        event.preventDefault;
    });
});