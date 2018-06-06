//全局变量   1.str
$(function(){
	//点击顶部的li  样式变化	
	$('.choose-style-kind li').click(function(){
		var index=$(this).index();
		$(this).addClass("choose-active").siblings("li").removeClass("choose-active");
		$(".all-choose .all-choose-input").removeClass("choose-active");
		switch (index){
			case 0:
				initStylePage("../lib/json/styleTitle.json");
				break;
			case 1:
				initStylePage("../lib/json/styleText.json");
				break;
			case 2:
				initStylePage("../lib/json/styleImgText.json");
				break;
			case 3:
				initStylePage("../lib/json/styleGuide.json");
				break;
			case 4:
				initStylePage("../lib/json/styleBar.json");
				break;
			case 5:
				initStylePage("../lib/json/styleFlex.json");
				break;
			default:
				break;
		}
	});
	
	$('.choose-template-kind li').click(function(){
		var index=$(this).index();
		$(this).addClass("choose-active").siblings("li").removeClass("choose-active");
		$(".all-choose .all-choose-input").removeClass("choose-active");
		$(".all-choose .all-choose-template-input").removeClass("choose-active");
		switch (index){
			case 0:
				initTemplatePage("../lib/json/beautifulText.json");
				break;
			case 1:
				initTemplatePage("../lib/json/beautifulFood.json");
				break;
			case 2:
				initTemplatePage("../lib/json/styleImgText.json");
				break;
			case 3:
				initTemplatePage("../lib/json/styleGuide.json");
				break;
			case 4:
				initTemplatePage("../lib/json/styleBar.json");
				break;
			case 5:
				initTemplatePage("../lib/json/styleFlex.json");
				break;
			default:
				break;
		}
	});	
	
	
	$(".btn-drap .adopt-btn").click(function(){
		var userStyle=$(this).parent(".btn-drap").siblings(".drap-content").html();
        localStorage.setItem("userStyle",userStyle);
		userStyle=userStyle;
        window.location.href="../../Editor.html";
	});

	
	
	//点击全选  切换样式
	$(".all-choose .all-choose-input").click(function(){
		$(this).addClass("choose-active");
		$(".choose-style-kind li").addClass("choose-active");
		initStylePage("../lib/json/allStyle.json");
	});

	$(".all-choose .all-choose-template-input").click(function(){
		console.log('sada');
		$(this).addClass("choose-active");
		$(".choose-style-kind li").addClass("choose-active");
		initTemplatePage("../lib/json/allTemplate.json");
	});



	//收藏
	$("#masonry").on("click",".choose-collection",function(){
		$(this).removeClass("choose-collection").addClass("or-collection").html('<span class="glyphicon glyphicon-heart marR-10"></span>取消收藏');
	});
	
	//取消收藏
	$("#masonry").on("click",".or-collection",function(){
		$(this).removeClass("or-collection").addClass("choose-collection").html('<span class="glyphicon glyphicon-heart marR-10"></span>收藏');
	});
	
	
	//遮罩点击hide
	$('#drap').click(function(){
		$(this).hide();
	});

	//点击每一块的顶部出现遮罩 显示该内容
	$("#masonry").on('click','.masonry-style-top',function(){
		var styleContent=$(this).html();
		var id=$(this).siblings(".masonry-style-bottom").find(".collection-event").attr("type_id");
		$(".btn-drap .collection-btn").attr("type_id",id);
		$('#drap .drap-content').html('');
		$('#drap .drap-content').html(styleContent);
		var right=$(this).siblings(".masonry-style-bottom").children("p:last-child").hasClass("or-collection");   //为true  已经 选择
			if(right){
				$('.btn-drap .collection-btn').removeClass("cancel-collection").removeClass("sure-collection").addClass("cancel-collection").html("取消收藏");
			}else{
				$('.btn-drap .collection-btn').removeClass("cancel-collection").removeClass("sure-collection").addClass("sure-collection").html("收藏");
			}
		$("#drap").show();
	});
	
	$('.btn-drap .collection-btn').unbind("click").click(function(){
		var id=$(this).attr("type_id");
		var masonryLength=$("#masonry .collection-event").length;
		var have_collection=null;
		for(var i=0;i<masonryLength;i++){
			have_collection=$("#masonry .masonry-style-bottom .collection-event").eq(i).attr("type_id");
			if(have_collection == id){
				if($("#masonry .collection-event").eq(i).hasClass("choose-collection")){
					console.log("现在选取");
					$("#masonry .collection-event").eq(i).removeClass("choose-collection").addClass("or-collection").html('<span class="glyphicon glyphicon-heart marR-10"></span>取消收藏');
					$(this).removeClass("cancel-collection").removeClass("sure-collection").addClass("cancel-collection").html("取消收藏");
					return;
				}else{
					$("#masonry .collection-event").eq(i).removeClass("or-collection").addClass("choose-collection").html('<span class="glyphicon glyphicon-heart marR-10"></span>收藏');
					$(this).removeClass("cancel-collection").removeClass("sure-collection").addClass("sure-collection").html("收藏");
					return;
				}
			}
		}
		return false;
	});
	
	$("#masonry").on('click','.masonry-template-top',function(){
		var _this=this;
		$.ajax({
			type:"get",
			url:"../lib/json/templateContent.json",
			success:function(data){
				var styleContent=data.data[0].content;
				var id=$(_this).siblings(".masonry-style-bottom").find(".collection-event").attr("type_id");
				console.log(id);
				$(".btn-drap .collection-btn").attr("type_id",id);
				$('#drap .drap-content').html('');
				$('#drap .drap-content').html(styleContent);
				var right=$(this).siblings(".masonry-style-bottom").children("p:last-child").hasClass("or-collection");   //为true  已经 选择
					if(right){
						$('.btn-drap .collection-btn').removeClass("cancel-collection").removeClass("sure-collection").addClass("cancel-collection").html("取消收藏");
					}else{
						$('.btn-drap .collection-btn').removeClass("cancel-collection").removeClass("sure-collection").addClass("sure-collection").html("收藏");
					}
				$("#drap").show();
			},
			async:true
		});

	});	
});


