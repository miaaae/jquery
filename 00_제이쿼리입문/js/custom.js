$(function(){
    $('h1').css('color','red');
    $('h2').css({background:'yellow', color:'blue'});

    $('p').css('margin','0');
    $('#box').css({width:'300px', margin:'10px auto', border:'1px solid #ddd', padding:'12px 15px'});

    $('p').hover(function(){
        $(this).css('color','pink');
    }, function(){
        $(this).css('color','black');
    });
});