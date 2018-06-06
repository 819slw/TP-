
$(function(){
	ajax_requst(config.url,config.col);
	ajax_change(config.url,config.col,config.secound);
	
var nice = false;
$(document).ready(
    function() {
        nice = $("#add_code").niceScroll({
            cursorcolor: "#cac6c1",
            cursorborder: "#cac6c1",
            cursorwidth: "0"
        })
    }
);

});

function ajax_change(url,col,secound){
	setInterval(function(){
		$('#add_code .row').children().remove();
		ajax_requst(config.url,config.col);
	},secound);

}
function ajax_requst(url,col){
		$.ajax({
			url:url,
			success:function(data){
				console.log(data);
				var data_length=data.data.length;
				var temp='';
				var Average=data.data[0].count*0.98;
				for(var i=0;i<data_length;i++){
					var Triangle='Triangle';
					if(i == 0){
						Triangle='Triangle_one';
					}else if(i==1){
						Triangle='Triangle_tow';
					}else if(i==2){
						Triangle='Triangle_three';
					}else{
						Triangle='Triangle';
					}
					var now_average=data.data[i].count/Average*100>100 ? 98 : data.data[i].count/Average*100;
					temp += '<div class="col-md-'+col+' user_box">'+
					    		'<div class="b_p center_f">'+
					    		'<div id="'+Triangle+'"></div>'+
					    		'<b class="rank_index">'+data.data[i].rank+'</b>'+
					    			'<img src="'+data.data[i].image+'" class="player_head"><br>'+
					    			'<span class="player_name">'+data.data[i].title+'</span><br>'+
					    			'<span class="player_number"><span>'+data.data[i].count+'</span>票</span>'+
						    		'<div class="show_number_bar">'+
						    			'<div class="number_bar" style="width:'+now_average+'%"></div>'+
						    		'</div>'+				    			
					    		'</div>'+
					    	'</div>';
				};
				$('#add_code .row').append(temp);
			},
			error:function(){
				// alert('����ʧ��');
			}
		});
}