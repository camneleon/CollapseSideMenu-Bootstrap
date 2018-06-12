$(document).ready(function () {

    $('#menuBgOverlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.wrapper-menu').removeClass('open')
        $('.overlay').fadeOut();
        $('.navbar-toggler').addClass('menu-closed')
        $('.navbar-toggler').removeClass('menu-open')
    });

    $('#sidebarCollapse').on('click', function () {
    
        if ($( this ).hasClass("menu-open")) {
            $('#sidebar').removeClass('active');
            $('.wrapper-menu').removeClass('open')
            $('.overlay').fadeOut();
            $('.navbar-toggler').addClass('menu-closed')
            $('.navbar-toggler').removeClass('menu-open')                      
        } else {
            $('#sidebar').addClass('active');
            $('.wrapper-menu').addClass('open')
            $('.overlay').fadeIn();
            $('.navbar-toggler').addClass('menu-open')
            $('.navbar-toggler').removeClass('menu-closed')
        }
        
    });
});