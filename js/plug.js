$(document).ready(function(){
    $('.carousel').carousel({
        interval:4000
    });

    // hide and visabl box color
    $('.gear-check').click(function(){

        $('.color-option').fadeToggle();
    });

    // change color
    $('.color-option ul li')
     .eq(0).css('backgroundColor','#42a5f5').end()
     .eq(1).css('backgroundColor','#ff0000').end()
     .eq(2).css('backgroundColor','#ff4081').end()
     .eq(3).css('backgroundColor','#5c7658');

     $('.color-option ul li').click(function()
     {
         $('link[href*="them"]').attr('href',$(this).attr('data-value'));
     });


// start scroll

 var scrollbutton = $('.scroll-top');

$(window).scroll(function()
{
    $(this).scrollTop() >= 700 ? scrollbutton.show() : scrollbutton.hide();
});

scrollbutton.click(function()
{
    $('html,body').animate({ scrollTop: 0 }, 600);
});
});

// start loading

$(window).load(function()
{
   $('.loading .sk-folding-cube').fadeOut(2000,function(){
       $('.loading ').fadeOut(2100)
   });
});



