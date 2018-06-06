
var ue = UE.getEditor('editor');
var current_active_pItem=null;
var variables = {
	current_active_pItem:null,
	change_color_all:false,
    collection:false,
    template:false,
	change_color:null
}
$(function(){
	initStyle();
    ue.ready(function(){
		initUserStyle();
        var Econtent=localStorage.getItem("content");
        if(Econtent){
             ue.setContent(Econtent, true);
        }
    });
	$('#Inline').jPicker();
	$(".nice_scroll").mCustomScrollbar();
	$('[data-toggle="tooltip"]').tooltip();	

	$('.container-left ul li').click(function(){
		$(this).addClass('active').siblings('li').removeClass('active');
	});

    $('.Collection-style').click(function(){
        variables.collection=true;
        if(variables.template){
            ajaxTemplate("static/lib/json/collectionTemplate.json");
        }else{
            ajaxStyle("static/lib/json/collectionTitle.json");
            $("#title").addClass('active-green').siblings("li").removeClass("active-green");
        }
    });

    $('.new-style').click(function(){
        variables.collection=false;
        if(variables.template){
            ajaxTemplate("static/lib/json/Template.json");
        }else{
            ajaxStyle("static/lib/json/title.json");
            $("#title").addClass('active-green').siblings("li").removeClass("active-green");  
        }
    });    

    ue.addListener( 'selectionchange', function( editor ) {
         var content = ue.getContent();
         localStorage.setItem("content",'');
         localStorage.setItem("content",content);
    });


	//标题请求
	$('#title').click(function(){
        if(variables.collection){
            ajaxStyle("static/lib/json/collectionTitle.json");
        }else{
            ajaxStyle("static/lib/json/title.json");
        }
	});
	
	$('#Article').click(function(){
        if(variables.collection){
            ajaxStyle("static/lib/json/collectionText.json");
        }else{
            ajaxStyle("static/lib/json/text.json");
        }
	});
	
	$('#bar_line').click(function(){
        if(variables.collection){
            ajaxStyle("static/lib/json/collectionBar.json");
        }else{
            ajaxStyle("static/lib/json/bar.json");
        }
	});
	
	$('#guide_img').click(function(){
        if(variables.collection){
            ajaxStyle("static/lib/json/collectionGuide.json");
        }else{
            ajaxStyle("static/lib/json/guide.json");
        }
	});
	
	$('#img_text').click(function(){
        if(variables.collection){
            ajaxStyle("static/lib/json/collectionImgText.json");
        }else{
            ajaxStyle("static/lib/json/imgText.json");
        }
	});
	
	$('#col_flex').click(function(){
        if(variables.collection){
            ajaxStyle("static/lib/json/collectionFlex.json");
        }else{
            ajaxStyle("static/lib/json/flex.json");
        }
	});
	
	$('.container-right-l a').click(function(){
		$(this).addClass('active-r-l').siblings('a').removeClass('active-r-l');
	});




    //全篇使用
    $('.template-box').on("click","p.all-user",function(){
        var tid = $(this).attr("type_id");
        console.log(tid);
        $.ajax({
            type:"get",
            url:"static/lib/json/templateContent.json",
            data:{},
            success:function(data){
                 ue.execCommand("insertHtml",data.data[0].content+ '<p><br /></p>')
            },
            error:function(){
                alert('请检查网络');
            },
            async:true
        }); 
    });


	

	

	
    //模板请求数据
    $('.container-right-l .all-template').click(function(){
        $('.style-top .new-style').html('最新模板');
        $('.style-top .Collection-style').html('收藏模板');
        $('.style-top .new-style').addClass("active-green").siblings("p").removeClass("active-green");
        variables.template=true;
        $('.choose-kind-ul').hide();
        $('.mixitup-box').children('li').remove();
        ajaxTemplate("static/lib/json/Template.json");
    });

	$('.container-right-l .all-style').click(function(){
        $('.style-top .new-style').html('最新样式');
        $('.style-top .Collection-style').html('收藏样式');
        variables.template=false;
		$('.choose-kind-ul').show();
		$('.template-box').children('li').remove();
		initStyle();
	});
	
	function ajaxStyle(url){
		$.ajax({
			type:"get",
			url:url,
			data:{},
			success:function(data){
				$('.mixitup-box').children().remove();
				var dataLength=data.data.length;
				for(var i=0;i<dataLength;i++){
					$('.mixitup-box').append(`<li class="animated">`+data.data[i].html+`</li>`);
				}
			},
			error:function(){
				alert('请检查网络');
			},
			async:true
		});	
	}
	
	
	$('.style-top p').click(function(){
		$(this).addClass('active-green').siblings('p').removeClass('active-green');
	});
	
	$('.choose-kind .choose-kind-ul li').click(function(){
		$(this).addClass('active-green').siblings('li').removeClass('active-green');
	});
	
	$('.addColor').click(function(){
		$('#picker').show();
	});
	
	$('#picker').on('click','.Ok',function(){
		var color=$('#picker label .Hex').val();
		$('.color-choose .color-btns').prepend('<li><i style="background-color:#'+color+';"></i></li>');
		$('#picker').hide();
	});
	
	$('#picker').on('click','.Cancel',function(){
		$('#picker').hide();
	});	
	
	$('.color-full').click(function(){
		var flag=$(this).attr('flag');
		if(flag == 'true'){
			$(this).children('.square-box').html('');
			$(this).attr('flag','false');
			variables.change_color_all=false;
		}else{			
			$(this).children('.square-box').html('√');
			$(this).attr('flag','true');
			variables.change_color_all=true;
		}
	});
	
	//清除内容
    $('#btnClearEditor').click(function () {
        if (confirm('是否确认清空内容，清空后将无法恢复')) {
            ue.setContent('');
            localStorage.setItem("content",'');
        }
    });
	
	$('#btnClosePreviewWrap').click(function(){
		$('.demonstration').hide();
	});
	
	//手机预览
	$('#show-demonstration-btn').click(function(){
		var html=ue.getContent();
		$('#wrapPreviewContent').children().remove();
		$('#wrapPreviewContent').append(html);
//		$('#wrapPreviewContent').mCustomScrollbar();
		
		$('.demonstration').show();
	});
	
    //打开调色板
    $('#btnSetColor').click(function () {
    	variables.change_color='btnSetColor';
        if ($('#colorSelectorWrap').is(":hidden")){
            $('#colorSelectorWrap').show();
        }
        else {
            $('#colorSelectorWrap').hide();
        }
    });

    $('#btnSetFontColor').click(function () {
    	variables.change_color='btnSetFontColor';
        if ($('#colorSelectorWrap').is(":hidden")){
            $('#colorSelectorWrap').show();
        }
        else {
            $('#colorSelectorWrap').hide();
        }
    });

   	$('.color-btns').on('click','li i',function(){
   		var bkColor=$(this).css('background-color');
   		console.log(variables.change_color);
   		if(variables.change_color == 'btnSetColor'){
   			$('.bk-color .color-box').css('background-color',bkColor);
   		}else if(variables.change_color == 'btnSetFontColor'){
   			$('.bk-color .color-font').css('background-color',bkColor);
   		}
   		colorBoxClick(event);
   		$(this).append('<span class="glyphicon glyphicon-ok"></span>');
   		$(this).parents('li').siblings('li').find('i').children('span').remove();

   	});
   	
   	
   	
   	$('#btnCloseColorPicker').click(function(){
        $('#colorSelectorWrap').hide();
        
   	});
   	

       	
	$('.mixitup-box').on('click','li',function(){
		var html=$(this).children().html();
		var $html = $(html);
		
        var left = $(this).offset().left;
        var top = $(this).offset().top;
        var width = $(this).get(0).offsetWidth;

        var _left = $("#ueditor_0").offset().left;
        var _top = $(ue.selection.getStart()).offset().top - $(ue.body).scrollTop() + $('.edui-editor-toolbarbox').height();
        var _width = ue.selection.getStart().offsetWidth;
        
        $html.appendTo(document.body).css('position', 'absolute').css('z-index', 9999);
        
        $html.css({
            left: left,
            top: top,
            width: width
        }).show(10).delay(10).animate({
            left: _left,
            top: _top,
            width: _width
        }, 300, function () {

            $(this).remove();
        });
        
        setTimeout(function () {
            try {
                ue.execCommand("insertHtml", html + '<p><br /></p>')
            } catch (e) {
                console.error('插入样式组件异常', e)
            }
        }, 300)
	});
	
	
var clickPop = new baidu.editor.ui.Popup({
    content: "",
    editor: ue,
    _remove: function () {
        $(clickPop.anchorEl).remove();
        clickPop.hide();
    },
    _blank: function () {
        $('<p><br/></p>').insertAfter(clickPop.anchorEl);
    },
    _preblank: function () {
        $('<p><br/></p>').insertBefore(clickPop.anchorEl);
    },
    _P_clearStyle: function () {
        var xBrush = current_active_pItem.find('.xBrush');
        if (xBrush.length > 0) {
            var clearedText = current_active_pItem.find('.xBrush').text();
            if (clearedText != '') {
                current_active_pItem.html(clearedText);
            }
        }
        else {
            current_active_pItem.html(current_active_pItem.text());
        }
    },
    _pItem: null,
    className: 'edui-bubble'
});
	
ue.addListener("click", function (t, evt) {
        evt = evt || window.event;
        var el = evt.target || evt.srcElessment;
        if (el.tagName == "IMG") {
            $(el).css({
                'max-width': '100%',
                'max-weight': '100%'
            })
        }else if ($(el).parents('.xEditor').size() > 0) {
            el = $(el).parents('.xEditor:first').get(0);
            if (current_active_pItem) {
                current_active_pItem.removeAttr('style');
            }

            current_active_pItem = $(el);
            variables.current_active_pItem = $(el)
            current_active_pItem.css({
                'outline': '1px dotted #0faeff'
            });
            clickPop.render();
            var html = clickPop.formatHtml('<nobr class="otf-poptools">'
                + '<span onclick="$$._preblank()" stateful>'
                + '上空行 </span>'
                + '<span onclick="$$._blank()" stateful>'
                + '下空行 | </span>'
                + '<span onclick="$$._remove()" stateful>'
                + '删除 | </span>'
                + '<span onclick="$$._P_clearStyle()" stateful>'
                + ' 清除样式</span>'

                + '</nobr>');
            var content = clickPop.getDom('content');
            content.innerHTML = html;
            clickPop.anchorEl = el;
            clickPop.showAnchor(clickPop.anchorEl);
        }else {
            if (current_active_pItem) {
                current_active_pItem.removeAttr('style');
                current_active_pItem = null;
            }
        }
   });
});

	function ajaxTemplate(url){
		$.ajax({
			type:"get",
			url:url,
			data:{},
			success:function(data){
				var length=data.data.length;
                $('.template-box').children().remove();
				for(var i=0;i<length;i++){
					$('.template-box').append(`
						<li class="template-item">
							<div class="template-img">
								<img src=`+data.data[i].src+`>
							</div>
							<p class="template-title">`+data.data[i].html+`</p>
							<div class="user">
								<p class="all-user" type_id="`+data.data[i].id+`">全篇使用</p>
							<div>
						</li>
					`);		
				}
			},
			error:function(){
				alert('请检查网络');
			},
			async:true
		});	
	}

	function initStyle(){
		ajaxData("static/lib/json/title.json",{},function(e,data){	
			if(e){
				var dataLength=data.data.length;
				for(var i=0;i<dataLength;i++){
					$('.mixitup-box').append(`<li class="animated">`+data.data[i].html+`</li>`);
				}
				$(".mCustomScrollbar").mCustomScrollbar();
			}
		});
	}



	function colorBoxClick(event) {
        var event = event || window.event;
        var _this = $(event.target);

        _this.addClass('active').parent().siblings().children().removeClass('active');

        //data-color为前景色，bgcolor为背景色，或者无背景文字的前景色
        var color = _this.data('color') || '#ffe';
        var bg_color = _this.css('backgroundColor');

//      $('#btnSetColor .color-icon').css({
//          backgroundColor: bg_color
//      });

        if (variables.change_color_all) {
        	console.log('进来这里第一个');
            var $content = $(ue.getContent());
	   		if(variables.change_color == 'btnSetColor'){
	   			console.log('进来第四个');
	   			var $result = changeColor($content, bg_color, '#ffe');
	   		}else if(variables.change_color == 'btnSetFontColor'){
	   			console.log('进来第五个');
	   			var $result = changeFontColor($content, bg_color, '#ffe');
	   		}
//          var $result = changeColor($content, bg_color, '#ffe');
            if ($result != false) {
            	console.log('进来第二个');
                var $result2 = '';
                for (var i = 0; i < $result.length; i++) {
                    $result2 += $($result[i]).prop('outerHTML')
                }

                ue.setContent($result2)
            }

        }
        else {
        	console.log('进来第三个');
            if (variables.current_active_pItem != null && variables.current_active_pItem.length > 0) {
                changeColor(variables.current_active_pItem, bg_color, color);
            }
        }
   }
	
    //替换颜色
    function changeFontColor(obj, bgcolor, color) {
        if (isGreyColor(bgcolor)) {
            return false;
        }
        obj.find("*").each(function () {
        	$(this).css('color', bgcolor);
        });
        obj.find("*").each(function () {
            var fc = $(this).css('color');
            $(this).find('*').each(function () {
                var nfc = $(this).css('color');
                if (nfc == fc) {
                    $(this).css('color', 'inherit')
                }
            });
        });
        return obj;
    }
        
        
    function changeColor(obj, bgcolor, color) {
        if (isGreyColor(bgcolor)) {
            return false;
        }
        obj.find("*").each(function () {
            if (this.nodeName == "HR" || this.nodeName == "hr") {
                $(this).css('border-color', bgcolor);
                return;
            }
            if (this.nodeName == "") {
                return;
            }
            if ($(this).data('ct') == 'fix') {
                return;
            }
            var bgimg = $(this).css('backgroundImage');
            if (bgimg.substring(0, 24) == '-webkit-linear-gradient(') {
                var colors;
                var type;
                if (bgimg.substring(0, 30) == '-webkit-linear-gradient(left, ') {
                    type = 'left';
                    colors = bgimg.substring(30, (bgimg.length - 1));
                } else if (bgimg.substring(0, 29) == '-webkit-linear-gradient(top, ') {
                    type = 'top';
                    colors = bgimg.substring(29, (bgimg.length - 1));
                } else if (bgimg.substring(0, 31) == '-webkit-linear-gradient(right, ') {
                    type = 'right';
                    colors = bgimg.substring(31, (bgimg.length - 1));
                } else if (bgimg.substring(0, 32) == '-webkit-linear-gradient(bottom, ') {
                    type = 'bottom';
                    colors = bgimg.substring(32, (bgimg.length - 1));
                }
                if (colors) {
                    var color_arr = colors.split('),');
                    var txt_color, gradient_color, main_color;
                    if (isLightenColor(bgcolor)) {
                        txt_color = getColor(rgb2hex(bgcolor), 'darken', '50%');
                        txt_color = getColor(rgb2hex(txt_color), 'saturate', '30%');
                        gradient_color = getColor(rgb2hex(bgcolor), 'darken', '10%');
                        main_color = getColor(rgb2hex(bgcolor), 'saturate', '20%');
                    } else {
                        txt_color = '#FFFFFF';
                        getColor(rgb2hex(bgcolor), 'lighten', '50%');
                        gradient_color = getColor(_self.rgb2hex(bgcolor), 'lighten', '10%');
                        main_color = getColor(rgb2hex(bgcolor), 'lighten', '5%');
                        main_color = getColor(rgb2hex(main_color), 'desaturate', '10%');
                        main_color = getColor(rgb2hex(main_color), 'fadein', '20%');
                    }
                    if (color_arr.length == 3) {
                        $(this).css('backgroundImage', '-webkit-linear-gradient(' + type + ', ' + main_color + ', ' + gradient_color + ', ' + main_color + ')');
                        $(this).css('color', txt_color);
                    } else if (color_arr.length == 2) {
                        $(this).css('backgroundImage', '-webkit-linear-gradient(' + type + ', ' + main_color + ', ' + gradient_color + ')');
                        $(this).css('color', txt_color);
                    }
                }
            }
            var persent = $(this).data('clessp') ? $(this).data('clessp') : '50%';
            var hasSetBgColor = false;
            var bgC = $(this).get(0).style.backgroundColor;
            if (!bgC || bgC === 'initial' || bgC === 'transparent' || bgC === "") {
                var fc = $(this).get(0).style.color;
                if (fc && fc != "" && fc != 'inherit' && !isGreyColor(fc)) {
                    var txt_color;
                    if (isLightenColor(bgcolor)) {
                        txt_color = getColor(rgb2hex(bgcolor), 'darken', persent);
                        $(this).css('color', txt_color);
                    } else {
                        $(this).css('color', bgcolor);
                    }
                }
            } else {
                if ($(this).data('bgless')) {
                    var bgpersent = $(this).data('bglessp') ? $(this).data('bglessp') : '30%';
                    var bg_color;
                    if ($(this).data('bgless') == "true" || $(this).data('bgless') == true) {
                        if (isLightenColor(bgcolor)) {
                            bg_color = getColor(rgb2hex(bgcolor), 'darken', bgpersent);
                            bg_color = getColor(rgb2hex(bg_color), 'saturate', '20%');
                        } else {
                            bg_color = getColor(rgb2hex(bgcolor), 'lighten', bgpersent);
                        }
                    } else {
                        bg_color = getColor(rgb2hex(bgcolor), $(this).data('bgless'), bgpersent);
                    }
                    if (isLightenColor(bg_color)) {
                        txt_color = getColor(rgb2hex(bg_color), 'darken', persent)
                    } else {
                        txt_color = color;
                    }
                    hasSetBgColor = true;
                    $(this).css('backgroundColor', bg_color);
                    $(this).css('color', txt_color);
                } else if (!isGreyColor(bgC)) {
                    hasSetBgColor = true;
                    $(this).css('backgroundColor', bgcolor);
                    var txt_color;
                    if (isLightenColor(bgcolor)) {
                        txt_color = getColor(rgb2hex(bgcolor), 'darken', persent)
                    } else {
                        txt_color = color;
                    }
                    $(this).css('color', txt_color);
                } else {
                    var fc = $(this).get(0).style.color;
                    if (fc && fc != "" && fc != 'inherit' && !isGreyColor(fc)) {
                        $(this).css('color', bgcolor);
                    }
                }
            }
            if ($(this).data('bcless') || hasSetBgColor) {
                var bc_color;
                if (isLightenColor(bgcolor) || $(this).data('bcless') == 'darken') {
                    var persent = $(this).data('bclessp') ? $(this).data('bclessp') : '5%';
                    bc_color = getColor(rgb2hex(bgcolor), 'darken', persent);
                    bc_color = getColor(rgb2hex(bc_color), 'saturate', '30%');
                } else {
                    var persent = $(this).data('bclessp') ? $(this).data('bclessp') : '20%';
                    bc_color = getColor(rgb2hex(bgcolor), 'lighten', persent);
                    bc_color = getColor(rgb2hex(bc_color), 'desaturate', '20%');
                    bc_color = getColor(rgb2hex(bc_color), 'fadein', '20%');
                }
                if (this.style.borderBottomColor || this.style.borderTopColor || this.style.borderLeftColor || this.style.borderRightColor) {
                    this.style.borderBottomColor = bc_color;
                    this.style.borderTopColor = bc_color;
                    this.style.borderLeftColor = bc_color;
                    this.style.borderRightColor = bc_color;
                } else {
                    this.style.borderColor = bc_color;
                }
            } else {
                if (this.style.borderBottomColor || this.style.borderTopColor || this.style.borderLeftColor || this.style.borderRightColor) {
                    setColor(this, 'borderBottomColor', bgcolor);
                    setColor(this, 'borderTopColor', bgcolor);
                    setColor(this, 'borderLeftColor', bgcolor);
                    setColor(this, 'borderRightColor', bgcolor);
                } else {
                    setColor(this, 'borderColor', bgcolor);
                }
            }
        });
        obj.find("*").each(function () {
            var fc = $(this).css('color');
            $(this).find('*').each(function () {
                var nfc = $(this).css('color');
                if (nfc == fc) {
                    $(this).css('color', 'inherit')
                }
            });
        });
        return obj;
    }        
        
        
    function getColor(color, type, num) {
        var str = '';
        var _lessParser = new less.Parser;
        _lessParser.parse('*{color:' + type + '(' + color + ',' + num + ')}',
            function (err, tree) {
                str = tree.toCSS();
                str = str.replace(/\n/g, '').replace(/ /g, '').replace('*{color:', '').replace(';}', '');
            });
        return str;
    }        
        
        
    function isGreyColor(color) {
        var c = rgb2hex(color);
        var r = "" + c.substring(1, 3);
        var g = "" + c.substring(3, 5);
        var b = "" + c.substring(5, 7);
        if (r == g && g == b) {
            return true;
        } else {
            return false;
        }
    }
    
    function rgb2hex(color) {
        var rgb = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        return (rgb && rgb.length === 4) ? "#" + ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) + ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) + ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : color;
    }
    
    function setColor(obj, colorType, color) {
        var c = $(obj).css(colorType);
        if (c === 'transparent') {
            return;
        } else {
            if (!isGreyColor(c)) {
                $(obj).css(colorType, color);
            }
        }
    }
    
    function isLightenColor(color) {
        var c = rgb2hex(color);
        var r = ("" + c.substring(1, 3));
        var g = ("" + c.substring(3, 5));
        var b = ("" + c.substring(5, 7));
        if (r > 'C0' && g > 'C0' && b > 'C0') {
            return true;
        } else {
            return false;
        }
    }
    
	function initUserStyle(){
		var userStyle = localStorage.getItem("userStyle");
		if(userStyle){
			ue.setContent(userStyle, true);
			localStorage.setItem("userStyle",'');
		}
	}

