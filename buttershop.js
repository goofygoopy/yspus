/*popup*/
$(function(){
    $(".closebtn img").click(function(){
        $(".popup").addClass("on");
    })
});

/*banner*/
$(function(){
    var n = 0;  //이미지 개수
    var pos;    //슬라이드 왼쪽 이동 위치

    setInterval(function(){
        n=n+1;
        pos=n*(-480)+"px";

        $(".banner ul").animate({left:pos},500,function(){
            if(n == 4){
                n=0;
                pos=0;
                $(".banner ul").animate({left:0},0);
            };
        });
    },2000); 
});

$(function(){
    var count1 = 0;
            var id1 = setInterval(function(){
                $(".controller a").removeClass("on");
                $(".controller li").eq(count1).find("a").addClass("on");

                if(count1<4){
                    count1++;
                } else{
                    count1=0;
                }
            },2000);
});

/*text slide*/
$(function(){
    // $(".txtSlide img").addClass("move");
    
});

/*seasonstory*/
$(function(){
	var t=0;

    setTimeout(function(){
        $("body, html").animate({"scrolltop":"0px"},300,function(){
            // $(".seasonstory").addClass("active");

            $(window).scroll(function(){
                t=$(window).scrollTop();

                if(t=$(".dailybutter").offset({"top":"100px"})){ 
                    $(".seasonstory").addClass("active");
                }
            });
        });
    },300);
});