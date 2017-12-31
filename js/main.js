$().ready(function(){
	var timeout ;  
    var ruiruiCounent = 0;
    var time = 500;
    $("#div1 #contant p:nth-child(1)").bind("click",() => {
        console.log(ruiruiCounent);
        if(ruiruiCounent == 0) {
            alert("睿睿叫刘大睿~是世界上最可爱的人啦\n( • ̀ω•́ )✧");
            ruiruiCounent++;
        }else if(ruiruiCounent == 1){
            alert("还是涛涛最喜欢的人ㄟ( ▔, ▔ )ㄏ ");
            ruiruiCounent++;
        }else if(ruiruiCounent == 2){
            alert("又表白了(灬°ω°灬)别生气好不好~~");
        }
    	
    });
    console.log($("#div1 #contant p:nth-child(1)"));
    $("#div1 #contant p:nth-child(2)").bind("click",function() {
    	if($(this).hasClass('xuanzhuan')){
    		$(this).removeClass('xuanzhuan');
    	}else {
    		$(this).addClass('xuanzhuan');
    	}
    	
    });
    $("#div1 #caozuo p").bind("click",function(){
        alert("其实是我已经黔驴技穷了哈哈哈哈哈！\n(　 ´-ω ･)▄︻┻┳══━一");
    })
    var timeout;
    $("#div1 .btn").on("touchstart",function(e){
        
    	timeout = setTimeout(() => {
        e.stopPropagation();  
	       alert("么么哒~~~"); 
	    }, 1000);
    	console.log("touchstart");
    });
    $("#div1 .btn").on("touchend", function(){
        clearTimeout(timeout);
    	console.log("touchend");
        $("#div1").fadeOut('slow',function(){
            $("#div2").fadeIn('slow', function() {
                $(this).find('#contant p:nth-of-type(2)').fadeIn(time, () => {
                    $(this).find('#contant p:nth-of-type(3)').fadeIn(time, () => {
                        $(this).find("#contant p:nth-of-type(4)").fadeIn(time, () => {
                            $(this).find("#contant input").fadeIn(time, () => {
                                $(this).find("#caozuo").fadeIn(time, function() {
                                    
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    // 第二页的内容
    var timeout2;
    $("#div2 #caozuo button").on("touchstart",function(e){
        timeout2 = setTimeout(() => {
        alert("最美的最可爱的人当然是睿睿！！\n( ･´ω`･ )");  
            
        }, 1000);
    });
    $("#div2 .btn").on("touchend", function(){
        clearTimeout(timeout2);
        $("#div2").fadeOut('slow', function() {
            showTiwen();
        });
    });

    // 第二页里面的小彩蛋
    $("#div2 #contant p:nth-of-type(1)").bind("click",function(){
        alert("为什么要说又····");
    });
    $("#div2 #contant p:nth-of-type(2)").bind("click",function(){
        $(this)[0].innerText="哈哈，好玩吧~";
         $(this).addClass('xuanzhuan');
        console.log($(this)[0]);
    });


    // 提问页出来
    function showTiwen() {
        $("#div3").fadeIn('slow', function() {
            console.log($(this));
            $(this).find("#contant p:last").fadeIn(time, () => {
                $(this).find("#caozuo").fadeIn(time, function() {
                    
                });
            });
        });
    }

    // 给问题绑定事件

    // 保存每个问题打开的状态
    var flag = new Array(false,false,false,false);
    // 问题1 
    var timeoutQu1;
    var targetQU1 = $("#div3 #caozuo button:nth-of-type(1)");
    targetQU1.on("touchstart",function(e){
        timeoutQu1 = setTimeout(() => {
        e.stopPropagation();  
           alert("瘦不了，别想了，已经够美了，不知道你已经可爱死了吗？？？？"); 
        }, 1000);
        console.log("touchstart");
    });
    targetQU1.on("touchend",function(e){
        clearTimeout(timeoutQu1);
        $("#div3").fadeOut(time, function() {
            $("#ans1").fadeIn(time, function() {
                flag[0] = true;
                zuizhong();
            });
        });
    });

    // 问题2
    var timeoutQu2;
    var targetQU2 = $("#div3 #caozuo button:nth-of-type(2)");
    targetQU2.on("touchstart",function(e){
        timeoutQu2 = setTimeout(() => {
        e.stopPropagation();  
           alert("emmmmmmmmmm，是你￣へ￣"); 
        }, 1000);
        console.log("touchstart");
    });
    targetQU2.on("touchend",function(e){
        clearTimeout(timeoutQu2);
        $("#div3").fadeOut(time, function() {
            $("#ans2").fadeIn(time, function() {
                flag[1] = true;
                zuizhong();
            });
        });
    });

    // 问题3
    var timeoutQu3;
    var targetQU3 = $("#div3 #caozuo button:nth-of-type(3)");
    targetQU3.on("touchstart",function(e){
        timeoutQu3 = setTimeout(() => {
        e.stopPropagation();  
           alert("真的好难想<(￣ ﹌ ￣)>  "); 
        }, 1000);
        console.log("touchstart");
    });
    targetQU3.on("touchend",function(e){
        clearTimeout(timeoutQu3);
        $("#div3").fadeOut(time, function() {
            $("#ans3").fadeIn(time, function() {
                flag[2] = true;
                zuizhong();
            });
        });
    });

    // 问题4
    var timeoutQu4;
    var targetQU4 = $("#div3 #caozuo button:nth-of-type(4)");
    targetQU4.on("touchstart",function(e){
        timeoutQu4 = setTimeout(() => {
        e.stopPropagation();  
           alert("新的模块"); 
        }, 1000);
        console.log("touchstart");
    });
    targetQU4.on("touchend",function(e){
        clearTimeout(timeoutQu4);
        $("#div3").fadeOut(time, function() {
            $("#ans4").fadeIn(time, function() {
                 
                flag[3] = true;
                zuizhong();
            });
        });
    });

    // 每个页面长按
    // 问题1的彩蛋
    var timeountTou1;
     $("#ans1 #touming").on("touchstart",function(e){
        timeountTou1 = setTimeout(() => {
            $("#ans1 #contant").fadeOut(time, function() {
                $("#ans1 #touming p").fadeIn(time, function() {
                    
                });
            });
        },1000);
     })
     var timeountTou2;
     $("#ans2 #touming").on("touchstart",function(e){
        timeountTou2 = setTimeout(() => {
            $("#ans2 #contant").fadeOut(time, function() {
                $("#ans2 #touming p").fadeIn(time, function() {
                    
                });
            });
        },1000);
     })
    var timeountTou3;
     $("#ans3 #touming").on("touchstart",function(e){
        timeountTou3 = setTimeout(() => {
            $("#ans3 #contant").fadeOut(time, function() {
                $("#ans3 #touming p").fadeIn(time, function() {
                    
                });
            });
        },1000);
     })
    var timeountTou4;
     $("#ans4 #touming").on("touchstart",function(e){
        timeountTou4 = setTimeout(() => {
            $("#ans4 #contant").fadeOut(time, function() {
                $("#ans4 #touming p").fadeIn(time, function() {
                    
                });
            });
        },1000);
     })



    // 所有返回到到div3的按钮

    $(".goDiv3").bind("click",function(e){
        $(".answer").fadeOut(time, function() {
            $("#div3").fadeIn(time, function() {
                
            });
        });
    })

    // 开启最终问题
    function zuizhong() {
        console.log(flag);
        if(flag.indexOf(false) >= 0) {
            console.log("还存在false");
        }else {
            $("#div3 #caozuo button:last").fadeIn(time, function() {
                
            });
        }
    }
    $("#div3 #caozuo button:last").bind("click",function(){
        console.log("被点击了");
        $("#div3").fadeOut('time', function() {
            $("#biaodan").fadeIn(time, function() {
            
            });
        });
        
    });

    $("#biaodan #contant button").bind("click",function(){
         $("#biaodan").fadeOut(time, function() {
            $("#yuanwang").fadeIn(time, function() {
                
            });
        });
     })

    $("#yuanwang #caozuo button").bind("click",function(){
        $("#yuanwang").fadeOut(time, function() {
            $("#wanan").fadeIn(time, function() {
                
            });
        });
    })
})