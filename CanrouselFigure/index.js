var index = 0,
    imgWidth = 520,
    timer;
    
// 计时器
function timerFun(){
    timer = setTimeout(function(){
                $(".next").click()
            },2000);
} 
timerFun();

function move(){
    $(".imgBox").stop(false,true);
    clearTimeout(timer);
    if(index > 5){
        $(".imgBox").css("left", "0px");
        index = 1;
    }else if(index < 0){
        $(".imgBox").css("right", "0px");
        index = 4;
    };
    $(".imgBox").animate({
        left: index * -imgWidth
    },function(){
        timerFun()
    });
    active($(".item").eq(index == 5 ? 0 : index))
}

// 向上滑
$(".prev").click(function(){
    index--;
    move(); 
});
// 向下滑
$(".next").click(function(){
    index++;
    move();
});

// order
function active(dom){
    $(".active").removeClass("active");
    dom.addClass("active");  
}
$(".item").click(function(){
    index = $(this).index();
    move(index);
});

// 鼠标移入移出
$(".wrapper").mouseover(function(){
    $(".btn").css("display", "block");
    clearTimeout(timer);
}).mouseleave(function(){
    $(".btn").css("display", "none");
    timerFun();
})
    
