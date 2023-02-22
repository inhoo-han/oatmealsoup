$(function() {

    /* nav .toggle span click() */
    let navSW = false;
    $('.toggle').click(function() {
        navSW = !navSW;
        if(navSW){
            $(this).addClass('active');
            $('nav').find('.navi').find('a').addClass('show');
            $('nav').addClass('show');
            $('#login').addClass('show');
        } else{
            $(this).removeClass('active');
            $('nav').find('.navi').find('a').removeClass('show');
            $('nav').removeClass('show');
            $('#login').removeClass('show');
        }
    });

});