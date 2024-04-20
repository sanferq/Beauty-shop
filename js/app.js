// const block = document.getElementById('section-main');

// function changeBgImg(){
//     block.style.backgroundImage = "url('/img/main/PSDNukJan_(12) 1.png')";
    
//     block.style.backgroundRepeat = "no-repeat"; // Отключение повторения фона
//     block.style.backgroundPosition = "right"; // Позиционирование фона по центру
//     block.style.zIndex = "-1"; // Установка z-index для фона
// }

// changeBgImg();


$(document).bind( 'mousewheel', function (e) { 
    var nt = $(document.body).scrollTop()-(e.deltaY*e.deltaFactor*100); 
    e.preventDefault(); 
    e.stopPropagation(); 
    $(document.body).stop().animate( { 
         scrollTop : nt 
     } , 500 , 'easeInOutCubic' );  
} )