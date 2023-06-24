//1. html/text
$('#content1-1').hover(function(){
    $('#content1-1').text('text메소드로 내용 바꾸기').css('color','red');
},function(){
    $('#content1-1').text('바꼈니?').css('color','gray');
});

$('#content1-2').hover(function(){
    $('#content1-2').html('html메소드로 내용 바꾸기').css('color','blue');
},function(){
    $('#content1-2').html('바꼈니?');
});

$('#content1-3').text('<strong>strong tag</strong>'); // 글자만 조작
$('#content1-4').html('<strong>strong tag</strong>'); // tag를 조작


//2. attr
//$('#changThis').attr('src','./img/img2.gif');
//$('#changThis').attr({src:'./img/img2.gif', alt:'확인'});

$('.content2 img').hover(function(){
    $('#changThis').attr({src:'./img/img2.gif', alt:'바뀐 이미지'});
}, function(){
    $('#changThis').attr({src:'./img/img1.gif', alt:'원본 이미지'});
});


//3. addClass & removeClass
$('.content3 > div').hover(function(){
    $(this).addClass('add');
}, function(){
    $(this).removeClass('add');
});


//4. toggleClass
$('.click').click(function(){
    $('#imgs img').toggleClass();
});


//5. val
$('#input1').val('입력하시오');
$('#textarea1').val('바뀌나');
$('#select1').val('city2');
$('#select2').val(['town2','town3']);


//6. 수치조작 메서드
//width
const wid1 = $('#p1').width();
const wid2 = $('#p1').innerWidth();
const wid3 = $('#p1').outerWidth();
$('.width span').text(wid1);
$('.width1 span').text(wid2);
$('.width2 span').text(wid3);

$('#p2').outerWidth(250).outerHeight(350);


// 7. 위치조작 메서드
let $text_1 = $('.text_1 span');
let $text_2 = $('.text_2 span');
let cntbox = $('.cnt');

let off_t = cntbox.position().top;
let pos_t = cntbox.position().left;

$text_1.text(off_t);
$text_2.text(pos_t);


// 8. scrollTop
let topNum = $('.top').offset().top;
console.log(topNum);

$(window).scrollTop(topNum);