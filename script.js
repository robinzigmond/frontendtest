$(".carousel").carousel({
    interval: 4000
});

$(window).on("load", function() {
    $(".blog-image").hover(function() {
        $(this).children(".fa").show();
    }, function() {
        $(this).children(".fa").hide();
    });
});