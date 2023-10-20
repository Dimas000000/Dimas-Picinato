$(document).ready(()=>{
    $('main').hide();
    $('#portfolio').hide();
    
    $('#portfolio').click(()=>{
        $('main').fadeOut(700, ()=>{
            $('header').fadeIn(700);
            $('#projects').fadeIn();
        });
        $('#portfolio').fadeOut(700);
    });

    $('#projects').click(()=>{
        $('header').fadeOut(700, ()=>{
            $('main').fadeIn(700);
            $('#portfolio').fadeIn();
        });
        $('#projects').fadeOut(700);
    });
});