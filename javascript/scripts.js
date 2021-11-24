//Carousel Script
$(function() {
    $(".carousel").carousel( { interval: 3500, pause: "false" } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
});
//change piucture when mouse hovers over
$(function() {
    $("#change-img").hover(function(){
        $( "#change-img" ).attr("src","/img/tshirt2.jpg");
    }, function(){
        $( "#change-img" ).attr("src","/img/tshirt1.jpg");
    });
});
$(function() {
    $("#change-img2").hover(function(){
        $( "#change-img2" ).attr("src","/img/tshirt2.jpg");
    }, function(){
        $( "#change-img2" ).attr("src","/img/tshirt1.jpg");
    });
});
$(function() {
    $("#change-img3").hover(function(){
        $( "#change-img3" ).attr("src","/img/Jacket2.jpg");
    }, function(){
        $( "#change-img3" ).attr("src","/img/Jacket1.jpg");
    });
});
$(function() {
    $("#change-img4").hover(function(){
        $( "#change-img4" ).attr("src","/img/Jacket2.jpg");
    }, function(){
        $( "#change-img4" ).attr("src","/img/Jacket1.jpg");
    });
});
$(function() {
    $("#change-img5").hover(function(){
        $( "#change-img5" ).attr("src","/img/Jacket2.jpg");
    }, function(){
        $( "#change-img5" ).attr("src","/img/Jacket1.jpg");
    });
});
//Shop modal funcionality buttons
$(function() {
    $("#itemButton").click(function(){
        $("#itemModal").modal("show");
    });
});
$(function() {
    $("#itemButton2").click(function(){
        $("#itemModal2").modal("show");
    });
});
$(function() {
    $("#itemButton3").click(function(){
        $("#itemModal3").modal("show");
    });
});
$(function() {
    $("#itemButton4").click(function(){
        $("#itemModal4").modal("show");
    });
});
$(function() {
    $("#itemButton5").click(function(){
        $("#itemModal5").modal("show");
    });
});