function initTemplatePage(url){
    $.ajax({
        type:"get",
        url:url,
        data:{},
        success:function(data){
            var data=data.data;
            str='';
            var type='';
            var state='';

	        $('#masonry').empty().masonry('reloadItems');			    
            for(var i=0;i<data.length;i++){    
            	switch (data[i].type){
            		case 1:
            			type ='美文';
            			break;
            		case 2:
            			type ='美食';
            			break;
            		case 3:
            			type ='图文';
            			break;
            		case 4:
            			type ='引导图';
            			break;
            		case 5:
            			type ='分割线';
            			break;
            		case 6:
            			type ='分栏布局';
            			break;
            		default:
            			break;
            	}
            	if(data[i].state ==1){
            		state='<p class="collection-event or-collection" type_id="'+data[i].id+'"><span class="glyphicon glyphicon-heart marR-10"></span>取消收藏</p>';
            	}else{
            		state='<p class="collection-event choose-collection" type_id="'+data[i].id+'"><span class="glyphicon glyphicon-heart marR-10"></span>收藏</p>';    
            	}
            	str =`	<div class="col-md-3 mar-t">
			            	<div class="masonry-grid">
			            		<div class="masonry-template-top">
			            		<img src="`+data[i].src+`" alt="模板信息"/>
			            		</div>
			            		<div class="masonry-style-bottom">
			            			<p class="style-kind">`+type+`</p>
			            			`+state+`
			            		</div>
			            	</div>
		            	</div>`;

				var $str=$(''+str+'');
			    $("#masonry").masonry().append($str).masonry('appended', $str);
			    $("#masonry").imagesLoaded(function () {
			       $("#masonry").masonry();
			    });
            }
        },
        error:function(){
            alert('请检查网络');
        },
        async:true
    }); 
}


function initStylePage(url){
    $.ajax({
        type:"get",
        url:url,
        data:{},
        success:function(data){
            var data=data.data;
            str='';
            var type='';
            var state='';
			$('#masonry').empty().masonry('reloadItems');
            for(var i=0;i<data.length;i++){    
            	switch (data[i].type){
            		case 1:
            			type ='标题';
            			break;
            		case 2:
            			type ='正文';
            			break;
            		case 3:
            			type ='图文';
            			break;
            		case 4:
            			type ='引导图';
            			break;
            		case 5:
            			type ='分割线';
            			break;
            		case 6:
            			type ='分栏布局';
            			break;
            		default:
            			break;
            	}
            	if(data[i].state ==1){
            		state='<p class="collection-event or-collection" type_id="'+data[i].id+'"><span class="glyphicon glyphicon-heart marR-10"></span>取消收藏</p>';
            	}else{
            		state='<p class="collection-event choose-collection" type_id="'+data[i].id+'"><span class="glyphicon glyphicon-heart marR-10"></span>收藏</p>';    
            	}
            	str =`	<div class="col-md-3 mar-t">
			            	<div class="masonry-grid">
			            		<div class="masonry-style-top">
								`+data[i].html+`
			            		</div>
			            		<div class="masonry-style-bottom">
			            			<p class="style-kind">`+type+`</p>
			            			`+state+`
			            		</div>
			            	</div>
		            	</div>`;

				var $str=$(''+str+'');
			    $("#masonry").masonry().append($str).masonry('appended', $str);
			    $("#masonry").imagesLoaded(function () {
			       $("#masonry").masonry();
			    });
            }
            
        },
        error:function(){
            alert('请检查网络');
        },
        async:true
    }); 
}
