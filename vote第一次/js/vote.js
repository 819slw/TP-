var endDate = {            //结束时间  
	time:'2018-2-26 00:00:00'
}

	var data;



function change(){
		$.ajax({
			url:"demo.json",
			success:function(data){
				var data=data;
				change_view(data);
			},
			error:function(){
				console.log('失败');
			}
		});	
};

function init(){
	setTimeout(function(){
				$.ajax({
					url:"demo.json",
					success:function(data){
						var data=data;
						init_view(data);
					},
					error:function(){
						console.log('失败');
					}
				});	
	},1000);
}


$(function(){

	init();

	var myDate;
	var year;
	var month;
	var date; 
	var h;       //获取当前小时数(0-23)
	var m;     //获取当前分钟数(0-59)
	var s;  
	var now;

	//当前时间
	setInterval(function(){
		myDate = new Date();
		year=myDate.getFullYear();
		month=myDate.getMonth()+1;
		date=myDate.getDate(); 
		h=myDate.getHours() > 9 ? myDate.getHours() : '0'+ myDate.getHours();  
		m=myDate.getMinutes() > 9 ? myDate.getMinutes() : '0'+ myDate.getMinutes();   
		s=myDate.getSeconds() > 9 ? myDate.getSeconds() : '0'+ myDate.getSeconds(); 
		now=year+'-'+month+"-"+date+" "+h+':'+m+":"+s; 
		$('.begin_r span').html(now);
			show_time();
	},1000);


	//设置柱形图展示区域的高度
	var bodyWidth=$('body').height();
	var zhuHeight=bodyWidth-80-50-46-50;
	$('.view_show .index_three').height(zhuHeight);

	//控制padding-top实现div的高度


	setInterval(function(){
		change();
	},1000);

	//假数据
		// data={       //初始 数据
		// 	states:200,
		// 	data:[
		// 			{
		// 				id:'1fb7f03b715efe28',
		// 				name:'李晨',
		// 				height:340,
		// 				src:'images/head.jpg',
		// 				number:23,
		// 				rank:1
		// 			},
		// 			{
		// 				id:'1s2kf03b',
		// 				name:'王麻子',
		// 				height:328,
		// 				src:'images/head.jpg',
		// 				number:109,
		// 				rank:2
		// 			},
		// 			{
		// 				id:'1f31226315efe28',
		// 				name:'张三',
		// 				height:311,
		// 				src:'images/head.jpg',
		// 				number:233,
		// 				rank:3
		// 			},
		// 			{
		// 				id:'dasdsa231dhas8dh2',
		// 				name:'李四',
		// 				height:298,
		// 				src:'images/head.jpg',
		// 				number:3,
		// 				rank:4
		// 			},
		// 			{
		// 				id:'2jd93jdqhfpqjf934f',
		// 				name:'美团',
		// 				height:264,
		// 				src:'images/head.jpg',
		// 				number:68,
		// 				rank:5
		// 			},
		// 			{
		// 				id:'983h4f9pfq3p4hqpf',
		// 				name:'淘宝',
		// 				height:221,
		// 				src:'images/head.jpg',
		// 				number:596,
		// 				rank:6
		// 			},
		// 			{
		// 				id:'asd8f9asf9w8hfphwa',
		// 				name:'拼多多',
		// 				height:200,
		// 				src:'images/head.jpg',
		// 				number:180,
		// 				rank:7
		// 			},
		// 			{
		// 				id:'dsadqdwdq4f4qf43',
		// 				name:'百度',
		// 				height:186,
		// 				src:'images/head.jpg',
		// 				number:101,
		// 				rank:8
		// 			},
		// 			{
		// 				id:'j567j67j5kr67kr67k',
		// 				name:'游览器',
		// 				height:163,
		// 				src:'images/head.jpg',
		// 				number:86,
		// 				rank:9
		// 			},
		// 			{
		// 				id:'r6j76jr7w45yww45',
		// 				name:'王者荣耀',
		// 				height:120,
		// 				src:'images/head.jpg',
		// 				number:78,
		// 				rank:10
		// 			}
		// 		]
		// }

		// setTimeout(function(){
		// 	data.data=[          //十名以内的变化
		// 			{
		// 				id:'1fb7f03b715efe28',
		// 				name:'李晨',
		// 				height:400,
		// 				src:'images/head.jpg',
		// 				number:23,
		// 				rank:1
		// 			},
		// 			{
		// 				id:'1s2kf03b',
		// 				name:'王麻子',
		// 				height:358,
		// 				src:'images/head.jpg',
		// 				number:109,
		// 				rank:2
		// 			},
		// 			{
		// 				id:'1f31226315efe28',
		// 				name:'张三',
		// 				height:331,
		// 				src:'images/head.jpg',
		// 				number:233,
		// 				rank:3
		// 			},
		// 			{
		// 				id:'dasdsa231dhas8dh2',
		// 				name:'李四',
		// 				height:308,
		// 				src:'images/head.jpg',
		// 				number:3,
		// 				rank:4
		// 			},
		// 			{
		// 				id:'j567j67j5kr67kr67k',
		// 				name:'游览器',
		// 				height:183,
		// 				src:'images/head.jpg',
		// 				number:86,
		// 				rank:5
		// 			},
		// 			{
		// 				id:'2jd93jdqhfpqjf934f',
		// 				name:'美团',
		// 				height:264,
		// 				src:'images/head.jpg',
		// 				number:68,
		// 				rank:6
		// 			},
		// 			{
		// 				id:'983h4f9pfq3p4hqpf',
		// 				name:'淘宝',
		// 				height:258,
		// 				src:'images/head.jpg',
		// 				number:596,
		// 				rank:7
		// 			},
		// 			{
		// 				id:'asd8f9asf9w8hfphwa',
		// 				name:'拼多多',
		// 				height:236,
		// 				src:'images/head.jpg',
		// 				number:180,
		// 				rank:8
		// 			},
		// 			{
		// 				id:'dsadqdwdq4f4qf43',
		// 				name:'百度',
		// 				height:196,
		// 				src:'images/head.jpg',
		// 				number:101,
		// 				rank:9
		// 			},
		// 			{
		// 				id:'r6j76jr7w45yww45',
		// 				name:'王者荣耀',
		// 				height:120,
		// 				src:'images/head.jpg',
		// 				number:78,
		// 				rank:10
		// 			}
		// 		];
		// change_view();
		// },1000);

		// setTimeout(function(){
		// 	data.data=[
		// 			{
		// 				id:'1fb7f03b715efe28',
		// 				name:'李晨',
		// 				height:400,
		// 				src:'images/head.jpg',
		// 				number:23,
		// 				rank:1
		// 			},
		// 			{
		// 				id:'1s2kf03b',
		// 				name:'王麻子',
		// 				height:358,
		// 				src:'images/head.jpg',
		// 				number:109,
		// 				rank:2
		// 			},
		// 			{
		// 				id:'1f31226315efe28',
		// 				name:'张三',
		// 				height:331,
		// 				src:'images/head.jpg',
		// 				number:233,
		// 				rank:3
		// 			},
		// 			{
		// 				id:'dasdsa231dhas8dh2',
		// 				name:'李四',
		// 				height:308,
		// 				src:'images/head.jpg',
		// 				number:3,
		// 				rank:4
		// 			},
		// 			{
		// 				id:'2jd93jdqhfpqjf934f',
		// 				name:'美团',
		// 				height:284,
		// 				src:'images/head.jpg',
		// 				number:68,
		// 				rank:5
		// 			},
		// 			{
		// 				id:'983h4f9pfq3p4hqpf',
		// 				name:'淘宝',
		// 				height:321,
		// 				src:'images/head.jpg',
		// 				number:596,
		// 				rank:6
		// 			},
		// 			{
		// 				id:'asd8f9asf9w8hfphwa',
		// 				name:'拼多多',
		// 				height:266,
		// 				src:'images/head.jpg',
		// 				number:180,
		// 				rank:7
		// 			},
		// 			{
		// 				id:'dsadqdwdq4f4qf43',
		// 				name:'百度',
		// 				height:196,
		// 				src:'images/head.jpg',
		// 				number:101,
		// 				rank:8
		// 			},
		// 			{
		// 				id:'j567j67j5kr67kr67k',
		// 				name:'游览器',
		// 				height:213,
		// 				src:'images/head.jpg',
		// 				number:86,
		// 				rank:9
		// 			},
		// 			{
		// 				id:'r6j76jr7w45yww45',
		// 				name:'王者荣耀',
		// 				height:120,
		// 				src:'images/head.jpg',
		// 				number:78,
		// 				rank:10
		// 			}
		// 		];
		// change_view();
		// },2000);

		// setTimeout(function(){
		// 	data.data=[
		// 			{
		// 				id:'1f31226315efe28',
		// 				name:'张三',
		// 				height:331,
		// 				src:'images/head.jpg',
		// 				number:233,
		// 				rank:1
		// 			},
		// 			{
		// 				id:'1fb7f03b715efe28',
		// 				name:'李晨',
		// 				height:400,
		// 				src:'images/head.jpg',
		// 				number:23,
		// 				rank:2
		// 			},
		// 			{
		// 				id:'1s2kf03b',
		// 				name:'王麻子',
		// 				height:358,
		// 				src:'images/head.jpg',
		// 				number:109,
		// 				rank:3
		// 			},
		// 			{
		// 				id:'dasdsa231dhas8dh2',
		// 				name:'李四',
		// 				height:308,
		// 				src:'images/head.jpg',
		// 				number:3,
		// 				rank:4
		// 			},
		// 			{
		// 				id:'2jd93jdqhfpqjf934f',
		// 				name:'美团',
		// 				height:264,
		// 				src:'images/head.jpg',
		// 				number:68,
		// 				rank:5
		// 			},
		// 			{
		// 				id:'983h4f9pfq3p4hqpf',
		// 				name:'淘宝',
		// 				height:321,
		// 				src:'images/head.jpg',
		// 				number:596,
		// 				rank:6
		// 			},
		// 			{
		// 				id:'asd8f9asf9w8hfphwa',
		// 				name:'拼多多',
		// 				height:266,
		// 				src:'images/head.jpg',
		// 				number:180,
		// 				rank:7
		// 			},
		// 			{
		// 				id:'dsadqdwdq4f4qf43',
		// 				name:'百度',
		// 				height:216,
		// 				src:'images/head.jpg',
		// 				number:101,
		// 				rank:8
		// 			},
		// 			{
		// 				id:'j567j67j5kr67kr67k',
		// 				name:'游览器',
		// 				height:123,
		// 				src:'images/head.jpg',
		// 				number:86,
		// 				rank:9
		// 			},
		// 			{
		// 				id:'r6j76jr7w45yww45',
		// 				name:'王者荣耀',
		// 				height:140,
		// 				src:'images/head.jpg',
		// 				number:78,
		// 				rank:10
		// 			}
		// 		];
		// change_view();
		// },3000);


		// setTimeout(function(){
		// 	data.data=[
		// 			{
		// 				id:'1f31226315efe28',
		// 				name:'张三',
		// 				height:331,
		// 				src:'images/head.jpg',
		// 				number:233,
		// 				rank:1
		// 			},
		// 			{
		// 				id:'1fb7f03b715efe28',
		// 				name:'李晨',
		// 				height:400,
		// 				src:'images/head.jpg',
		// 				number:23,
		// 				rank:2
		// 			},
		// 			{
		// 				id:'1s2kf03b',
		// 				name:'王麻子',
		// 				height:358,
		// 				src:'images/head.jpg',
		// 				number:109,
		// 				rank:3
		// 			},
		// 			{
		// 				id:'dasdsa231dhas8dh2',
		// 				name:'李四',
		// 				height:308,
		// 				src:'images/head.jpg',
		// 				number:3,
		// 				rank:4
		// 			},
		// 			{
		// 				id:'2jd93jdqhfpqjf934f',
		// 				name:'美团',
		// 				height:264,
		// 				src:'images/head.jpg',
		// 				number:68,
		// 				rank:5
		// 			},
		// 			{
		// 				id:'983h4f9pfq3p4hqpf',
		// 				name:'淘宝',
		// 				height:321,
		// 				src:'images/head.jpg',
		// 				number:596,
		// 				rank:6
		// 			},
		// 			{
		// 				id:'asd8f9asdsad8hfphwa',
		// 				name:'多多拼',
		// 				height:270,
		// 				src:'images/head.jpg',
		// 				number:120,
		// 				rank:7
		// 			},
		// 			{
		// 				id:'dsadqdwdq4f4qf43',
		// 				name:'百度',
		// 				height:216,
		// 				src:'images/head.jpg',
		// 				number:101,
		// 				rank:8
		// 			},
		// 			{
		// 				id:'j567j67j5kr67kr67k',
		// 				name:'游览器',
		// 				height:93,
		// 				src:'images/head.jpg',
		// 				number:86,
		// 				rank:9
		// 			},
		// 			{
		// 				id:'r6j76jr7w45yww45',
		// 				name:'王者荣耀',
		// 				height:140,
		// 				src:'images/head.jpg',
		// 				number:78,
		// 				rank:10
		// 			}
		// 		];
		// change_view();
		// },4000);



		

		//遍历网页div高度
		var height=0;
		//获取个数 
		// var dataHeightLengh=data.data.length;   	//返回数据的总长度
		// for(var i=0;i<dataHeightLengh;i++){	
		// 	height += data.data[i].height;			//求平均值
		// }

		// var height_average=height/10;  				//获取平均值   为后期的

});



	function init_view(data){              //初始化视图
		var add_space='';
		var Percentage=2;
		for(var i=0;i<data.data.length;i++){
			add_space +='<div class="space" style="left:'+Percentage+'%">'+
				'<p class="NumberVotes"><span class="aquire_n_v">9999</span>票</p>'+
				'<div class="viewVotes"></div>'+
				'<img src="" alt="加载失败">'+
				'<div class="player_info">'+
					'<span class="player_number">1</span>号<span class="iam">我是</span>'+
					'<p class="player_name">选手名字</p>'+
				'</div>'+
			'</div>';
			Percentage +=10;
		}
		$('.index_three').append(add_space);
		$.each(data.data,function(index){    				//遍历信息回填
			$('.index_three .space').eq(index).attr('rank',data.data[index].rank);
			$('.index_three .player_name').eq(index).html(data.data[index].name);
			$('.index_three .player_name').eq(index).attr('index',data.data[index].id);
			$('.index_three img').eq(index).attr('src',data.data[index].src);
			$('.index_three .aquire_n_v').eq(index).html(data.data[index].height);
			$('.index_three .player_number').eq(index).html(data.data[index].number);

			var boxHeight=$('.index_three').height();   //本次的最高高度
			var maxHeight=$('.index_three').height()-180;  //限制最高高度

			if(data.data[index].height>maxHeight){                  //防止有 最高高度超出范围
				// $('.index_three .viewVotes').eq(index).css('height',maxHeight);
				$('.index_three .viewVotes').eq(index).animate({
					'height':maxHeight
				},1000)
			}else{
				// $('.index_three .viewVotes').eq(index).css('height',data.data[index].height);
				$('.index_three .viewVotes').eq(index).animate({
					'height':data.data[index].height
				},1000);
			}
		});
	}

	function change_view(data){              //初始化视图
		var range_inside=true;
		var left=['2%','12%','22%','32%','42%','52%','62%','72%','82%','92%'];
		$.each(data.data,function(index){    				//遍历信息回填
			range_inside=true;
			// console.log(data.data[index].name);
			// 判断是不是同一个人  
				var old_index=$('.index_three .player_name').eq(index).attr('index');
				var new_index=data.data[index].id;
				var total_data=data.data.length;
				var now_index=data.data[index].rank-1;

				if(old_index == new_index){  //同一个人只需要更变信息
					$('.index_three .aquire_n_v').eq(index).html(data.data[index].height);
					$('.index_three .player_number').eq(index).html(data.data[index].number);
				}else{		//不是同一人判断 是十名以内还是以外
					for(var i=0;i<total_data;i++){	//for循环查找十名以内是否存在
						var all_index=$('.index_three .player_name').eq(i).attr('index');
						if(all_index==new_index){     //在十名以内 的  动画  bottom变大 获取对方的left 然后用animate变化 再让botto变为0 
							range_inside=false;
							break;
						}						
					}
					if(!range_inside){     //十名以内
						var ranking_index; //获取这个人原来的排名
						for(var j=0;j<total_data;j++){
							var ranking=$('.index_three .player_name').eq(j).attr('index');
							if(ranking == new_index){
								ranking_index=j;
								break;
							}
						}
						var _this_position=left[now_index];   //获取他要去的位置  然后让后面的依次类推 改变  left
						var old_ranking=ranking_index+1;
						var now_ranking=data.data[index].rank;
						// var distance_rank=old_ranking-now_ranking;
						if(now_ranking < old_ranking){//排名上升时
							$('.index_three .space').eq(ranking_index).animate({    //先拔起来
								'bottom':100+'px'
							},200);

							$('.index_three .space').slice(now_ranking,old_ranking-1).animate({
								left:"+=10%"
							},100);

							$('.index_three .space').eq(ranking_index).animate({                  //改变left/
								'left':_this_position
							},200);

							// $('.index_three .space').eq(ranking_index).find('.viewVotes').animate({   //在改变高度
							// 	'height':data.data[index].height
							// },200);

							$('.index_three .space').animate({
								bottom:10+'px'
							});

							$('.index_three .space').eq(ranking_index).find('.viewVotes').animate({   //在改变高度
								'height':data.data[index].height
							},200);

						}else{

							$('.index_three .space').eq(ranking_index).animate({
								'left':_this_position
							},200);	


							$('.index_three .space').eq(ranking_index).find('.viewVotes').animate({
								'height':data.data[index].height
							},200);
						}
					}else{		//十名以外
						// 新建一个标签给十名以外的准备
						// var create_Label='<div class="space" id="change_position" rank="'+data.data[index].rank+'" style="bottom: 10px; right: 0;">'+
						// 					'<p class="NumberVotes"><span class="aquire_n_v">'+data.data[index].height+'</span>票</p>'+
						// 					'<div class="viewVotes" style="height: '+data.data[index].height+'px;"></div>'+
						// 					'<img src="'+data.data[index].src+'" alt="加载失败">'+
						// 					'<div class="player_info">'+
						// 						'<span class="player_number">'+data.data[index].rank+'</span>号<span class="iam">我是</span>'+
						// 						'<p class="player_name" index="asd8f9asf9w8hfphwa">'+data.data[index].name+'</p>'+
						// 					'</div>'+
						// 				  '</div>';
						// var outside_ranking=data.data[index].rank-1;	
						// var left_distance=left[outside_ranking];
						// console.log(left_distance);
						// console.log(outside_ranking);
						// $('.index_three .space').eq(outside_ranking).before(create_Label).animate({
						// 	left:left_distance,
						// 	bottom:100
						// },'fast');
						// $('.index_three .space:last').remove();
						// for(var a=0;a<data.data.length;a++){
						// 	$('.index_three .space').eq(a).animate({
						// 		left:left[a]
						// 	},'fast');
						// }
					}	
				}
		});
	}

	function show_time(){ 
	    var time_start = new Date().getTime(); //设定当前时间
	    var time_end =  new Date(endDate.time).getTime(); //设定目标时间   2018/10/01 00:00:00
	    // 计算时间差 
	    var time_distance = time_end - time_start; 
	    // 天
	    var int_day = Math.floor(time_distance/86400000) 
	    time_distance -= int_day * 86400000; 
	    // 时
	    var int_hour = Math.floor(time_distance/3600000) 
	    time_distance -= int_hour * 3600000; 
	    // 分
	    var int_minute = Math.floor(time_distance/60000) 
	    time_distance -= int_minute * 60000; 
	    // 秒 
	    var int_second = Math.floor(time_distance/1000) 
	    // 时分秒为单数时、前面加零 
	    if(int_day < 10 && int_day != 0){ 
	        int_day = "0" + int_day; 
	    } 
	    if(int_hour < 10  && int_hour != 0){ 
	        int_hour = "0" + int_hour; 
	    } 
	    if(int_minute < 10){ 
	        int_minute = "0" + int_minute; 
	    } 
	    if(int_second < 10){
	        int_second = "0" + int_second; 
	    } 
	    // 显示时间 
	    var end_time=int_day+'天'+int_hour+'时'+int_minute+'分'+int_second+'秒';
	    $('.end_l span').html(end_time);
	}
