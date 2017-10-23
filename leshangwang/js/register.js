window.onload = function(){
	//封装一个方法获取id元素节点
	function $(id) {
		return document.getElementById(id);
	}
	
	//获取p元素
	
	var aP = document.getElementsByTagName("p");
	
	//验证手机号码
	function checkPhone () {
		var reg = /^1[0-9]{10}$/;
		var value = $("phone").value;
		return reg.test(value);
	}
	
	$("phone").onblur = function(){
		if(checkPhone()){
			aP[0].innerHTML = "";
		}
		else{
			aP[0].innerHTML = "手机号码格式错误";
		}
	}
	
	
	//更换验证码
	//一开始运行一下，要不没有验证码
	changeNum();
	function changeNum () {
		var str = "";
		var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
      'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
		for (var i=0;i<4;i++) {
			var a = Math.floor(Math.random()*52);
			str+= arr[a];
			str = str.toUpperCase();
		}
		$("yanzheng").innerHTML = str;
	}
	
	//点击换一换  换验证码
	
	$("change").onclick = function(){
		changeNum();
	}
	
	//验证 验证码是否正确
	
	function checkCheck() {
		var value = $("checkNum").value;
		value = value.toUpperCase();
		if(value==$("yanzheng").innerHTML){
			
			return true;
		}
		else{
			return false;
		}
	}
	
	$("checkNum").onblur = function(){
//		var value = $("checkNum").value;
//		value = value.toUpperCase();
//		if(value==$("yanzheng").innerHTML){
//			aP[1].innerHTML = "";
//		}
//		else{
//			aP[1].innerHTML = "验证码输入有误";
//		}

		if(checkCheck()){
			aP[1].innerHTML = "";
		}
		else{
			aP[1].innerHTML = "验证码输入有误";
		}
	}
	
	//短信验证码不好做  就用个简单的正则6位数字
	function checkPhoneNum () {
		var reg = /^[0-9]{6}$/;
		var value = $("msg").value;
		return reg.test(value);
	}
	
	$("msg").onblur = function(){
		if(checkPhoneNum()){
			aP[2].innerHTML = "";
		}else{
			aP[2].innerHTML = "短信证码输入有误";
		}
	}
	
	//密码验证
	function checkPsd () {
		var reg = /^.{6,}$/;
		var value = $("psd").value;
		return reg.test(value);
	}
	var aSpan = $("psdLevel").getElementsByTagName("span");
	
	$("psd").onkeyup = function(){
		$("psdLevel").style.display = "block";
		if(checkPsd()){
//			aP[3].innerHTML = "";
			var len = $("psd").value.length;
//			console.log(len);
//			aSpan[0].style.background = "red";
			if(len>=6&&len<12){
				aSpan[0].style.background = "red";
				aSpan[1].style.background = "#F2B5B5";
				aSpan[2].style.background = "#F2B5B5";
			}
			else if(len>=12&&len<20){
				aSpan[0].style.background = "red";
				aSpan[1].style.background = "red";
				aSpan[2].style.background = "#F2B5B5";
			}
			else if(len>=20){
				aSpan[0].style.background = "red";
				aSpan[1].style.background = "red";
				aSpan[2].style.background = "red";
			}
		}else{
			aSpan[0].style.background = "#F2B5B5";
			aSpan[1].style.background = "#F2B5B5";
			aSpan[2].style.background = "#F2B5B5";
//			aP[3].innerHTML = "密码长度为6~20位";
		}
	}
	
	//密码框失去焦点
	$("psd").onblur = function(){
		if(checkPsd()){
			$("btn").style.background = "#0700C5"
		}
		else{
			aP[3].innerHTML = "密码长度必须为6~20位";
		}
	}
	
	//注册按钮
	$("btn").onclick = function(){
		if(checkPhone()&&checkCheck()&&checkPhoneNum()&&checkPsd()){
			//ajax请求数据
			//创建xhr对象
			function createXHR(){
				if (window.XMLHttpRequest) {  
					return new XMLHttpRequest(); //IE7+，非IE
				}
				return ActiveXObject("Microsoft.XMLHTTP"); //IE6
			}
			var name = $("phone").value;
			var psd = $("psd").value;

			
			var xhr = createXHR();
			xhr.open("POST","http://localhost/leshangwang/json/register.php",true);
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
			xhr.send("username="+name+"&password="+psd);
			
			xhr.onreadystatechange = function(){
				if(xhr.readyState==4&&xhr.status==200){
					var obj = JSON.parse(xhr.responseText);
					if(obj.status==1){
						window.location.href = "login.html";
						alert(obj.msg);
						
					}else{
						alert(obj.msg);
					}
				}
			}
		}
		else{
			if(!checkPhone()){
				alert("手机号码不合法")
			}
			if(!checkCheck()){
				alert("验证码输入有误");
			}
			if(!checkPhoneNum()){
				alert("短信验证码有误") ;
			}
			if(!checkCheck()){
				alert("密码输入不合法") ;
			}
			
			window.location.reload();
			
		}
			
	}
	
	
}

