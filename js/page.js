$(function(){
	/*获取验证码*/
	$(".fs").click(function(){
		$(this).hide().siblings(".cf").show();
		
		var timer1 = setInterval(function(){
			var mval = $(".cf em").text();
			$(".cf em").text(mval-1);
		},1000)
		setTimeout(function(){
			clearInterval(timer1);
			$(".cf").hide().siblings(".fs").show();
			$(".cf em").text(60);
		},60000)

	})
	
	/*点击文字勾选checkbox框*/
	$(".gx").click(function(){
		if ($(this).children("input").prop("checked")) {
		
			$(this).children("input").prop("checked",false);
		}else{
			$(this).children("input").prop("checked","checked");
		}
	})
	
	/*点击弹层确定关闭弹层和遮罩层*/
	$(".tc button,.zzc").click(function(){
		$(".tc").fadeOut(1000);
		$(".zzc").fadeOut(1000);
	})
	
	/*出现弹层禁止滚动*/
	$("body").on("touchmove",function(event){
		if($(".tc").is(":visible")==true){
			event.preventDefault();
		}
	})
	
})