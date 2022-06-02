
$(document).on('mouseenter','.movie-list ol li',function(){
    $(this).find('.movie-score').finish().addClass('on').animate({opacity: 1}, 300);

});
$(document).on('mouseleave','.movie-list ol li',function(){
    $(this).find('.movie-score').finish().addClass('on').animate({opacity: 0}, 300);

});