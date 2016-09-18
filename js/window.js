// window.js

define(['jquery'], function($){
	function Window(){
		this.cfg = {
			width : 500,
			height : 300,
			title : '系统消息',
			content : '',
			handler4AlertBtn : null,
			handler4CloseBtn : null,
			hasCloseBtn : false,
			skinClassName : null,
			text4AlertBtn : "确定"
		}
	};

	Window.prototype = {
		alert : function(cfg){
			// 如果传值的话，就用自定义的cfg，如果没有传，就用默认的cfg参数
			var CFG = $.extend(this.cfg, cfg);

			var boundingBox = $(
				'<div class="window_boundingBox">' + 
					'<div class="window_header">' + CFG.title + '</div>' + 
					'<div class="window_body">' + CFG.content + '</div>' + 
					'<div class="window_footer"><input type="button" value=" '+ CFG.text4AlertBtn +' "></div>' + 
				'</div>');
			boundingBox.appendTo("body");

			CFG.skinClassName && boundingBox.addClass(CFG.skinClassName);

			var btn = boundingBox.find('.window_footer input');
			btn.click(function(){
				// 如果存在就执行
				CFG.handler4AlertBtn && CFG.handler4AlertBtn();
				boundingBox.remove();
			});

			boundingBox.css({
				width : CFG.width + 'px',
				height : CFG.height + 'px',
				left : ( CFG.x || ( window.innerWidth - CFG.width)/2 ) + 'px',
				top : ( CFG.y || ( window.innerHeight - CFG.height)/2 ) + 'px',
			});

			if(CFG.hasCloseBtn){
				var closeBtn = $('<span class="window_closeBtn">X</span>');
				closeBtn.appendTo(boundingBox);
				closeBtn.click(function(){
					CFG.handler4CloseBtn && CFG.handler4CloseBtn();
					boundingBox.remove();
				})
			}

		},
		confirm : function(){},
		prompt : function(){},
	}

	return {
		Window : Window
	}
})