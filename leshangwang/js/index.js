$(function(){
//		Tab切换
		$("#list2>li").mouseenter(function(){
			
			var index = $(this).index();
			
			$(".list2_con").eq(index).addClass("show").siblings().removeClass("show");
			
		});
		$("#list2>li").mouseleave(function(){
			$(".list2_con").removeClass("show");
		});
		
		//点击首页内容进入进入详情页
		$("#list2>li,#main_list1>li,#main_list2>li").click(function(){
			location.href = "html/list.html";
			
		})
		
		
//		轮播图
		var i = 0;
		var timer = null;
		$(".next").click(function(){
			i++;
			if(i>$("#may_list>li").size()-5){
				i=0;
			}
			$("#may_list").stop().animate({"left":-192*i},800);
		});
		
		$(".pre").click(function(){
			i--;
			if(i<0){
				i = $("#may_list>li").size()-5;
			}
			$("#may_list").stop().animate({"left":-192*i},800);
		});
		timer = setInterval(function(){
			i++;
			if(i>$("#may_list>li").size()-5){
				i=0;
				
			}
			$("#may_list").stop().animate({"left":-192*i},800);
		},2000);
		//鼠标移入
		$("#may_list,#btn span").mouseenter(function(){
			clearInterval(timer);
		});
		
		
		$("#may_list,#btn span").mouseleave(function(){
			clearInterval(timer);
			timer = setInterval(function(){
				i++;
				if(i>$("#may_list>li").size()-5){
					i=0;
				}
				$("#may_list").stop().animate({"left":-192*i},800);
			},2000);	
		})
		
		//侧边栏点击回到顶部
		$("#sidebar_list li").click(function(e){
			e.stopPropagation();
			e.preventDefault();
			
		});
		
		$(".boder").click(function(){
//			console.log("aaa")
			$("html,body").stop(true).animate({scrollTop: 0}, 1000);
		})
		
		$("#sidebar_list li").eq(0).mouseenter(function(){
			$($(this)).html("客服咨询");
		})
		$("#sidebar_list li").eq(0).mouseleave(function(){
			$($(this)).html("<a href='#'><img src='img/sidebarImg/2.png' /></a>");
		})
		
		
		
		$("#sidebar_list li").eq(1).mouseenter(function(){
			$($(this)).html("微信资讯");
			$("#weixin").css({"display":"block"});
		})
		
		$("#sidebar_list li").eq(1).mouseleave(function(){
			$($(this)).html("<a href='#'><img src='img/sidebarImg/4.png' /></a>");
			$("#weixin").css({"display":"none"});
		})
		
		$("#sidebar_list li").eq(2).mouseenter(function(){
			$($(this)).html("app下载");
			$("#app").css({"display":"block"});
		})
		
		$("#sidebar_list li").eq(2).mouseleave(function(){
			$($(this)).html("<a href='#'><img src='img/sidebarImg/1.png' /></a>");
			$("#app").css({"display":"none"});
		})
		
		$("#sidebar_list li").eq(3).mouseenter(function(){
			$($(this)).html("回到顶部");
		})
		
		$("#sidebar_list li").eq(3).mouseleave(function(){
			$($(this)).html("<a href='#'><img src='img/sidebarImg/3.png' /></a>");
		})
		
		//点击鞋子 进入详情页
		
		$("#main_list1>li").eq(0).click(function(){
			location.href = "html/list.html";
		})
})