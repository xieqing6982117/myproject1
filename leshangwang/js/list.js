$(function(){
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
		$($(this)).html("<a href='#'><img src='../img/sidebarImg/2.png' /></a>");
	})
	
	
	
	$("#sidebar_list li").eq(1).mouseenter(function(){
		$($(this)).html("微信资讯");
		$("#weixin").css({"display":"block"});
	})
	
	$("#sidebar_list li").eq(1).mouseleave(function(){
		$($(this)).html("<a href='#'><img src='../img/sidebarImg/4.png' /></a>");
		$("#weixin").css({"display":"none"});
	})
	
	$("#sidebar_list li").eq(2).mouseenter(function(){
		$($(this)).html("app下载");
		$("#app").css({"display":"block"});
	})
	
	$("#sidebar_list li").eq(2).mouseleave(function(){
		$($(this)).html("<a href='#'><img src='../img/sidebarImg/1.png' /></a>");
		$("#app").css({"display":"none"});
	})
	
	$("#sidebar_list li").eq(3).mouseenter(function(){
		$($(this)).html("回到顶部");
	})
	
	$("#sidebar_list li").eq(3).mouseleave(function(){
		$($(this)).html("<a href='#'><img src='../img/sidebarImg/3.png' /></a>");
	})
	
	
	//先获取轮播图的数据
	$.get("../json/lunbo.json", function(data){
//		console.log(data); 
		
		var arr = data;
		for (var i=0;i<arr.length;i++) {
			var obj = arr[i];
			$("<li><img src=../"+obj.img+" /></li>").appendTo($("#list2_2"));
			if(i==0){
				$("#list2 li").eq(0).addClass("active");
			}
		}
		lunbo();
		
	})

	//jq轮播图
	
	function lunbo() {
		//复制第一张图到最后
		$("#list2_2 li").first().clone(true).appendTo($("#list2_2"));
		var size = $("#list2_2 li").size();
		$("#list2_2").width(960*size);
		//定时器开启
		
		var i = 0;
		var timer = setInterval(function(){
			i++;
			move();
		},2000)
		
		function move() {
			//需要判断一下边界
			if (i < 0) {
				$("#list2_2").css("left", -960*(size-1));
				i = size-2;
			}
			if(i>=size){
				$("#list2_2").css({"left":0})
				i=1;
			}
			$("#list2_2").stop().animate({"left":-960*i},500);
			//上面的字跟着动
			if(i==size-1){
				$("#list2 li").eq(0).addClass("active").siblings().removeClass("active");
			}
			$("#list2 li").eq(i).addClass("active").siblings().removeClass("active");
		}
		//点击对应的导航显示内容
	
		$("#list2 li").mouseenter(function(){
			clearInterval(timer);
			var index = $(this).index();
			$("#list2_2").css({"left":-960*index});
			$("#list2 li").eq(index).addClass("active").siblings().removeClass("active");
			
		})
		
		
		$("#list2 li").mouseleave(function(){
			i = $(this).index();
			timer = setInterval(function(){
				i++;
				move();
			},2000)
		})
		
		
//		鼠标移入list停止轮播
		$("#list2_2").on({
			mouseenter:function(){
				clearInterval(timer);
			},
			mouseleave:function(){
				timer = setInterval(function(){
					i++;
					move();
				},2000)
			}
		})
		//上一页下一页
		$("#next").on({
			click:function(){
				i++;
				move();
			},
			mouseenter:function(){
				clearInterval(timer);
			},
			mouseleave:function(){
				timer = setInterval(function(){
					i++;
					move();
				},2000)
			}
		})
		
		$("#pre").on({
			click:function(){
				i--;
				move();
			},
			mouseenter:function(){
				clearInterval(timer);
			},
			mouseleave:function(){
				timer = setInterval(function(){
					i++;
					move();
				},2000)
			}
		})
	}
	
	
	//加载商品列表页的数据
	
	//ajax请求数据  动态加载到页面的指定位置
	$.get("../json/list.json",function(data){
//		console.log(data);
		var arr = data;
		//遍历数组中的数据
		for (var i=0;i<arr.length;i++) {
			var obj = arr[i];
//			var li = "<li><div><img src='../"+obj.img2+"' /></div><p>"+obj.name+"</p><p>耐克</p><span><i>￥</i>"+obj.price+"</span></li>"
				var li= `<li>
							<div>
								<img src='../${obj.img2}' >
							</div>
							<p>${obj.name}</p>
							<p>耐克</p>
							<span><i>￥</i>${obj.price}</span>
						</li>`
				
				//Es6模版字符串非常的好用
			$(li).appendTo($("#shoes_list"));
			
		}
		
		//点击尚品进入详情页
		$("#shoes_list").on("click","li",function(){
			var index = $(this).index(); 
			var obj = arr[index];
			//进入详情页， 且将当前点击的商品的id传入
			location.href = "detail.html?id=" + obj.id;
			console.log("aaaa")
		});
		//鼠标移入列表页时改变图片对应的src
		$("#shoes_list").on("mouseenter","img",function(){
			var index = $(this).index("#shoes_list img"); 
			var obj = arr[index];
			$(this).attr("src","../"+obj.img1);//这里src的路径是一样的
		});
		$("#shoes_list").on("mouseleave","img",function(){
			var index = $(this).index("#shoes_list img"); 
			var obj = arr[index];
			$(this).attr("src","../"+obj.img2);
		});
		
	});
	
})