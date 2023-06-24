//before/after/insertBefore/insertAfter
$('.after p:eq(1)').after('<p>after로 내용 추가</p>').css('background','aqua'); // 본래 eq에 배경
$('<p>insertAfter로 내용 추가</p>').insertAfter('.after p:eq(1)').css('background','yellow'); //추가된 eq에 배경

$('.after p:eq(0)').before('<p>before로 내용 추가</p>').css('background','skyblue');
$('<p>insertBefore로 내용 추가</p>').insertBefore('.after p:eq(0)').css('background','pink');



//append/appendTo/prepend/prependTo
const banana = $('#banana');
const apple = $('#apple');
const pinapple = $('#pinapple');
const cherry = $('#cherry');

banana.append(apple); // banana 하위 속성으로 apple
pinapple.prepend(cherry); // banana 하위 속성으로 apple



//show/hide
//$('#div1').show();
$('.content3').hover(function(){
    $('#div1').show();
    $('#div2').hide();
}, function(){
    $('#div1').hide();
    $('#div2').show();
})


//toggle, toggleClass
$('#btn').on('click', function(){
    $('img').toggle();
});



//fadeIn/fadeOut/fadeTo
$('.container').mouseover(function(){
    $('#fade1').fadeIn(2000);
});

$('#fade2').fadeOut(2000);
$('#fade3').fadeTo(2000, 0.3);



//slideDown/slideUp
$('#slide1').slideDown(200);
$('#slide2').slideUp(200);

$('.content6 .container').hover(function(){
    $('#slide3').slideUp(600);
}, function(){
    $('#slide3').slideDown(200);
});



//animate1
$('.box1').animate({left:800, top:400}, 500); // 대각선으로 이동


$('.box2').animate({left:400},1000).animate({top:400},500);
$('.box3').delay(1500).animate({bottom:450},1000).animate({right:500, bottom:40},1000);




// 그룹등록매서드 방법1 : on 매서드
$('.btn1').on('click focus',
    function(){
        console.log('tab index');
    }
);

// 그룹등록매서드 방법2
$('.btn2').on({'click focus':
    function(){
        console.log('welcome');
    }
});

// 그룹등록매서드 방법3
$('.btn3').on({
    click:function(){
        console.log('click')
    },focus:function(){
        console.log('focus');
    }
});



//trigger
$('.btn4').click(function(){
    $(this).parent().next().css('color','pink');
});
$('.btn5').on({'mouseover focus':function(){
    $(this).parent().next().css('color','blue');
}});

$('.btn5').trigger('mouseover'); // 이벤트 강제실행
$('.btn4').off(); // 이벤트 강제해제




//preventDefault
$('.btn6').click(function(e){
    e.preventDefault(); //기본 기능 차단
    console.log(e);
    $('.txt1').text('나는 백천이다');
});

$('.btn7').click(function(e){
    $('.txt2').text('나는 화산광견이다');
    return false
});

$('.btn8').on('dblclick',function(){
    $('.txt3').css({'background':'red'});
});

$('.btn9').click(function(e){
    $(this).text('바꼈다');
});



//여러개의 클릭이벤트
// $('.click').click(function(){
//     $('.click').text('clicked!!!');
// })


let a = true;
$('.click').click(function(){
    if(a==true){
        $(this).text('clicked!!!'); // 내가 클릭한 요소만 변경
        a=false;
    }else{
        $(this).text('restart!!!'); // 내가 클릭한 요소만 변경
        a=true;
    }
});



//hover
$('.hover').hover(function(){
    $(this).text('mouse in');
},function(){
    $(this).text('mouse out');
});


//mouseenter
$('.mouseenter').mouseenter(function(){
    $(this).text('청명');
});
$('.mouseleave').mouseleave(function(){
    $(this).text('진동룡');
});
$('.mouseover').mouseleave(function(){
    $(this).text('일소');
});
$('.mouseout').mouseleave(function(){
    $(this).text('화산');
});


$('#input1').focus(function(){
    $(this).addClass('active'); //focus
});
$('#input1').blur(function(){
    $(this).removeClass('active'); // focus out
});



//each
$('.animal').each(function(){
    let animal = $(this).text();
    console.log(animal);
});


// 값 취득하기
let box11 = $('.box11');
let boxWidth=box11.width();
let boxHeight=box11.height();
let boxFont=box11.css('font-size');
let boxColor=box11.css('background-color');

$('.span1').text(boxWidth+'px');
$('.span2').text(boxHeight+'px');
$('.span3').text(boxFont);
$('.span4').text(boxColor);
