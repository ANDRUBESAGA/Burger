
$(document).ready(function () {
    $('.menu-acco__trigger').click(function () {
        $(this).toggleClass('active').next().toggleClass('active');
        $('.menu-acco__trigger').not(this).removeClass('active').next().removeClass('active');
    });
});