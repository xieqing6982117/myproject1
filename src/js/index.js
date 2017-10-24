onload = function(){
				
				//let, const
				//class, extends
				//箭头函数
				
				//飞机大战
				//游戏引擎：对象
				//我的飞机： 对象
				//敌机： 构造函数
				//子弹： 构造函数
				
				let t = document.getElementById("list");
				let ali = list.getElementsByTagName("li");
				
				for (let i=0; i<ali.length; i++) {
					ali[i].onclick = function(){
						
						//先移除ul
						list.parentNode.removeChild(list);  
						
						//设置难度， 设置子弹发射间隔
						myPlane.fireInterval = this.value;
						
						//开始游戏
						gameEngine.init().start();
					}
				}
				
				
			}