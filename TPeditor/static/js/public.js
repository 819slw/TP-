$(function(){
	userStyle='';
	$(".container-left li").click(function(){
		$(this).addClass("active").siblings("li").removeClass("active");
	});	
});
	function ajaxData(url,data,callback){
		$.ajax({
			type:"post",
			url:url,
			data:data,
			success:function(data){
              	if(data.code == 1){
              		callback(true,data);
              	}else{
              		var msg=data.msg;
					alert(msg);
              	}
			},
			error:function(data){
				if(data && data.msg){
              		var msg=data.msg;
					alert(msg);
	           }else{
	            	alert('数据请求错误');
	            }
			},
			async:true
		});
	}