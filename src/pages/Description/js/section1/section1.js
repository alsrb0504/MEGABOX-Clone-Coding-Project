$(document).on('click', '.btn-more.toggle .btn', function(){
    $(this).closest('.btn-more').toggleClass('on');

    if( $(this).closest('.btn-more').hasClass('on') ) {
        $(this).find('span').text('닫기');
    }
    else {
        $(this).find('span').text('더보기');
    }

    if( $('.movie-summary').length > 0 ) {
        $(this).closest('.movie-summary').toggleClass('on');
    }
});