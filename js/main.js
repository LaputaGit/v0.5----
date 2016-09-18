// main.js

require.config({
	paths : {
		jquery : './lib/jquery-3.0.0.min'
	}
})

require(['jquery', 'window'], function($,w){
	$('#a').click(function(){
		new w.Window().alert({
			width : 400,
			height : 200,
			content : "you up!",
			handler4CloseBtn : function(){
				alert('you click the close btn!')
			},
			handler4AlertBtn : function(){
				alert('you click the Alert btn!')
			},
			hasCloseBtn : true,
			skinClassName : "window_skin_a",
			text4AlertBtn : "NO1",
		})
	})
})