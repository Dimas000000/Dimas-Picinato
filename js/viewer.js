$(document).ready(()=>{
    $('main').hide();
    $('#hideprojects').hide();
    
    $('#hideprojects').click(()=>{
        $('main').fadeOut(700, ()=>{
            $('header').fadeIn(700);
            $('#showprojects').fadeIn();
        });
        $('#hideprojects').fadeOut(700);
    });

    $('#showprojects').click(()=>{
        $('header').fadeOut(700, ()=>{
            $('main').fadeIn(700);
            $('#hideprojects').fadeIn();
        });
        $('#showprojects').fadeOut(700);
    });
});