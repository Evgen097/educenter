/* контент и меню////////////////////////////////////////////////////////////////////*/
function slowScroll (id) {
    var offset = 0;
    $('html, body').animate ({
        scrollTop: $(id).offset ().top - offset
    }, 1000);
    return false;
}


var scroll_to = '';
$("body").on("click", ".element",
    function go_to_slowly (event) {
        event.preventDefault();
        change_width_close (event);
        scroll_to = $(this).attr('class').split(' ')[1];
        $('html, body').delay(500).animate({scrollTop: $('.' + scroll_to + '').filter(".selector_for_all_links").offset().top}, 2000);
    });

$("documetnt").ready(function() {
    moving_picture();
});


/* portfolio slider////////////////////////////////////////////////////////////////////*/
/*self moving slider///////////////////////////////////////////////////*/
var interval_moving_pictures = 10000;
var current_text_image = 0;
var image_size = 400;
var image_left = 0-image_size*2;
var numbers_of_pictures = $('.slider_moving_foto').length;
function moving_picture() {
    image_left += image_size;
    var current_text_image = image_left;
    $(".slider_moving_foto").each(function(){
        $(this).css("left", current_text_image + "px" );
        // как делать анимацию через jqwery $(this).animate({left: "+="+i,}, 2000);
        $(this).show();
        if(current_text_image>(numbers_of_pictures-3)*image_size){current_text_image=0-image_size*2; $(this).hide();}
        current_text_image += image_size;
    })
    if(image_left>(numbers_of_pictures)*image_size){image_left=0-image_size*2;};
}
setInterval(moving_picture, interval_moving_pictures);
/*self moving slider///////////////////////////////////////////////////*/


$(".slider_moving_text").each(function(){
    $('.slider_moving_small_box').append("<div class='moving_box_white'></div>");
});

















